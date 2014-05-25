// creates a list of all of the goals
var allGoals = new Array();
// list of difficulty sets
var difficultyGroups = new Array();

for(var difficulty in bingoList) {
    if(difficulty == "info") {
        continue;
    }

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
function generateFrequencies(numCards, randomSeeds) {
    // creates a map of goals to their occurences
    var goalCounts = new Object();
    for(var i in allGoals) {
        goal = allGoals[i];
        goalCounts[goal] = 0;
    }

    // loops through a bunch of generated cards
    for(var i = 0; i < numCards; i++) {
        var bingoOpts = { mode: 'normal', lang: 'name' };

        // set a fixed seed if should not be random
        if(!randomSeeds) {
            bingoOpts["seed"] = i;
        }

        var bingoBoard = bingoGenerator(bingoList, bingoOpts);
        for(boardKey in bingoBoard) {
            boardItem = bingoBoard[boardKey];
            goalCounts[boardItem.name]++;
        }
    }

    return goalCounts;
}

// updates the frequencies table
function updateResults(numCards, randomSeeds) {
    console.log("random seeds: " + randomSeeds);
    var frequencies = document.getElementById("frequencies");

    // generate cards
    goalCounts = generateFrequencies(numCards, randomSeeds);

    // clear out the old data
    while(frequencies.firstChild) {
        frequencies.removeChild(frequencies.firstChild);
    }

    for(var difficulty in difficultyGroups) {
        // goals of this difficulty
        var difficultyGroup = difficultyGroups[difficulty];
        var difficultyInfo = createDifficultyInfo(difficulty, difficultyGroup, goalCounts);

        frequencies.appendChild(difficultyInfo);
    }
}

function createDifficultyInfo(difficulty, difficultyGroup, goalCounts) {
    var difficultyInfo = document.createElement("div");

    var tableHeader = document.createElement("h1");
    var headerText = document.createTextNode("Difficulty " + (difficulty));
    tableHeader.appendChild(headerText);

    var table = createTable(difficultyGroup, goalCounts);
    
    difficultyInfo.appendChild(tableHeader);
    difficultyInfo.appendChild(table);

    return difficultyInfo;
}

// creates a 2 column table with the goals in the difficultyGroup
// and their frequencies
function createTable(difficultyGroup, goalCounts) {
    var table = document.createElement("table");

    // total occurences of goals in this difficulty
    var groupFreq = 0;
    // generate table elements for this difficulty
    for(var i in difficultyGroup) {
        var goal = difficultyGroup[i];
        var frequency = goalCounts[goal];

        var goalRow = createRow(goal, frequency);
        table.appendChild(goalRow);

        groupFreq += frequency;
    }

    var totalRow = createRow("Total", groupFreq);
    totalRow.childNodes[0].style.fontWeight = "bold";
    totalRow.childNodes[0].style.color = "gold";
    totalRow.childNodes[1].style.fontWeight = "bold";
    totalRow.childNodes[1].style.color = "gold";
    table.appendChild(totalRow);

    return table;
}

// creates a table row with the goal and frequency
function createRow(goal, frequency) {
    var goalRow = document.createElement("tr");

    var goalCol = document.createElement("td");
    var goalText = document.createTextNode(goal);
    goalCol.appendChild(goalText);

    var freqCol = document.createElement("td");
    var freqText = document.createTextNode(frequency);
    freqCol.appendChild(freqText);
    freqCol.style.textAlign = "right";

    goalRow.appendChild(goalCol);
    goalRow.appendChild(freqCol);
    
    return goalRow;
}

