class Player {
    constructor(name, stein, schere, papier, isBot){

    if (stein+schere+papier!=100) {

        throw new Error('Probabilty above 100%');
    }
    this.bot = isBot
    this.probs = {};
    this.probs.stein = stein;
    this.probs.schere = schere;
    this.probs.papier = papier;
        this.decision = {};
    this.name = name;

    if(isBot){
        this.name = "Bot";
    }
    }

    fillLostopf(){
        const losTopf = [];
                
        for(let i = 0; i < this.probs.stein; i++){
          losTopf.push("stein");
        }
    
        for(let i=0; i < this.probs.schere; i++){
          losTopf.push("schere");
        }
    
         for(let i=0; i < this.probs.papier; i++){
          losTopf.push("papier");
        } 
        let randomIndex = Math.floor(Math.random() * 100);
        this.decision = losTopf[randomIndex];
        console.log(losTopf[randomIndex]);
    }

    makeDecisionPlayer(){
        player.decision = decisionPlayer;
    }

    makeDecisionEnemy(){
        enemy.decision = decisionEnemy;
    }

    gameResult(){
        if(player.decision == enemy.decision){
            console.log("unentschieden");
        }

        else if(player.decision == "stein" && enemy.decision == "schere" ){
            winnerText = player.name + " hat gewonnen";
            scorePlayer++;
        }

        else if(player.decision == "stein" && enemy.decision == "papier" ){
            winnerText = player.name + " hat verloren";
            scoreEnemy++;
        }

        else if(player.decision == "schere" && enemy.decision == "stein" ){
            winnerText = player.name + " hat verloren";
            scoreEnemy++;
        }
            
        else if(player.decision == "schere" && enemy.decision == "papier" ){
            winnerText = player.name + " hat gewonnen";
            scorePlayer++;
        }

        else if(player.decision == "papier" && enemy.decision == "stein" ){
            winnerText = player.name + " hat gewonnen";
            scorePlayer++;
        }

        else if(player.decision == "papier" && enemy.decision == "schere" ){
            winnerText = player.name + " hat verloren";
            scoreEnemy++;
        }
    }
    
}

var namePlayer;
var nameEnemy;
var winnerText;
var personalId;
var iconPlayer;
var iconEnemy;
var decisionPlayer;
var decisionEnemy;
//var decisionKi;
var playerCounter = 1;
var onclickCounter = 0;
var scorePlayer = 0;
var scoreEnemy = 0;
const frontLayout = document.getElementById("front");
const choosePlayerLayout = document.getElementById("choosePlayer");
const chooseWeaponLayout = document.getElementById("chooseWeaponLayer");
const transitionEnemyLayout = document.getElementById("transitionEnemy");
const countdownLayout = document.getElementById("countdown");
const gameLayout = document.getElementById("gameLayer");
const playerIconLayer = document.getElementById("player");
const enemyIconLayer = document.getElementById("enemy");
const playerNameLayer = document.getElementById("revealPlayerName");
const enemyNameLayer = document.getElementById("revealEnemyName");
const revealEnemyScoreLayer = document.getElementById("revealEnemyScore");
const revealPlayerScoreLayer = document.getElementById("revealPlayerScore");
const playerSideLayout = document.getElementById("playerHand");
const enemySideLayout = document.getElementById("enemyHand");
const newRoundButtonAble = document.getElementById("newRoundButton");
const restartButtonAble = document.getElementById("restartButton");
const countdownTextValue = document.getElementById("countdownText");

restartButtonAble.disabled = true;
newRoundButtonAble.disabled = false;
document.getElementById("ki").style.display = "none";
setTimeout(disableFrontLayout, 3000);

console.log("start debug here");

/***************************************************************************************************************/

function choosePlayer(){
    if(playerCounter == 1){
        namePlayer = document.getElementById("inputName").value;
        if (namePlayer !== ""){
            playerCounter++;
            iconPlayer = personalId.id;
            document.getElementById("ki").style.display = "block";
            return;
        }
        alert("Geben Sie bitte einen Usernamen an!");
    }
    else{
        nameEnemy = document.getElementById("inputName").value;
        if (nameEnemy !== ""){
            //delete(playerCounter);
            iconEnemy = personalId.id;
            showWeaponLayout();
        }
        else{
            alert("Geben Sie bitte einen Usernamen an!");
        }
    }
}



function chooseWeapon(id){
    decision = document.getElementById(id).id;
    onclickCounter++;

    if(onclickCounter !== 1 && onclickCounter !== 2){
        return alert("Error ocurred");
    }

    if(onclickCounter == 1){
        savePlayerWeapon();
        alert("Player 1 choose" + decisionPlayer);
        if(iconEnemy == "ki"){
            alert("Ki successful choosen" )
            showCountdownLayout();
            return; 
        }
        showTransitionEnemyWaitLayout();
        setTimeout(disableTransitionEnemyWaitLayout, 5000);
        return;
    }
    
    if(onclickCounter == 2){
        saveEnemyWeapon();
        alert("Player 2 Weapon successful" + decisionEnemy);
        showCountdownLayout();
        return;
    }
/*
    if(onclickCounter == 1){
        savePlayerWeapon();
        if(iconEnemy == "ki"){
            showCountdownLayout();
            return; 
        }
        showTransitionEnemyWaitLayout();
        setTimeout(disableTransitionEnemyWaitLayout, 5000);
        return;
    }
    if(onclickCounter == 2){
        saveEnemyWeapon();
        showCountdownLayout();
        return;
    }
    */
}


