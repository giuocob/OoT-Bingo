// creates a list of all of the goals
var allGoals = new Array();
// list of difficulty sets
var difficultyGroups = new Array();

for(var difficulty in bingoList) {
    var items = bingoList[difficulty];
    var difficultyGroup = new Array();

    for(var i = 0; i < items.length; i++) {
        var goal = items[i];
        allGoals.push(goal["name"]);
        difficultyGroup.push(goal["name"]);
    }

    difficultyGroups[difficulty] = difficultyGroup;
}

var bingoGenerator = ootBingoGenerator;

// generates a mapping of goals to frequencies
function generateFrequencies(numCards) {
    // creates a map of goals to their occurences
    var goalCounts = new Object();
    for(var i in allGoals) {
        goal = allGoals[i];
        goalCounts[goal] = 0;
    }

    // loops through a bunch of generated cards
    for(var i = 0; i < numCards; i++) {
        var bingoOpts = { seed: i, mode: 'normal', lang: 'name' };

        var bingoBoard = bingoGenerator(bingoList, bingoOpts);
        for(boardKey in bingoBoard) {
            boardItem = bingoBoard[boardKey];
            goalCounts[boardItem.name]++;
        }
    }

    return goalCounts;
}

function createRow(goal, frequency) {
    var goalRow = document.createElement("tr");

    var goalCol = document.createElement("td");
    var goalText = document.createTextNode(goal);
    goalCol.appendChild(goalText);

    var freqCol = document.createElement("td");
    var freqText = document.createTextNode(frequency);
    freqCol.appendChild(freqText);

    goalRow.appendChild(goalCol);
    goalRow.appendChild(freqCol);
    
    return goalRow;
}

function updateResults(numCards) {
    var freqtable = document.getElementById("freqtable");

    // generate cards
    goalCounts = generateFrequencies(numCards);

    // clear out the old data
    while(freqtable.firstChild) {
        freqtable.removeChild(freqtable.firstChild);
    }

    for(var difficulty in difficultyGroups) {
        console.log("difficulty: " + difficulty);
        
        // goals of this difficulty
        var difficultyGroup = difficultyGroups[difficulty];

        console.log("goals of this difficulty: ");
        console.log(difficultyGroup);
        
        // total occurences of goals in this difficulty
        var groupFreq = 0;
        // generate table elements for this difficulty
        for(var i in difficultyGroup) {
            console.log(difficultyGroup[i]);

            var goal = difficultyGroup[i];
            var frequency = goalCounts[goal];

            var goalRow = createRow(goal, frequency);
            freqtable.appendChild(goalRow);

            groupFreq += frequency;
        }
    }

}

