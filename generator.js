//NOTICE: As of version 6, this script will only generate cards correctly for Ocarina of Time bingo
//and as such should be saved alongside the regular bingo script.


// 100 is way higher than would ever be allowed, so use it
// as a signal to get out
var TOO_MUCH_SYNERGY = 100;

// the maximum synergy allowed in any one row
var DEFAULT_MAXIMUM_SYNERGY = 0;

// the maximum allowed spill up in difficulty when choosing a goal
var DEFAULT_MAXIMUM_SPILL = 2;

//giuocob 16-8-12: lineCheckList[] has been replaced to allow for removal of all-child rows
//Note: the INDICES_PER_ROW relation is simply the inverse of the ROWS_PER_INDEX relation
var INDICES_PER_ROW = {
    "row1": [1, 2, 3, 4, 5],
    "row2": [6, 7, 8, 9, 10],
    "row3": [11, 12, 13, 14, 15],
    "row4": [16, 17, 18, 19, 20],
    "row5": [21, 22, 23, 24, 25],
    "col1": [1, 6, 11, 16, 21],
    "col2": [2, 7, 12, 17, 22],
    "col3": [3, 8, 13, 18, 23],
    "col4": [4, 9, 14, 19, 24],
    "col5": [5, 10, 15, 20, 25],
    "tlbr": [1, 7, 13, 19, 25],
    "bltr": [5, 9, 13, 17, 21]
};

//Given an object that maps keys to flat arrays, invert said object
function invertObject(obj) {
    var ret = {};
    Object.keys(obj).forEach(function (key) {
        obj[key].forEach(function (item) {
            if (!ret[item]) ret[item] = [];
            ret[item].push(key);
        });
    });
    return ret;
}

// a mapping from board slot to the rows that it's a part of
// for example, ROWS_PER_INDEX[1] returns ["row1", "col1", "tlbr"]
var ROWS_PER_INDEX = invertObject(INDICES_PER_ROW);

var BingoGenerator = function(bingoList, options) {
    if (!options) {
        options = {};
    }

    this.bingoList = bingoList;

    this.language = options.lang || 'name';
    this.mode = options.mode || 'normal';
    this.seed = options.seed || Math.ceil(999999 * Math.random()).toString();

    this.maximumSynergy = options.maximumSynergy || DEFAULT_MAXIMUM_SYNERGY;
    this.maximumSpill = options.maximumSpill || DEFAULT_MAXIMUM_SPILL;

    Math.seedrandom(this.seed);
};

//Main entry point
BingoGenerator.prototype.makeCard = function() {
    // set up the bingo board by filling in the difficulties based on a magic square
    this.bingoBoard = this.generateMagicSquare();

    // fill in the goals of the board in a random order
    var populationOrder = this.generatePopulationOrder();
    for (var i = 1; i <= 25; i++) {
        var nextPosition = populationOrder[i];

        var result = this.chooseGoalForPosition(nextPosition);

        if (result.goal) {
            // copy the goal data into the square
            this.bingoBoard[nextPosition].types = result.goal.types;
            this.bingoBoard[nextPosition].subtypes = result.goal.subtypes;
            this.bingoBoard[nextPosition].name = result.goal[this.language] || result.goal.name;
            this.bingoBoard[nextPosition].child = result.goal.child;
            this.bingoBoard[nextPosition].goal = result.goal;

            // also copy the synergy
            this.bingoBoard[nextPosition].synergy = result.synergy;
        }
        else {
            return false;
        }
    }

    return this.bingoBoard;
};

/**
 * Generate an initial magic square of difficulties based on the random seed
 * @returns {Array}
 */
BingoGenerator.prototype.generateMagicSquare = function() {
    var magicSquare = [];

    for (var i = 1; i <= 25; i++) {
        if (this.mode == "short") {
            magicSquare[i] = {difficulty: this.difficulty(i), child: "yes"};
        }
        else {
            magicSquare[i] = {difficulty: this.difficulty(i), child: "no"};
        }
    }

    return magicSquare;
};

