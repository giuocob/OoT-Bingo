//NOTICE: As of version 6, this script will only generate cards correctly for Ocarina of Time bingo
//and as such should be saved alongside the regular bingo script.
ootBingoGenerator = function (bingoList, opts) {
    if (!opts) {
        opts = {};
    }

    var LANG = opts.lang || 'name';
    var MODE = opts.mode || 'normal';
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    Math.seedrandom(SEED);

    // 100 is way higher than would ever be allowed, so use it
    // as a signal to get out
    var TOO_MUCH_SYNERGY = 100;

    //giuocob 16-8-12: lineCheckList[] has been replaced to allow for removal of all-child rows
    //Note: the rowElements relation is simply the inverse of the rowCheckList relation
    var rowElements = {
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
    // for example, rowCheckList[1] returns ["row1", "col1", "tlbr"]
    var rowCheckList = invertObject(rowElements);


    //Main entry point
    function makeCard() {
        var bingoBoard = []; //the board itself stored as an array first
        for (var i = 1; i <= 25; i++) {
            if (MODE == "short") {
                bingoBoard[i] = {difficulty: difficulty(i), child: "yes"};
            }
            else {
                bingoBoard[i] = {difficulty: difficulty(i), child: "no"};
            }
        }                                          // in order 1-25

        //giuocob 19-2-13: bingoBoard is no longer populated left to right:
        //It is now populated mostly randomly, with high difficult goals and
        //goals on the diagonals out in front
        var populationOrder = [];
        populationOrder[1] = 13;   //Populate center first
        var diagonals = [1, 7, 19, 25, 5, 9, 17, 21];
        shuffle(diagonals);
        populationOrder = populationOrder.concat(diagonals);   //Next populate diagonals
        var nondiagonals = [2, 3, 4, 6, 8, 10, 11, 12, 14, 15, 16, 18, 20, 22, 23, 24];
        shuffle(nondiagonals);
        populationOrder = populationOrder.concat(nondiagonals);   //Finally add the rest of the squares
        //Lastly, find location of difficulty 23,24,25 elements and put them out front
        for (var k = 21; k <= 25; k++) {
            var currentSquare = getDifficultyIndex(k);
            if (currentSquare === 0) continue;
            for (var i = 1; i < 25; i++) {
                if (populationOrder[i] == currentSquare) {
                    populationOrder.splice(i, 1);
                    break;
                }
            }
            populationOrder.splice(1, 0, currentSquare);
        }


        //Populate the bingo board in the array
        //giuocob 16-8-12: changed this section to:
        //1. Support uniform goal selection by shuffling arrays before checking goals
        //2. Remove all child rows by checking child tag
        //3. If no goal is suitable, instead of choosing goal with lowest synergy, now next difficulty up is checked
        for (var i = 1; i <= 25; i++) {
            var sq = populationOrder[i];
            var getDifficulty = bingoBoard[sq].difficulty;
            var goalArray = getShuffledGoals(getDifficulty);
            var j = 0, synergy = 0, spill = 0, currentObj = null, minSynObj = null;
            do
            {
                currentObj = goalArray[j];
                synergy = checkLine(sq, currentObj);
                minSynObj = {synergy: synergy, value: currentObj};
                j++;
                if (j >= goalArray.length) {
                    getDifficulty++;
                    spill++;
                    if (getDifficulty > 25) {
                        return false;  //HIT THE PANIC BUTTON, RUN FOR THE HILLS
                    } else if (spill >= 3) {
                        return false;  //THIS BINGO CARD IS IN UNACCEPTABLE CONDITION
                    } else {
                        goalArray = getShuffledGoals(getDifficulty);
                        j = 0;
                    }
                }
            } while (synergy > 7);


            bingoBoard[sq].types = minSynObj.value.types;
            bingoBoard[sq].subtypes = minSynObj.value.subtypes;
            bingoBoard[sq].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[sq].child = minSynObj.value.child;
            bingoBoard[sq].synergy = minSynObj.synergy;
        }

        return bingoBoard;


        function difficulty(i) {
            // To create the magic square we need 2 random orderings of the numbers 0, 1, 2, 3, 4.
            // The following creates those orderings and calls them Table5 and Table1

            var Num3 = SEED % 1000; // Table5 will use the ones, tens, and hundreds digits.

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

            Num3 = Math.floor(SEED / 1000); // Table1 will use the next 3 digits.
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

            if (MODE == "short") {
                value = Math.floor(value / 2);
            } // if short mode, limit difficulty
            else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        //Uniformly shuffles an array (note: the original array will be changed)
        function shuffle(toShuffle) {
            for (var i = 0; i < toShuffle.length; i++) {
                var randElement = Math.floor(Math.random() * (i + 1));
                var temp = toShuffle[i];
                toShuffle[i] = toShuffle[randElement];
                toShuffle[randElement] = temp;
            }
        }

        //Get a uniformly shuffled array of all the goals of a given difficulty tier
        function getShuffledGoals(difficulty) {
            var newArray = bingoList[difficulty].slice();
            shuffle(newArray);
            return newArray;
        }

        //Given a difficulty as an argument, find the square that contains that difficulty
        function getDifficultyIndex(difficulty) {
            for (var i = 1; i <= 25; i++) {
                if (bingoBoard[i].difficulty == difficulty) {
                    return i;
                }
            }
            return 0;
        }

        // given a row, get the squares in the board in that row
        function getSquaresInRow(row) {
            var rowIndices = rowElements[row];

            return rowIndices.map(function(index) {
                return bingoBoard[index];
            });
        }

        function checkLine(i, targetSquare) {
            var rows = rowCheckList[i];
            var maxSynergy = 0;
            var minSynergy = TOO_MUCH_SYNERGY;

            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                var row = rows[rowIndex];

                var otherSquares = getSquaresInRow(row);
                // TODO: I think this concat causes double counting, but it's needed for compatibility
                var squaresInRow = otherSquares.concat([targetSquare]);

                var rowTypeSynergies = calculateRowTypeSynergies(squaresInRow);
                var effectiveRowSynergy = calculateEffectiveRowSynergy(rowTypeSynergies);
                var childCount = rowTypeSynergies.numChildGoals;

                //Remove child-only rows, remove adult goals from short
                // TODO: why does this have to be 6 instead of 5, I think there's duplicate counting?
                if (MODE === "short" && childCount < 6) {
                    return TOO_MUCH_SYNERGY;
                }
                // abort all-child rows in non-short bingos
                else if(MODE !== "short" && childCount > 4) {
                    return TOO_MUCH_SYNERGY;
                }

                maxSynergy = Math.max(maxSynergy, effectiveRowSynergy);
                minSynergy = Math.min(minSynergy, effectiveRowSynergy);
            }

            return maxSynergy;
        }

        function calculateRowTypeSynergies(squaresInRow) {
            // a map of type -> list of type synergy values
            var typesSynergies = {};
            // a map of subtype -> list of subtype synergy values
            var subtypesSynergies = {};
            // number of goals in the row that can be completed child-only
            var numChildGoals = 0;

            for (var m = 0; m < squaresInRow.length; m++) {
                var squareInRow = squaresInRow[m];

                mergeTypeSynergies(typesSynergies, squareInRow.types);
                mergeTypeSynergies(subtypesSynergies, squareInRow.subtypes);

                if (squareInRow.child == "yes") {
                    numChildGoals++;
                }
            }

            return {
                typesSynergies: typesSynergies,
                subtypesSynergies: subtypesSynergies,
                numChildGoals: numChildGoals
            };
        }

        function mergeTypeSynergies(typeSynergies, newTypeSynergies) {
            for (var type in newTypeSynergies) {
                if (!typeSynergies[type]) {
                    typeSynergies[type] = [];
                }

                typeSynergies[type].push(newTypeSynergies[type]);
            }
        }

        function calculateEffectiveRowSynergy(rowTypeSynergies) {
            // the maximum synergy value allowed for a single synergy before we puke
            // not sure if we care about this?
            // why would a single large synergy matter more than the sum of small synergies...
            var MAX_INDIVIDUAL_SYNERGY = 3;

            var typesSynergies = rowTypeSynergies.typesSynergies;
            var subtypesSynergies = rowTypeSynergies.subtypesSynergies;

            // Check each subtype found to see if there is a matching type somewhere in the row
            // If so, add the subtype to the grand list
            for (var subtype in subtypesSynergies) {
                if (subtype in typesSynergies) {
                    typesSynergies[subtype].concat(subtypesSynergies[subtype]);
                }
            }

            // total synergy in the row
            var rowSynergy = 0;

            // Assess final row synergy by removing the largest element from each type and adding the rest
            for (var type in typesSynergies) {
                typesSynergies[type].sort();

                var synergies = typesSynergies[type];

                for (var n = 1; n < synergies.length; n++) {
                    if (synergies[n] > MAX_INDIVIDUAL_SYNERGY) {
                        return TOO_MUCH_SYNERGY
                    }

                    rowSynergy += synergies[n];
                }
            }

            return rowSynergy;
        }

    }


    // repeatedly attempt to generate a card until it succeeds, bailing out after 10 fails
    var card = false;
    var iterations = 0;
    while (!card && iterations < 10) {
        card = makeCard();
        iterations++;
    }

    return card;
};
