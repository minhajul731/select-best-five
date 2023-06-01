// document.getElementById('player-select-button').addEventListener('click', function (e) {
//     const playersName = document.getElementById('player-name');
//     console.log(playersName);
// })

function playerButton(player, buttonId, isClick) {
    const name = document.getElementById(player);
    const playerName = name.innerText;
    selectedPlayers(playerName);
    if (isClick == true) {
        document.getElementById(buttonId).disabled = true;
    }
}

function selectedPlayers(name) {
    const selectedPlayer = document.getElementById('selected-player');
    const selectedElement = document.createElement('li');
    selectedElement.classList.add('list-group-item', 'bg-black', 'text-white');
    selectedElement.innerText = name;
    selectedPlayer.appendChild(selectedElement);

}