/**
 * Given a position on the board, chooses a goal that can be placed in that position without
 * blowing our synergy budget.
 * @param position  the position on the board that we want to find a goal for
 * @returns  {goal, synergy} or false
 */
BingoGenerator.prototype.chooseGoalForPosition = function(position) {
    var desiredDifficulty = this.bingoBoard[position].difficulty;
    var maximumDifficulty = Math.min(25, desiredDifficulty + this.maximumSpill);

    // scan through the acceptable difficulty ranges
    for (var difficulty = desiredDifficulty; difficulty <= maximumDifficulty; difficulty++) {
        var goalsAtDifficulty = this.getShuffledGoals(difficulty);

        // scan through each goal at this difficulty level
        for (var j = 0; j < goalsAtDifficulty.length; j++) {
            var goal = goalsAtDifficulty[j];
            var synergy = this.checkLine(position, goal);

            if (synergy <= this.maximumSynergy) {
                // compatibility conditions
                if (j === goalsAtDifficulty.length - 1) {
                    if (difficulty == maximumDifficulty) {
                        // technically the goal should still be valid under these conditions,
                        // but the old generator returned here so I will too
                        return false;
                    } else {
                        // waste rng to be compatible with the old generator
                        this.getShuffledGoals(difficulty + 1);
                    }
                }

                return {goal: goal, synergy: synergy};
            }
        }
    }

    return false;
};

/**
 * Generate a semi-random order to populate the bingo board goals in
 * @returns {Array}
 */
BingoGenerator.prototype.generatePopulationOrder = function() {
    //giuocob 19-2-13: this.bingoBoard is no longer populated left to right:
    //It is now populated mostly randomly, with high difficult goals and
    //goals on the diagonals out in front
    var populationOrder = [];
    populationOrder[1] = 13;   //Populate center first
    var diagonals = [1, 7, 19, 25, 5, 9, 17, 21];
    this.shuffle(diagonals);
    populationOrder = populationOrder.concat(diagonals);   //Next populate diagonals
    var nondiagonals = [2, 3, 4, 6, 8, 10, 11, 12, 14, 15, 16, 18, 20, 22, 23, 24];
    this.shuffle(nondiagonals);
    populationOrder = populationOrder.concat(nondiagonals);   //Finally add the rest of the squares
    //Lastly, find location of difficulty 23,24,25 elements and put them out front
    for (var k = 23; k <= 25; k++) {
        var currentSquare = this.getDifficultyIndex(k);
        if (currentSquare === 0) continue;
        for (var i = 1; i < 25; i++) {
            if (populationOrder[i] == currentSquare) {
                populationOrder.splice(i, 1);
                break;
            }
        }
        populationOrder.splice(1, 0, currentSquare);
    }

    return populationOrder;
};

// uses a magic square to calculate the intended difficulty of a location on the bingo board
BingoGenerator.prototype.difficulty = function(i) {
    // To create the magic square we need 2 random orderings of the numbers 0, 1, 2, 3, 4.
    // The following creates those orderings and calls them Table5 and Table1

    var Num3 = this.seed % 1000; // Table5 will use the ones, tens, and hundreds digits.

    var Rem8 = Num3 % 8;
    var Rem4 = Math.floor(Rem8 / 2);
    var Rem2 = Rem8 % 2;
    var Rem5 = Num3 % 5;
    var Rem3 = Num3 % 3;    // Note that Rem2, Rem3, Rem4, and Rem5 are mathematically independent.
    var RemT = Math.floor(Num3 / 120);  // This is between 0 and 8

    // The idea is to begin with an array containing a single number, 0.
    // Each number 1 through 4 is added in a random spot in the array's current size.
    // The result - the numbers 0 to 4 are in the array in a random (and uniform) order.
    var Table5 = [0];
    Table5.splice(Rem2, 0, 1);
    Table5.splice(Rem3, 0, 2);
    Table5.splice(Rem4, 0, 3);
    Table5.splice(Rem5, 0, 4);

    Num3 = Math.floor(this.seed / 1000); // Table1 will use the next 3 digits.
    Num3 = Num3 % 1000;

    Rem8 = Num3 % 8;
    Rem4 = Math.floor(Rem8 / 2);
    Rem2 = Rem8 % 2;
    Rem5 = Num3 % 5;
    Rem3 = Num3 % 3;
    RemT = RemT * 8 + Math.floor(Num3 / 120);   // This is between 0 and 64.

    var Table1 = [0];
    Table1.splice(Rem2, 0, 1);
    Table1.splice(Rem3, 0, 2);
    Table1.splice(Rem4, 0, 3);
    Table1.splice(Rem5, 0, 4);

    i--;
    RemT = RemT % 5;        //  Between 0 and 4, fairly uniformly.
    x = (i + RemT) % 5;     //  RemT is horizontal shift to put any diagonal on the main diagonal.
    y = Math.floor(i / 5);

    // The Tables are set into a single magic square template
    // Some are the same up to some rotation, reflection, or row permutation.
    // However, all genuinely different magic squares can arise in this fashion.
    var e5 = Table5[(x + 3 * y) % 5];
    var e1 = Table1[(3 * x + y) % 5];

    // Table5 controls the 5* part and Table1 controls the 1* part.
    value = 5 * e5 + e1;

    if (this.mode == "short") {
        value = Math.floor(value / 2);
    } // if short mode, limit difficulty
    else if (this.mode == "long") {
        value = Math.floor((value + 25) / 2);
    }
    value++;
    return value;
};

