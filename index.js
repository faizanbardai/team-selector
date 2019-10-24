var numberOfPlayers = 0;

function addPlayer(e) {
    if (newPlayer.value.length > 0) {
        var newLi = document.createElement("li");
        newLi.className = "list-group-item";
        var newDeletePlayer = '<i class="fa fa-times-circle float-right stretched-link" onclick="removePlayer(this)"></i>';
        newLi.innerHTML = newPlayer.value + newDeletePlayer;
        availablePlayers.appendChild(newLi);
        newPlayer.value = "";
        numberOfPlayers++;
        updatePlayerCountDisplay();
        newPlayer.focus();
    };
};

function enterToAdd(event) {
    if (event.keyCode === 13) {
        addPlayer();
    };
};

function updatePlayerCountDisplay() {
    playerCount.innerText = "Available Players: " + numberOfPlayers;
};

function removePlayer(player) {
    player.parentNode.parentNode.removeChild(player.parentNode);
    numberOfPlayers--;
    updatePlayerCountDisplay();
};

function addPlayerRandomly(player) {
    if (numberOfPlayers === 0) {
        alert("no players to add!");
    } else {
        var totalPlayers = document.querySelectorAll("#availablePlayers li").length;
        var rndPlayer = Math.floor(Math.random()*totalPlayers);
        console.log(rndPlayer);
        var newPlayer = document.querySelectorAll("#availablePlayers  .list-group-item")[rndPlayer];
        newPlayer.childNodes[1].className = "fa fa-plus float-right stretched-link";
        newPlayer.childNodes[1].onclick = function () { addToAvailablePlayers(this); };
        player.parentNode.parentNode.lastElementChild.appendChild(newPlayer);
        numberOfPlayers--;
        updatePlayerCountDisplay();
    };
};

function addToAvailablePlayers(player) {
    player.className = "fa fa-times-circle float-right stretched-link";
    player.onclick = function () { removePlayer(this); };
    availablePlayers.appendChild(player.parentNode);
    numberOfPlayers++;
    updatePlayerCountDisplay();
};