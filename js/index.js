var Name='';
var Team='Team A'; // Default team
var Phone='';
var Info='';
var Date_i='';
function getName(){
    return Name;
}
function getPhone(){
    return Phone;
}
function getInfo(){
    return Info;
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
function setInfo(info){
    Info=info;
}
function setDate(date){
    Date_i=date;
    
}
// Time 


// console.log(new Daste(Date.UTC(0, 0, 0, 0, 0, 0)).toISOString().substring(11, 16));
// Time  End