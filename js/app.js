
function playerButton(player, buttonId, isClick) {
    const name = document.getElementById(player);
    const playerName = name.innerText;
    selectedPlayers(playerName);
    if (isClick == true) {
        document.getElementById(buttonId).disabled = true;
    }
}


let playerList = [];
function selectedPlayers(name) {
    if (playerList.length < 5) {
        const selectedPlayer = document.getElementById('selected-player');
        const selectedElement = document.createElement('li');
        playerList.push(selectedElement);
        selectedElement.classList.add('list-group-item', 'bg-black', 'text-white');
        selectedElement.innerText = name;
        selectedPlayer.appendChild(selectedElement);
        // console.log(playerList.length);
    }

}


document.getElementById('per-plyer-budget-calculate-button').addEventListener('click', function () {
    const budgetInput = document.getElementById('budget-input');
    const budgetAmmount = parseInt(budgetInput.value);
    document.getElementById('player-expanse-cost').innerText = budgetAmmount * 5;
})

document.getElementById('total-cost-button').addEventListener('click', function () {
    const magaerCostInput = document.getElementById('manager-cost');
    const magaerCost = parseInt(magaerCostInput.value);
    const coachCostInput = document.getElementById('coach-cost');
    const coachCost = parseInt(coachCostInput.value);
    const playerExpenseCost = document.getElementById('player-expanse-cost');
    const playerExpenseCostValue = parseInt(playerExpenseCost.innerText);

    const totalCost = playerExpenseCostValue + magaerCost + coachCost;
    document.getElementById('total-cost').innerText = totalCost;
})