var Name='';
var Phone='';
var Team='Team A'; // Default team
function getName(){
    return Name;
}
function getPhone(){
    return Phone;
}
function getTeam(){
    return Team;
}
function setTeam(team){
    Team=team;
    console.log("Selected Team: " + Team);
    document.querySelectorAll('.team-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-team="${Team}"]`).classList.add('selected');
}

function setName(name){
    Name=name;
}
function setPhone(phone){
    Phone=phone;
}
