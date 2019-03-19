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

var checkCoins = function(){
    alert("Coins: "+player.inventory.coins)
}

var inventory = {
    balster:0,
    health_kit:0,
    sheild:0,
    map:0,
    money:1000,
    bullets:6,
}

var enemy = {
    money:10,
    gun:1,
    
}

function GetRandInt(max){
    var randInt = Math.floor(Math.random()*Math.floor(max));
    return randInt;
}

Game();
function Game(){
    var wizardNames = ["dregen", "variks", "rahool"];
    
    alert("spaceship of "+wizardNames[Math.floor(Math.random()*Math.floor(3))]);
    
    var PlayerName = prompt("what is your name?");
    
    while(!confirm("are you sure you want that name?")){
        PlayerName=prompt("what name do you want?");
    }
    
    alert("Welcome test subject "+ PlayerName)
    
    Testroom();
    function Testroom(){
        var testroom = prompt("your head is foggy and you dont recognise your suroundings. everythings glowing and it seems futuristic. \n-look around \n-wait there \n-left \n-right \n-forward \n-back").toLowerCase();
    
        if(testroom == "back"){
            Shop();
        }
        else if(testroom == "left"){
            Leftroom();
        }
        else if(testroom == "right"){
            GunShop();
        }
        else if(testroom == "forward"){
            Castle();
        }
        else if(testroom == "look around" || testroom == "look"){
            var prisonLook = alert("you look around and it looks like you might be a test subject of some kind maybe on and alian space ship");
            Testroom();
        }
        else if(testroom == "wait there" || testroom == "wait"){
            alert("you wait for something to happen and dont try to escape, nothing happens your just bored");
            var resume = confirm("do you want to continue?");
        }
        
        //else if checkCoins();
        
        else{
            var resume = confirm("do you want to continue?");
            //alert("Game Over");
            }
        if(resume){
                Testroom();
            }
        else{
            alert("Game Over")
        }
        
    }
    
    function Leftroom(){
        var leftroomEnv = prompt("you go left and in this room you find a small alian child. \n- talk to the alien.")
        
        if(leftroomEnv == "talk" || leftroomEnv == "talk to alien"){
            var alienKid = prompt("you try to talk to the alien it doesnt know what your saying. it gives you a blank look. \n -leave. \n -stare at the alien").toLowerCase();
            }
            if(alienKid == "leave"){
                alert("you stop trying to interact with the alien and go back to the test room");
                Testroom();
            }
            
        else if(alienKid == "stare at the alien"){
            alert("the alien seems to get uncomfortable and runs of you head back to the test room");
            Testroom();
        }
            
            else{
                    alert("i dont understand "+leftroomEnv);
                    Leftroom();
                }
            
        
    }
            function GunShop(){
                alert("you go to the right and you find a kind looking alien that seems to be selling something like a gun.");
                
                    var GunShop = prompt(" \n - buy laser rifle");
                
                        if(GunShop = "buy laser rifle" && inventory.coins >= 100){
                        }
                            var gunBuy = confirm("he trying to make sure this is what you want");
                            if(gunBuy){
                                inventory.gun ++;
                                alert("you got " +inventory.gun+" guns");
                                inventory.coins = inventory.money - 100;
                                alert("you now have "+inventory.money+" dollars left you go back to the test room");
                                Testroom();
                            }
                        
            }
            
        
        
        
        
    
    
function Castle(){
        var insideCastle = prompt("you seem to be in an emty store room there are different closets that might have something in them though\n-left \n-right \n-forward \n-test room  ").toLowerCase();
        
        switch(insideCastle){
                case "left" || "go left":
                var upstairs = alert("you head into the left closet there doesnt seem to be anything");
                
                Castle();
                break;
                case "right":
                    alert("you go to the right closet there doesnt seem to be anything");
                    Castle();
                break;
                case "forward":
                    alert("you go to the closet in front of you there doesnt seem to be anything");
                    Castle();
                break;
                case "test room":
                    alert("you dont find anything in the closets you head back to the test room")
                   Testroom();
                default:
                    alert("I dont know what "+insideCastle+" is");
                    Castle();
                break;
        }
    }
    
function Shop(){
    var ammoShop = 100;
    var ammoPrice = 1;
    alert("you find yourself at some kind of shop they seem to sell ammo for laser guns")
    
    var purchase = prompt("an alien greets you and points towards the ammo \n- buy Ammo:"+arrowShop).toLowerCase();
    if(purchase == "buy ammo" || purchase == "ammo"){
        var ammoCon = prompt("it seems to be asking you how much ammo you want");
			
			while(!confirm("you sure you want "+ammoCon+" bullets, at "+ammoPrice+" dollars a bullet?")){
			}
			
			for(i = 1; i <= ammoCon; i++){
				inventory.bullets ++;
				console.log("You have "+inventory.bullets+" bullets");				
			
                alert("You bought "+ammoCon+" bullets");
                Testroom();			
		}
            //else if(purchase == "exit"|| purchase == "leave"){
                //Prison();
    }
    
}
    
    
}