//Uniformly shuffles an array (note: the original array will be changed)
BingoGenerator.prototype.shuffle = function(toShuffle) {
    for (var i = 0; i < toShuffle.length; i++) {
        var randElement = Math.floor(Math.random() * (i + 1));
        var temp = toShuffle[i];
        toShuffle[i] = toShuffle[randElement];
        toShuffle[randElement] = temp;
    }
};

//Get a uniformly shuffled array of all the goals of a given difficulty tier
BingoGenerator.prototype.getShuffledGoals = function(difficulty) {
    var newArray = this.bingoList[difficulty].slice();
    this.shuffle(newArray);
    return newArray;
};

//Given a difficulty as an argument, find the square that contains that difficulty
BingoGenerator.prototype.getDifficultyIndex = function(difficulty) {
    for (var i = 1; i <= 25; i++) {
        if (this.bingoBoard[i].difficulty == difficulty) {
            return i;
        }
    }
    return 0;
};

/**
 * Return the squares in the given row *EXCEPT* the square at the given position.
 *
 * for example, getOtherSquares("row1", 4) would return the squares at positions [1, 2, 3, 5],
 * but not the square at position 4.
 *
 * @param row  the row on the board to pull squares from
 * @param position  the position to ignore
 * @returns {*|Array}
 */
BingoGenerator.prototype.getOtherSquares = function(row, position) {
    var rowIndices = INDICES_PER_ROW[row].filter(function(index) {
        return index != position;
    });

    var board = this;

    return rowIndices.map(function(index) {
        return board.bingoBoard[index];
    });
};

/**
 * Given a position on the board and a potential goal, determines the maximum amount of synergy that
 * any row containing the position would have
 * @param position  the position on the bingo board
 * @param potentialGoal  the goal that we're considering adding to the position
 * @returns {number}  the maximum synergy that the goal would have at that position
 */
BingoGenerator.prototype.checkLine = function(position, potentialGoal) {
    var rows = ROWS_PER_INDEX[position];
    var maxSynergy = 0;
    var minSynergy = TOO_MUCH_SYNERGY;

    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var row = rows[rowIndex];

        // get the list of other squares in the row and append the potential goal,
        var potentialRow = this.getOtherSquares(row, position);
        potentialRow.push(potentialGoal);

        var effectiveRowSynergy = this.evaluateSquares(potentialRow);

        maxSynergy = Math.max(maxSynergy, effectiveRowSynergy);
        minSynergy = Math.min(minSynergy, effectiveRowSynergy);
    }

    return maxSynergy;
};

/**
 * Given a row, calculates the effective synergy between the squares in the row.
 * @param row  the string name of the row to check
 * @returns {number}
 */
