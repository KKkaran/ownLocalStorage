var submitbtn = document.querySelector(".submitButton")
var names = document.querySelector(".name")
var age = document.querySelector(".age")
var formDiv = document.querySelector(".form")
var players = [];
var newgame = false;

function createEl(){

    //create a div and append an h3 containing the name age that
    //will display right underneath the submit button

    var divEl = document.createElement("div")
    divEl.className = "list"
    divEl.innerHTML = "<h3>" + names.value + ", " + age.value  + "</h3>"

    formDiv.appendChild(divEl);

    var playerObject = {
        playerName : names.value,
        playerAge : age.value
    }
    //put all the new objects into an array and pass that array
    //as an arg to the localStorage method
    players.push(playerObject);
    setLocalStorage(players)

}

function setLocalStorage(players){
    localStorage.setItem("players",JSON.stringify(players))
}
function displayLocalData(players){
    //this method will display the old saved data onto the screen
    var divEl = document.createElement("div")
    divEl.className = "list"
    divEl.innerHTML = "<h3>" + players.playerName + ", " + players.playerAge  + "</h3>"

    formDiv.appendChild(divEl);

}
function reload(){
    var records = localStorage.getItem("players")
    if(!records){
        return false;
    }
    console.log("records found")
    var playerList = JSON.parse(records)
    players = playerList;
    console.log(playerList)
    for(let i=0;i<playerList.length;i++){
        displayLocalData(playerList[i])
    }
}



//add eventlistener on submit button
submitbtn.addEventListener("click",createEl)
reload();