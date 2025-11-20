var table = [
    { name: "Mega Man Battle Network", year: 2001 },
    { name: "Mega Man Battle Network 2", year: 2002 },
    { name: "Mega Man Battle Network 3 White/Blue Version", year: 2003 },
    { name: "Mega Man Battle Chip Challenge", year: 2003 },
    { name: "Mega Man Battle Network 4 Red Sun/Blue Moon", year: 2004 },
    { name: "Mega Man Battle Network 5 Team ProtoMan/Team Colonel", year: 2005 },
    { name: "Mega Man Battle Network 6 Cyberbeast Gregar/Falzar", year: 2006 },
    { name: "Rockman EXE WS", year: 2003 },
];

var originalTable = [
    { name: "Mega Man Battle Network", year: 2001 },
    { name: "Mega Man Battle Network 2", year: 2002 },
    { name: "Mega Man Battle Network 3 White/Blue Version", year: 2003 },
    { name: "Mega Man Battle Chip Challenge", year: 2003 },
    { name: "Mega Man Battle Network 4 Red Sun/Blue Moon", year: 2004 },
    { name: "Mega Man Battle Network 5 Team ProtoMan/Team Colonel", year: 2005 },
    { name: "Mega Man Battle Network 6 Cyberbeast Gregar/Falzar", year: 2006 },
    { name: "Rockman EXE WS", year: 2003 },
];


function loadEvents() {
    if (localStorage.getItem("table")) {
        table = JSON.parse(localStorage.getItem("table"));
    }

    document.getElementById("show-table").addEventListener("click", showTable, false);
    document.getElementById("new-game").addEventListener("submit", newGame, false);
    document.getElementById("restore-table").addEventListener("click", restoreTable, false);
}


function showTable() {
    var tableBody = document.getElementById("rows-table");
    var fullTable = "";
    for (var i = 0; i < table.length; i++) {
        fullTable += "<tr><td>" + table[i].name + "</td><td>" + table[i].year + "</td><td><button onclick='deleteGame(" + i + ")'>Delete</button></td></tr>";
    }

    tableBody.innerHTML = fullTable;
}

function deleteGame(index) {
    table.splice(index, 1);
    localStorage.setItem("table", JSON.stringify(table));
    showTable();
}


function newGame(e) {
    e.preventDefault(); 
    var enteredGame = document.getElementById("game").value;
    var enteredYear = document.getElementById("year").value;

    document.getElementById("error-name").textContent = "";
    document.getElementById("error-year").textContent = "";

    let valid = true;
    if (enteredGame === "") {
        document.getElementById("error-name").textContent = "Mandatory field.";
        valid = false;
    }

    if (enteredYear === "") {
        document.getElementById("error-year").textContent = "Mandatory field.";
        valid = false;
    } else if (isNaN(enteredYear)) {
        document.getElementById("error-year").textContent = "Please, input a number as the year.";
        valid = false
    }

    if (!valid) return; 


    var newGame = { name: enteredGame, year: Number(enteredYear) };
    table.push(newGame);

    localStorage.setItem("table", JSON.stringify(table));
    document.getElementById("new-game").reset();

    showTable();
}

function restoreTable() {
    table = JSON.parse(JSON.stringify(originalTable));

    localStorage.removeItem("table");

    localStorage.setItem("table", JSON.stringify(table));

    showTable();
}
window.onload = loadEvents();