BingoGenerator.prototype.evaluateRow = function(row) {
    return this.evaluateSquares(this.getOtherSquares(row));
};

/**
 * Given an array of squares, calculates the effective synergy between the squares.
 * This is determined using the type and subtype information of the goals in each square.
 * In normal bingos, additionally bails out rows that have all child goals by returning TOO_MUCH_SYNERGY.
 * In short bingos, additionally bails out rows with adult only goals by returning TOO_MUCH_SYNERGY
 * @param squares
 */
BingoGenerator.prototype.evaluateSquares = function(squares) {
    var childCount = squares.filter(function(square) { return square.child == "yes"; }).length;

    //Remove child-only rows, remove adult goals from short
    if (this.mode === "short" && childCount < 5) {
        return TOO_MUCH_SYNERGY;
    }
    // abort all-child rows in non-short bingos
    else if(this.mode !== "short" && childCount > 4) {
        return TOO_MUCH_SYNERGY;
    }

    var synergiesForSquares = this.calculateSynergiesForSquares(squares);
    return this.calculateEffectiveSynergyForSquares(synergiesForSquares);
};

// aggregates type synergy data from the squares in a row for later use
BingoGenerator.prototype.calculateSynergiesForSquares = function(squares) {
    // a map of type -> list of type synergy values
    var typeSynergies = {};
    // a map of subtype -> list of subtype synergy values
    var subtypeSynergies = {};
    // number of goals in the row that can be completed child-only
    var numChildGoals = 0;

    for (var m = 0; m < squares.length; m++) {
        var square = squares[m];

        this.mergeTypeSynergies(typeSynergies, square.types);
        this.mergeTypeSynergies(subtypeSynergies, square.subtypes);

        if (square.child == "yes") {
            numChildGoals++;
        }
    }

    return {
        typeSynergies: typeSynergies,
        subtypeSynergies: subtypeSynergies,
        numChildGoals: numChildGoals
    };
};

// helper method for implementing calculateSynergiesForSquares
BingoGenerator.prototype.mergeTypeSynergies = function(typeSynergies, newTypeSynergies) {
    for (var type in newTypeSynergies) {
        if (!typeSynergies[type]) {
            typeSynergies[type] = [];
        }

        typeSynergies[type].push(newTypeSynergies[type]);
    }
};

// given aggregated type synergies for the row, calculates the effective synergy for that row
BingoGenerator.prototype.calculateEffectiveSynergyForSquares = function(synergiesForSquares) {
    // the maximum synergy value allowed for a single synergy before we puke
    // not sure if we care about this?
    // why would a single large synergy matter more than the sum of small synergies...
    var MAX_INDIVIDUAL_SYNERGY = 3;

    var typeSynergies = synergiesForSquares.typeSynergies;
    var subtypeSynergies = synergiesForSquares.subtypeSynergies;

    // Check each subtype found to see if there is a matching type somewhere in the row
    // If so, add the subtype to the grand list
    for (var subtype in subtypeSynergies) {
        if (subtype in typeSynergies) {
            typeSynergies[subtype] = typeSynergies[subtype].concat(subtypeSynergies[subtype]);
        }
    }

    // total synergy in the row
    var rowSynergy = 0;

    // Assess final row synergy by removing the largest element from each type and adding the rest
    for (var type in typeSynergies) {
        typeSynergies[type].sort();

        var synergies = typeSynergies[type];

        for (var n = 1; n < synergies.length; n++) {
            if (synergies[n] > MAX_INDIVIDUAL_SYNERGY) {
                return TOO_MUCH_SYNERGY;
            }

            rowSynergy += synergies[n];
        }
    }

    return rowSynergy;
};


// preserve this function name for compatibility with existing code
ootBingoGenerator = function (bingoList, opts) {

    var bingoGenerator = new BingoGenerator(bingoList, opts);

    // repeatedly attempt to generate a card until it succeeds, bailing out after 10 fails
    var card = false;
    var iterations = 0;
    while (!card && iterations < 10) {
        card = bingoGenerator.makeCard();
        iterations++;
    }

    card["meta"] = {iterations: iterations};

    return card;
};
