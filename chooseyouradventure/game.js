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

Game();

function Game(){
    document.write("legend of zebra intake air from untamed land copyright");
    var PlayerName = prompt("what is your name?");
    alert("welcome to the land of hyreal copyright"+ PlayerName)
    Prison();
    function Prison(){
        var Prison = prompt("you wake up in a prison but you cant remember why /n - look around /n- back to sleep /n - talk to man").toLowerCase;
        
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("its a small dirty prison there is a bared window to the back a man sleeps to the right to the front is a locked iron door to the left is your bed theres a rug in the center of the room /n -wake man /n -move rug /n eat bugs");
        }
        else if(prison == "go back to sleep" || prison == "sleep"){
            alert("you sleep in your dirty bed like some pleb");
            var resume = confirm("do you want to continue?");
            
            if(resume){
                Prison();
            }
            else{
                alert("Game Over");
            }
        }
    }
    
}