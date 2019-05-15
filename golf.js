const inputs = document.querySelectorAll('input[type="number"]');
for (const input of inputs) {
  input.addEventListener('input', recalculate);
}

function recalculate() {
    const scoreList = gatherScoreFromPage();
     document.querySelector('#playerScore').textContent = "Total: " + scoreList;
}

function gatherScoreFromPage() {
    var retval = 0;
  
    const Inputs = document.querySelectorAll('input[type="number"]');
    for (const input of Inputs) {
        retval += Number(input.value);
        console.log(retval);
    } 
    return retval;
}

document.getElementById("enterNameBtn").onclick = function () {
    var name = document.getElementById("userName").value;
    document.querySelector('#playerName').textContent = name;
    document.getElementById("getName").style.display = "none";
    document.getElementById("rulesList").style.fontSize = "1em";
    document.getElementById("playerScreen").style.display = "inline-block";
};

