
const home = [ 
    "Mansion",
    "Apartment", 
    "Shack", 
    "House"
    ];

function mash(){

return gethome()
}



function rando(num){
    return Math.floor((Math.random() * num) );}

function gethome(){
let yourhome = rando(home.length)
const chosenHome = home[yourhome];
return chosenHome;
}

console.log(mash());


