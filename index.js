const homeScore = document.getElementById("home_score")
const guestScore = document.getElementById("guest_score")
const homeTitle = document.getElementById("home_title")
const guestTitle = document.getElementById("guest_title")

let homePoints = 0;
let guestPoints = 0;

function add(points, team){
    if(team === "home"){
        updateHome(points)
    }else{
        updateGuest(points)
    }
    
    if(homePoints > guestPoints){
        updateWinner("home")
    }else{
        updateWinner("guest")
    }
}

function updateHome(points){
    homePoints += points;
    homeScore.textContent = homePoints
}


function updateGuest(points){
    guestPoints += points;
    guestScore.textContent = guestPoints

}

function updateWinner(winner){
    if(winner === "home"){
        homeScore.classList.add("winner");
        guestScore.classList.remove("winner");
    }else if(winner === "guest"){
        guestScore.classList.add("winner");
        homeScore.classList.remove("winner");
    }else{
        guestScore.classList.remove("winner");
        homeScore.classList.remove("winner");
    }
}

function reset(){
    homePoints = 0;
    guestPoints = 0;
    guestScore.textContent = guestPoints
    homeScore.textContent = homePoints
    updateWinner("other")
}
