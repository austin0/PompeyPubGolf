const inputs = document.querySelectorAll('input[type="number"]');
for (const input of inputs) {
  input.addEventListener('input', recalculate);
}

function recalculate() {
    //const total = "";
    const scoreList = gatherScoreFromPage();
     //for (const score of scoreList) {
        //total += score;
        //console.log(total);
     //}
     document.querySelector('#playerScore').textContent = "Total: " + scoreList;
}

function gatherScoreFromPage() {
    var retval = 0;
  
    const Inputs = document.querySelectorAll('input[type="number"]');
    for (const input of Inputs) {
      //if (input.value === '') {
        //console.log('no data', input);
        //return null;
      //}
      //retval.push(Number(input.value));
      //console.log(input.value)
        retval += Number(input.value);
        console.log(retval);
    } 
    return retval;
}

document.getElementById("enterNameBtn").onclick = function () {
    var name = document.getElementById("userName").value;
    document.querySelector('#playerName').textContent = name;
    document.getElementById("getName").style.display = "none";
    document.getElementById("playerScreen").style.display = "inline-block";
};