function savePlayerWeapon(){
    decisionPlayer = decision;
    if (decisionPlayer !== ""){
        return; //alert(decisionPlayer);
    }

    alert ("Error occurred");
}

function saveEnemyWeapon(id){
    decisionEnemy = decision;
    if (decisionEnemy !== ""){
    return; //alert(decisionEnemy);
    }
    alert ("Error occurred");
}

function countdownTextLay(){
    countdownTextValue.innerText = "GO!";
}



// ---------------------------Layouts--------------------------

function disableFrontLayout(){
    frontLayout.style.display = "none";
    choosePlayerLayout.style.display = "block";
}

function showWeaponLayout(){
    choosePlayerLayout.style.display = "none";
    chooseWeaponLayout.style.display = "block";
}

function showTransitionEnemyWaitLayout(){
    chooseWeaponLayout.style.display = "none";
    transitionEnemyLayout.style.display = "block";
}

function disableTransitionEnemyWaitLayout(){
    transitionEnemyLayout.style.display = "none";
    chooseWeaponLayout.style.display = "block";
}

function showCountdownLayout(){
    chooseWeaponLayout.style.display = "none";
    countdownLayout.style.display = "block";
    setTimeout(countdownTextLay, 3000);
    showGameLayout();
}

function showGameLayout(){
    countdownLayout.style.display = "none";
    gameLayout.style.display = "block";
    startRound();
    changePlayer();
    changeEnemy();
}

/*-----------------------------------Game Layer-------------------------------------------------*/

function changePlayer(){
    
    if(iconPlayer == "girl"){
        playerIconLayer.src = "img/frau.png";
    }
    if(iconPlayer == "boy"){
        playerIconLayer.src = "mann.png";
    }
    showPlayerName();
    showPlayerScore();
    changePlayerHand();
}

function changeEnemy(){
    
    if(iconEnemy == "girl"){
        enemyIconLayer.src = "img/frau.png";
    }
    if(iconEnemy == "boy"){
        enemyIconLayer.src = "img/mann.png";
    }
    if(iconEnemy == "ki"){
        enemyIconLayer.src = "img/kunstliche-intelligenz.png";
    }
    showEnemyName();
    showEnemyScore();
    changeEnemyHand();
}

function showPlayerScore(){
    revealPlayerScoreLayer.innerText = scorePlayer;
}

function showEnemyScore(){
    revealEnemyScoreLayer.innerText = scoreEnemy;
}


function showPlayerName(){
    playerNameLayer.innerText = namePlayer;
}

function showEnemyName(){
    enemyNameLayer.innerText = nameEnemy;
}

function changePlayerHand(){

    if(decisionPlayer == "schere"){
        playerSideLayout.src = "img/linksSchere.png";
    }
    if(decisionPlayer == "stein"){
        playerSideLayout.src = "img/axt.png";
    }
    if(decisionPlayer == "papier"){
        playerSideLayout.src = "img/papierLinks.png";
    }

}

function changeEnemyHand(){
    
    if(decisionEnemy == "schere"){
        enemySideLayout.src = "img/schere.png";
    }
    if(decisionEnemy == "stein"){
        enemySideLayout.src = "img/rechtsStein.png";
    }
    if(decisionEnemy == "papier"){
        enemySideLayout.src = "img/papierRechts.png";
    }
}

// ----------------------Shade Player Img's--------------------

function getId(id){
    personalId = document.getElementById(id);
}

function makeShade(){
    personalId.style.background = "rgba(0,0,0,0.1)";
}

function  removeShade(){
    personalId.style.background = "#9dd4d1";
}

// -----------------------------------newRound------------------------------------------------

function newRound(){
    if(scorePlayer == 3 || scoreEnemy == 3){
        restartButtonAble.disabled = false;
        if(scorePlayer == 3){
            return alert(namePlayer + " hat gewonnen!");
        }
        if(scoreEnemy == 3){
            return alert(nameEnemy + " hat gewonnen!");
        }
        return;
    }
    gameLayout.style.display = "none";
    onclickCounter = 0;
    showWeaponLayout();
}

// -----------------------------------Restart------------------------------------------------

function restart(){
    window.location.reload(false);
  }

// ----------------------------------------------------

function startRound()
{
    




    var player = new Player(namePlayer, 33,33,34, false)
    //const player = new Player("Ece", 33,33,34)

    player.makeDecisionPlayer();

    if(iconEnemy == "ki"){
        var enemy = new Player(nameEnemy, 33,33,34, true)
        enemy.fillLostopf();
        enemy.makeDecisionEnemy();
        alert ("Ki weapon: " + decisionEnemy);
    }
    else{
        var enemy = new Player(nameEnemy, 33,33,34, false)
        enemy.makeDecisionEnemy();
    } 
    player.gameResult();
}