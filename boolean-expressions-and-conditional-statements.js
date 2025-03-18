/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasRope = false;
let isHungry = true;
let isThirsty = false;
let coins = 10;
//Village
let shop = "the Village Shop";
let restaurant = "the Village Restaurant";
let inn = "the Village Inn";
//Forest
tent = "several people near a tent";
river = "a river";
bears = "a mother bear with three cubs";


//START
console.log("\nYou see two paths: one leads to the mountains, the other to the village.");
choice = readline.question("Do you go to the 'mountains' or the 'village'?\n\n");


if ((choice==="mountains") && (hasTorch)){  //MOUNTAINS WITH TORCH MOUNTAINS
  console.log("You safely navigate through the dark mountains.");
  choice = readline.question("In one direction you see a forest.  In the other direction you see a village in the distance.  Do you go toward the 'forest' or the 'village'?\n\n");
  if (choice==="forest"){  //FOREST FOREST FOREST
    choice = readline.question(`\n\nWhile traveling the forest you see ${river}, ${bears}, and ${tent}.\nDo you approach the 'river', the 'bears', or the 'tent'?\n`);
    if (choice==="bears") {//BEARS BEARS BEARS
      console.log ("\n\nOh no!! \n\nYou are devoured by the mama bear and your journey has come to and end.\nBetter luck next time!");
    }
    else if (choice==="tent"){ //TENT TENT TENT 
      console.log('\nYou say "Hello?!" and people come out to greet  you. \nThey are lost and offer you 10 coins to help them get back to the village.  \nYou agree and set off toward the village.');
      if (hasMap) {  //TO VILLAGE TO VILLAGE TO VILLAGE
        console.log("\nYou successfully guide the strangers to the village. \nThey thank you and pay you 10 coins\n");
        let coins = coins + 10;
        console.log(`\nYou now have ${coins} coins. You look around the village and see ${shop}, ${restaurant}, and ${Inn}.`);
        choice = readline.question("\nWould you like to go to the 'shop', the 'inn' or the 'restaurant'?\n"); 
        if (choice==="inn"){
          console.log ("Enjoy some well-deserved rest.  Your journey is done for now.");
        } 
        else if (choice==="shop"){  //SHOP SHOP SHOP
          console.log ("Oh no! You get mugged outside of the shop.\nYour journey is over for now.\n\n");
        } 
        else if (choice==="restaurant"){//RESTAURANT RESTAURANT RESTAURANT
          console.log ("Enjoy a Meal!  Your journey is over for now.");
        } 
        else { //OTHER ENDS GAME
          console.log("\n\nOh no!\nYou tripped and fell in a hole and your journey has come to an end!\nBetter luck next time!");
        }
      } 
      else { //NO MAP GAME ENDS NO MAP GAME ENDS
        console.log (`\n\nYou attempt to guide them back to the forest, but you get lost.
        When the others realize that you are wandering aimlessly, they get angry, knock you down, and steal your belongings.
        Your journey has come to an end for now.
        Better luck next time!\n`);
      } 
    } 
    else if (choice==="river"){   //RIVER RIVER RIVER RIVER RIVER
      if (!isThirsty){  //Finds Coins and Goes to shop in village
        console.log ("\n\nIt is your lucky day!\nYou found 5 coins in the river and decided to head to the village to shop.");
        console.log ("\n\nWelcome to the Village Shop where you can purchase supplies you may need.");
        console.log ("\nOur prices are:\nEnergy Bar\t2 Coins\nRope\t2 coins\nTorch\t7Coins\nMap\t5 Coins\n"); 
        console.log(`You currently have ${coins} coins and the following items:\n`);
        if (hasMap) { 
          console.log ("Map");
        }
        if (hasRope) {
          console.log ("Rope");
        }
        if (hasTorch) {
          console.log ("Torch");
        }
        if (!hasMap && !hasRope && !hasTorch) {
          console.log("\nNone");
        }
        choice = readline.question("\n\nYou can buy one item or sell one item.  Would you like to 'buy' or 'sell'?\n");
        if (choice == "buy"){
          if (coins >= 7) {
            choice = readline.question("\nWould you like to buy 'rope', 'map', 'torch', or 'energy bar'?\n");
            if (choice == "rope"){
              hasRope = true;
              coins = coins - 7;
              console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
            }
            else if (choice == 'map'){
              hasMap = true;
              coins = coins - 7;
              console.log (`\nYou have bought a ${choice} and you have ${coins} coins remaining.`);
            }
            else if (choice == 'torch'){
              hasTorch = true;
              coins = coins - 7;
              console.log (`\nYou have bought a ${choice} and you have ${coins} coins remaining.`);
            }
            else if (choice == 'energy bar'){
              isHungry = false;
              console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
            }
            else {
              console.log ("\nI'm sorry, I can't help you with that today.\n");
            }
          }
          else if (coins >= 2) {
            choice = readline.question("\nYou only have enough coins for an Energy Bar.  Would you like to buy an Energy Bar?");
            if (choice==='yes') {
                isHungry = false;
                console.log (`\nEnjoy your Energy Bar! \nYou have ${coins} coins remaining.\n`);
            }
            else {
              console.log ("\nOkay, then, good luck on your journey!");''
            }
          }
          else {
            console.log ("\n\nI'm sorry, you don't have enough coins to buy anything.")
          }
        }
        else if (choice == "sell"){
          if ((hasMap) || (hasRope) || (hasTorch)){
            if (hasMap) {
              console.log ("\n'map'");
            }
            if (hasRope) {
              console.log ("\n'rope'");
            }
            if (hasTorch) { 
              console.log ("\n'torch'");
            }
            choice = readline.question("\nWhich item would you like to sell?\n");
            if (choice =='rope'){
              hasRope = false;
              coins = coins + 7;
              console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
            }
            else if (choice=='map'){
              hasMap = false;
              coins = coins - 7;
              console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
            } 
            else if (choice=='torch'){
              hasTorch = false;
              coins = coins - 7;
              console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
            }
            else {
              console.log("\n\nI'm sorry we are not currently buying those.");
            } 
          }
          else {
            console.log("\n\nYou dont currently have any items you can sell.")
          }    
        }
        else {
          console.log("\n\nI'm sorry.  We can't help you with that.");
        }
      } 
      else {
        console.log ("\n\nYou decide to drink some water, try to catch fish, and have some rest.  Resume your journey another day.");
      }
    }  
    else {  //OTHER END GAME 
      console.log("\n\nOh no!\nYou tripped and fell in a hole and your journey has come to an end!\nBetter luck next time!");
    }
  }
  else if (choice==="village"){   //VILLAGE VILLAGE VILLAGE 
    console.log(`\nYou come across a kind wanderer who agrees to help you find your way to the village.\nYou arrive in the village. You look around the village and see ${shop}, ${restaurant}, and ${inn}.`);
    choice = readline.question("\nWould you like to go to the 'shop', the 'inn' or the 'restaurant'?\n"); 
    if (choice!=="shop"){
      console.log ("Enjoy some well-deserved rest.  Your journey is done for now.");
    } 
    else if (choice=="shop"){  //SHOP SHOP SHOP
      console.log ("\n\nWelcome to the Village Shop where you can purchase supplies you may need.");
      console.log ("\nOur prices are:\nEnergy Bar\t2 Coins\nRope\t\t7 Coins\nTorch\t\t7 Coins\nMap\t\t5 Coins\n"); 
      console.log(`You currently have ${coins} coins and the following items:\n`);
        if (hasMap){
          console.log ("\nMap");
        }
        if (hasRope){ 
          console.log ("\nRope");
        }
        if (hasTorch){ 
          console.log ("\nTorch");
        }
        if (!hasMap && !hasRope && !hasTorch) console.log("(you currently have no items)");
      choice = readline.question("\n\nYou can buy one item or sell one item.  Would you like to 'buy' or 'sell'?\n");
      if (choice=="buy"){
        if (coins >= 7) {
          choice = readline.question("\nWould you like to buy 'rope', 'map', 'torch', or 'energy bar'?\n");
            if (choice=='rope'){
              hasRope = true;
              coins = coins - 7;
              console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
            }
            else if (choice=='map'){
              hasMap = true;
              coins = coins - 7;
              console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
            }
            else if (choice=='torch'){
              hasTorch = true;
              coins = coins - 7;
              console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
            }
            else if (choice=='energy bar'){
              isHungry = false;
              console.log (`\nEnjoy your ${choice}! You have ${coins} coins remaining.`);
            }
            else {
              console.log ("\nI'm sorry, I can't help you with that today.\n");
            }
        }
        else if (coins >= 2) {
          choice = readline.question("\nYou only have enough coins for an Energy Bar.  Would you like to buy an Energy Bar?");
          if (choice=='yes') {
            isHungry = false;
            console.log (`\nEnjoy your Energy Bar! \nYou have ${coins} coins remaining.\n`);
          }
          else {
            console.log ("\nOkay, then, good luck on your journey!");''
          }
        }
        else {
          console.log ("\n\nI'm sorry, you don't have enough coins to buy anything.")
        }
      }
      else if (choice=="sell"){
        if ((hasMap) || (hasRope) || (hasTorch)) {
          if (hasMap) { 
            console.log ("\nMap");
          }
          if (hasRope){ 
            console.log ("\nRope");
          }
          if (hasTorch){ 
            console.log ("\nTorch");
          }
          choice = readline.question("\nWhich item would you like to sell?\n");
          if (choice=='rope'){
            hasRope = false;
            coins = coins + 7;
            console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
          }
          else if (choice=='map'){
            hasMap = true;
            coins = coins - 7;
            console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
          } 
          else if (choice=='torch'){
            hasTorch = true;
            coins = coins - 7;
            console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
          }
          else {
            console.log("\n\nI'm sorry we are not currently buying those.");
          } 
        }
        else {
          console.log("\n\nYou dont currently have any items you can sell.")
        }    
      }
      else {
        console.log("\n\nI'm sorry.  We can't help you with that.");
      }
      choice = readline.question ("\n\nWhere would you like to head next?\n 'inn', 'restaurant', 'forest', or 'mountains'?\n\n");
      if (choice==="restaurant"||"inn"){//RESTAURANT RESTAURANT RESTAURANT
        console.log ("Enjoy some rest and grab a meal! Your journey is over for now.");
      }
      else if (choice==="forest"){  //FOREST FOREST FOREST
        choice = readline.question(`\n\nWhile traveling the forest you see ${river}, ${bears}, and ${tent}.\nDo you approach the 'river', the 'bears', or the 'tent'?\n`);
          if (choice==="bears"){//BEARS BEARS BEARS
            console.log ("\n\nOh no!! \n\nYou are devoured by the mama bear and your journey has come to and end.\nBetter luck next time!");
          }
          else if (choice==="tent"){ //TENT TENT TENT 
            console.log('\nYou say "Hello?!" and people come out to greet  you. \nThey are lost and offer you 10 coins to help them get back to the village.  \nYou agree and set off toward the village.');
            
            if (hasMap){  //TO VILLAGE TO VILLAGE TO VILLAGE
              console.log("\nYou successfully guide the strangers to the village. \nThey thank you and pay you 10 coins\n");
              let coins = coins + 10;
              console.log(`\nYou now have ${coins} coins. You look around the village and see ${shop}, ${restaurant}, and ${Inn}.`);
              choice = readline.question("\nWould you like to go to the 'shop', the 'inn' or the 'restaurant'?\n"); 
              if (choice==="inn"){
                console.log ("Enjoy some well-deserved rest.  Your journey is done for now.");
              } 
              else if (choice==="shop"){  //SHOP SHOP SHOP
                console.log ("INCOMPLETE");
              } 
              else if (choice==="restaurant"){//RESTAURANT RESTAURANT RESTAURANT
                console.log ("Enjoy a Meal!  Your journey is over for now.");
              } 
              else { //OTHER ENDS GAME
                console.log("\n\nOh no!\nYou tripped and fell in a hole and your journey has come to an end!\nBetter luck next time!");
              }
            } 
            else { //NO MAP GAME ENDS NO MAP GAME ENDS
              console.log (`\n\nYou attempt to guide them back to the forest, but you get lost.
              When the others realize that you are wandering aimlessly, they get angry, knock you down, and steal your belongings.
              Your journey has come to an end for now.
              Better luck next time!\n`);
            } 
          } 
          else if (choice==="river"){   //RIVER RIVER RIVER RIVER RIVER
            if (!isThirsty){  //Finds Coins and Goes to shop in village
              console.log ("\n\nIt is your lucky day!\nYou found 5 coins in the river and decided to head to the village to shop.");
              //TO SHOP
              console.log ("\n\nWelcome to the Village Shop where you can purchase supplies you may need.");
              console.log ("\nOur prices are:\nEnergy Bar\t2 Coins\nRope\t2 coins\nTorch\t7Coins\nMap\t5 Coins\n"); 
              console.log(`You currently have ${coins} coins and the following items:\n`);
              if (hasMap){ 
                console.log ("Map");
              }
              if (hasRope){
                console.log ("Rope");
              }
              if (hasTorch) {
                console.log ("Torch");
              }
              if (!hasMap && !hasRope && !hasTorch) {
                console.log("\nNone");
              }
              choice = readline.question("\n\nYou can buy one item or sell one item.  Would you like to 'buy' or 'sell'?\n");
                if (choice == "buy"){
                  if (coins >= 7) {
                    choice = readline.question("\nWould you like to buy 'rope', 'map', 'torch', or 'energy bar'?\n");
                    if (choice == "rope"){
                      hasRope = true;
                      coins = coins - 7;
                      console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
                     }
                    else if (choice == 'map'){
                      hasMap = true;
                      coins = coins - 7;
                      console.log (`\nYou have bought a ${choice} and you have ${coins} coins remaining.`);
                    }
                    else if (choice == 'torch'){
                      hasTorch = true;
                      coins = coins - 7;
                      console.log (`\nYou have bought a ${choice} and you have ${coins} coins remaining.`);
                    }
                    else if (choice == 'energy bar'){
                      isHungry = false;
                      console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
                    }
                    else {
                      console.log ("\nI'm sorry, I can't help you with that today.\n");
                    }
                  }
                  else if (coins >= 2) {
                    choice = readline.question("\nYou only have enough coins for an Energy Bar.  Would you like to buy an Energy Bar?");
                    if (choice==='yes') {
                      isHungry = false;
                      console.log (`\nEnjoy your Energy Bar! \nYou have ${coins} coins remaining.\n`);
                    }
                    else {
                    console.log ("\nOkay, then, good luck on your journey!");''
                    }
                  }
                  else {
                    console.log ("\n\nI'm sorry, you don't have enough coins to buy anything.")
                  }
                }
                else if (choice == "sell"){
                  if ((hasMap) || (hasRope) || (hasTorch)){
                    if (hasMap) {
                      console.log ("\n'map'");
                    }
                    if (hasRope) {
                      console.log ("\n'rope'");
                    }
                    if (hasTorch) {
                      console.log ("\n'torch'");
                    }
                    choice = readline.question("\nWhich item would you like to sell?\n");
                    if (choice == 'rope'){
                      hasRope = false;
                      coins = coins + 7;
                      console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
                    }
                    else if (choice=='map'){
                      hasMap = false;
                      coins = coins - 7;
                      console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
                    } 
                    else if (choice=='torch'){
                      torch = false;
                      coins = coins - 7;
                      console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
                    }
                    else {
                      console.log("\n\nI'm sorry we are not currently buying those.");
                    } 
                  }
                  else {
                    console.log("\n\nYou dont currently have any items you can sell.")
                  }    
                }
                else {
                  console.log("\n\nI'm sorry.  We can't help you with that.");
                }
            } 
            else {
              console.log ("\n\nYou decide to drink some water, try to catch fish, and have some rest.  Resume your journey another day.");
            }
          }  
          else {  //OTHER END GAME 
            console.log("\n\nOh no!\nYou tripped and fell in a hole and your journey has come to an end!\nBetter luck next time!");
          }

      }
      else if (choice==='mountains'){
        console.log("\n\nOh No!  You fell off a cliff and a your journey has come to an end\nBetter luck next time!\n\n")
      }
      else{
        console.log("\n\nOh no!\nYou seem to have gotten lost and run out of energy.  \nYour journey has come to an end!\nBetter luck next time!");
      } 
    }
    else {  //OTHER ENDS GAME
      console.log("\n\nOh no!\nYou seem to have gotten lost and run out of energy.  \nYour journey has come to an end!\nBetter luck next time!");
    }
  } 
  else {  //OTHER ENDS GAME
    console.log("\n\nOh no!\nYou tripped and fell in a hole and your journey has come to an end!\nBetter luck next time!");
  }
}     
else if ((choice==="mountains") && (!hasTorch)){  //MOUNTAINS NO TORCH MOUNTAINS NO TORCH
  console.log("\n\nIt's too dark to proceed. \nYou decide to turn back.");
  choice = readline.question("\nWould you like to go back to the 'village' or take a 'rest'?");
  if (choice==="rest"){  //REST - END GAME - REST - END GAME
    console.log("Enjoy some rest and resume your journey another day!");
  } 
  else if (choice==="village"){ //VILLAGE VILLAGE VILLAGE 
    console.log("You get lost on your way to the village."); 
  }
  else {//OTHER ENDS GAME
    console.log("You get lost and wander aimlessly."); 
  }
} 
else if ((choice==="village") && (hasMap)) { //VILLAGE VILLAGE VILLAGE 
  console.log("\nYou find your way to the village.\n");
  choice = readline.question("\nWould you like to go to the 'shop', the 'inn' or the 'restaurant'?\n"); 
  if (choice !== "shop") {
    console.log ("Enjoy some well-deserved rest.  Your journey is done for now.");
  } 
  else if (choice === "shop") {  //SHOP SHOP SHOP
    console.log ("\n\nWelcome to the Village Shop where you can purchase supplies you may need.");
    console.log ("\nOur prices are:\nEnergy Bar\t2 Coins\nRope\t\t7 Coins\nTorch\t\t7 Coins\nMap\t\t5 Coins\n"); 
    console.log(`You currently have ${coins} coins and the following items:\n`);
    if (hasMap){
    console.log ("\nMap");
    }
    if (hasRope) {
    console.log ("\nRope");
    }
    if (hasTorch) {
    console.log ("\nTorch");
    }
    if (!hasMap && !hasRope && !hasTorch) console.log("(you currently have no items)");
    choice = readline.question("\n\nYou can buy one item or sell one item.  Would you like to 'buy' or 'sell'?\n");
    if (choice === "buy"){
      if (coins >= 7) {
        choice = readline.question("\nWould you like to buy 'rope', 'map', 'torch', or 'energy bar'?\n");
        if (choice === "rope"){
          hasRope = true;
          coins = coins - 7;
          console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
        }
        else if (choice === "map"){
          hasMap = true;
          coins = coins - 7;
          console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
        }
        else if (choice ==='torch'){
          hasTorch = true;
          coins = coins - 7;
          console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
        }
        else if (choice === "energy bar"){
          isHungry = false;
          console.log (`\nEnjoy your ${choice}! You have ${coins} coins remaining.`);       
        }
        else {
          console.log ("\nI'm sorry, I can't help you with that today.\n");
        }
      }
      else if (coins >= 2) {
        choice = readline.question("\nYou only have enough coins for an Energy Bar.  Would you like to buy an Energy Bar?");
        if (choice=='yes') {
          isHungry = false;
          console.log (`\nEnjoy your Energy Bar! \nYou have ${coins} coins remaining.\n`);
        }
        else {
          console.log ("\nOkay, then, good luck on your journey!");''
        }
      }
      else {
        console.log ("\n\nI'm sorry, you don't have enough coins to buy anything.")
      }
    }
    else if (choice=="sell"){
      if ((hasMap) || (hasRope) || (hasTorch)) {
        if (hasMap = true) {
          console.log ("\nMap");
        }
        if (hasRope = true) { 
          console.log ("\nRope");
        }
        if (hasTorch = true) {
          console.log ("\nTorch");
        }
        choice = readline.question("\nWhich item would you like to sell?\n");
        if (choice=='rope'){
          hasRope = false;
          coins = coins + 7;
          console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
        }
        else if (choice=='map'){
          hasMap = true;
          coins = coins - 7;
          console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
        } 
        else if (choice=='torch'){
          hasTorch = true;
          coins = coins - 7;
          console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
        }
        else {
          console.log("\n\nI'm sorry we are not currently buying those.");
        } 
      }
      else {
        console.log("\n\nYou dont currently have any items you can sell.")
      }    
    }
    else {
      console.log("\n\nI'm sorry.  We can't help you with that.");      
    }  
    choice = readline.question ("\n\nWhere would you like to head next?\n 'inn', 'restaurant', 'forest', or 'mountains'?\n\n");    
    if (choice==="restaurant"||"inn"){//RESTAURANT RESTAURANT RESTAURANT
      console.log("\n\n Enjoy some leisure time!  Resume your journey later.");
    }
    else if (choice==="forest"){  //FOREST FOREST FOREST
      choice = readline.question(`\n\nWhile traveling the forest you see ${river}, ${bears}, and ${tent}.\nDo you approach the 'river', the 'bears', or the 'tent'?\n`);
      if (choice==="bears"){//BEARS BEARS BEARS
        console.log ("\n\nOh no!! \n\nYou are devoured by the mama bear and your journey has come to and end.\nBetter luck next time!");
      }
      else if (choice==="tent"){ //TENT TENT TENT 
        console.log('\nYou say "Hello?!" and people come out to greet  you. \nThey are lost and offer you 10 coins to help them get back to the village.  \nYou agree and set off toward the village.');
        if (hasMap){  //TO VILLAGE TO VILLAGE TO VILLAGE
          console.log("\nYou successfully guide the strangers to the village. \nThey thank you and pay you 10 coins\n");
          coins = coins + 10;
          console.log(`\nYou now have ${coins} coins. You look around the village and see ${shop}, ${restaurant}, and ${Inn}.`);
          choice = readline.question("\nWould you like to go to the 'shop', the 'inn' or the 'restaurant'?\n"); 
          if (choice==="inn"){
            console.log ("Enjoy some well-deserved rest.  Your journey is done for now.");
          } 
          else if (choice==="shop"){  //SHOP SHOP SHOP
            console.log ("INCOMPLETE");
          } 
          else if (choice==="restaurant"){//RESTAURANT RESTAURANT RESTAURANT
            console.log ("Enjoy a Meal!  Your journey is over for now.");
          } 
          else { //OTHER ENDS GAME
            console.log("\n\nOh no!\nYou tripped and fell in a hole and your journey has come to an end!\nBetter luck next time!");
          }
        } 
        else { //NO MAP GAME ENDS NO MAP GAME ENDS
          console.log (`\n\nYou attempt to guide them back to the forest, but you get lost.
          When the others realize that you are wandering aimlessly, they get angry, knock you down, and steal your belongings.
          Your journey has come to an end for now.
          Better luck next time!\n`);
        } 
      } 
      else if (choice==="river") {   //RIVER RIVER RIVER RIVER RIVER
        if (!isThirsty){  //Finds Coins and Goes to shop in village
          console.log ("\n\nIt is your lucky day!\nYou found 5 coins in the river and decided to head to the village to shop.");
          console.log ("\n\nWelcome to the Village Shop where you can purchase supplies you may need.");
          console.log ("\nOur prices are:\nEnergy Bar\t2 Coins\nRope\t2 coins\nTorch\t7Coins\nMap\t5 Coins\n"); 
          console.log(`You currently have ${coins} coins and the following items:\n`);
          if (hasMap) {
            console.log ("Map");
          }
          if (hasRope) {
            console.log ("Rope");
          }
          if (hasTorch) {
            console.log ("Torch");
          }
          if (!hasMap && !hasRope && !hasTorch) {
            console.log("\nNone");
          }
          choice = readline.question("\n\nYou can buy one item or sell one item.  Would you like to 'buy' or 'sell'?\n");
          if (choice == "buy"){
            if (coins >= 7) {
              choice = readline.question("\nWould you like to buy 'rope', 'map', 'torch', or 'energy bar'?\n");
              if (choice == "rope"){
                hasRope = true;
                coins = coins - 7;
                console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
              }
              else if (choice == 'map'){
                hasMap = true;
                coins = coins - 7;
                console.log (`\nYou have bought a ${choice} and you have ${coins} coins remaining.`);
              }
              else if (choice == 'torch') {
                hasTorch = true;
                coins = coins - 7;
                console.log (`\nYou have bought a ${choice} and you have ${coins} coins remaining.`);
              }
              else if (choice == 'energy bar'){
                isHungry = false;
                console.log (`\nYou have bought ${choice} and you have ${coins} coins remaining.`);
              }
              else {
                console.log ("\nI'm sorry, I can't help you with that today.\n");                  
              }
            }
            else if (coins >= 2) {
              choice = readline.question("\nYou only have enough coins for an Energy Bar.  Would you like to buy an Energy Bar?");
              if (choice==='yes') {
                isHungry = false;
                console.log (`\nEnjoy your Energy Bar! \nYou have ${coins} coins remaining.\n`);
              }
              else {
                console.log ("\nOkay, then, good luck on your journey!");                  }
            }
            else {
              console.log ("\n\nI'm sorry, you don't have enough coins to buy anything.")
            }
          }
          else if (choice == "sell"){
            if ((hasMap) || (hasRope) || (hasTorch)){
              if (hasMap) {
                console.log ("\n'map'");
              }
              if (hasRope) {
                  console.log ("\n'rope'");
                }
              if (hasTorch) {
                console.log ("\n'torch'");
              }
              choice = readline.question("\nWhich item would you like to sell?\n");
              if (choice =='rope'){
                hasRope = false
                coins = coins + 7;
                console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
              }
              else if (choice=='map'){
                hasMap = false;
                coins = coins - 7; 
                console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
              }
              else if (choice=='torch'){
                hasTorch = false;
                coins = coins - 7;
                console.log (`\nYou have sold your ${choice} and you now have ${coins} coins.`);
              }
              else {
                console.log("\n\nI'm sorry we are not currently buying those.");                
              } 
            }
            else {
              console.log("\n\nYou dont currently have any items you can sell.")
            }    
          }
          else {
            console.log("\n\nI'm sorry.  We can't help you with that.\n");
          }
        }
        else {
          console.log ("\n\nHave a drink, get some rest, and resume your adventure later\n");
        }
      }
      else {
        console.log ("\n\nUh oh!  You fell into a hole.  Your adventure ends here.\n");
      }
    }
    else {
      console.log ("\n\nUh oh!  You fell into a hole.  Your adventure ends here.\n");
    }
  }
  else {
    console.log ("\n\nUh oh!  You fell into a hole.  Your adventure ends here.\n");
  }
}
else {  //OTHER - ENDS GAME
  console.log("You get lost and wander aimlessly.");
}