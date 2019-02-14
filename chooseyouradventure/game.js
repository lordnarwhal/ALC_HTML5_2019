// single line comment
/*

multiline comment

*/

//document.write("<h1>I cant wait for <em>spring</em></h1>");


//alert("warning! will robinson... warning");

//confirm("Do you like Pokemon?");

//prompt("What type of pokemon do you like?");

//var pc = prompt("What is thine name?");

//confirm("So your name is "+pc);

var inventory = {
    sword:0,
    food:0,
    sheild:0,
    water:0,
    map:0,
    
}

var enemy = {
    coins:10,
    dagger:1,
    hood:1,
    
}

function GetRandInt(max){
    var randInt = Math.floor(Math.random()*Math.floor(max));
    return randInt;
}

Game();
function Game(){
    var wizardNames = ["Bethzar", "mordac", "grendor", "orco"];
    
    alert("legend of "+wizardNames[Math.floor(Math.random()*Math.floor(4))]);
    
    var PlayerName = prompt("what is your name?");
    
    alert("welcome to the land of DatBoi "+ PlayerName)
    
    Prison();
    function Prison(){
        var prison = prompt("you wake up in a prison but you cant remember why \n - look around \n- back to sleep \n - talk to man").toLowerCase();
    
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("its a small dirty prison there is a bared window to the back a man sleeps to the right to the front is a locked iron door to the left is your bed theres a rug in the center of the room \n -wake man \n -move rug \n eat bugs");
        }
        else if(prison == "go back to sleep" || prison == "sleep"){
            alert("you sleep in your dirty bed like some pleb");
            var resume = confirm("do you want to continue?");
        }
        else{
            var resume = confirm("do you want to continue?");
            //alert("Game Over");
            }
        if(resume){
                Prison();
            }
        else{
            alert("Game Over")
        }
        
    }
    
    function Swamp(){
        var swampEnv = prompt("this is a swamp. \n -follow path. \n -swim across.")
        
        if(swampEnv == "follow" || swampEnv == "follow path"){
            var swampPath = prompt("you head towards a hut in the swamp. \n -enter hut. \n -burn it down")
            }
            if( swampPath = "enter"){
                alert("there is a witch by the fire")
            }
            
        else if(swampPath = "burn it down"){
            alert("you hear screaming form inside you monster that couldve been a homeless orphan child whats wrong with you you werent even gunna check first the heck man")
        }
            else if(swampEnv == "swim"){
            }
            else{
                    alert("i dont understand "+swampEnv);
                    Swamp();
                }
            
        
    }
            function blacksmith(){
                alert("sup nerd whaat ya want.");
                
                    var blacksmith = prompt(" \n - buy sword");
                
                        if(blacksmith = "buy sword" && inventory.coins >= 100){
                        }
                            var swordBuy = confirm("you sure you wanna buy this bud?");
                            if(swordBuy){
                                inventory.sword ++;
                                alert("you got " +inventory.sword+" swords");
                                inventory.coins = inventory.coins - 100;
                                alert("you now have "+inventory.coins+" coins left");
                                Blacksmith();
                            }
                        
            }
            
        
        
        
        
    
    
function Castle(){
        var insideCastle = prompt("- upstairs - sownstairs - courtyard - balcony - look").toLowerCase();
        
        switch(insideCastle){
                case "upstairs" || "go upstairs":
                var upstairs = prompt("you head to top floor of castle");
                
                Castle();
                break;
                case "downstairs":
                    alert("you go downstairs");
                
                break;
                case "courtyard":
                    alert("you go to the courtyard");
                    Castle();
                break;
                case "balcony":
                    alert("you go to balcony");
                    Castle();
                break;
                default:
                    alert("I dont know what "+insideCastle+"is");
                    Castle();
                break;
        }
    }
    
    

}

