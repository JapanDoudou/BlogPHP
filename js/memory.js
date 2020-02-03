'use strict';

var countText;
var pairText;
var count = 0;
var pairCount;
var waitTime;
var startTime;
var selected;
var button;
var memory;
var timer;
var myTimer; 

var timerHTML;

var scoreFormulary;
var timerScore;
var coupsScore;
var diffName;
var hiddenScoreInput;
var difficultyName;
var hiddenScore;
var diffMultiply;


/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

    var images = [
        "memory_files/games/1.jpg",
        "memory_files/games/2.jpg",
        "memory_files/games/3.jpg",
        "memory_files/games/4.jpg",
        "memory_files/games/5.jpg",
        "memory_files/games/6.jpg",
        "memory_files/games/7.jpg",
        "memory_files/games/8.jpg"
    ];
    var bgCard = "<div><i class=\"fas fa-cogs\"></i><strong>Memory</strong></div>"
    var deck = [];

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function addTheEventListener(){
    var cardNumber = document.querySelectorAll("#memory li");
	for(var i = 0; i<cardNumber.length ; i++){
        if (cardNumber[i].childNodes[0].classList.contains("completed"))
        {
            //Les paires ne doivent pas redevenir clickables
            //Do Nothing
        } else {
            cardNumber[i].addEventListener('click',selectedCard);
        }
	}
}

function removeTheEventListener(){
    var cardNumber = document.querySelectorAll("#memory li");
	for(var i = 0; i<cardNumber.length ; i++){
		cardNumber[i].removeEventListener('click',selectedCard);
	}
}

function selectedCard(){
    updateCount();
    this.removeEventListener("click",selectedCard);
	this.classList.toggle("rotation");
	this.querySelector("img").classList.toggle("selected");
	selected = document.querySelectorAll(".selected");
    if (selected.length == 2)
        {
            removeTheEventListener();
            if(selected[0].dataset.id == selected[1].dataset.id)
                {
                    setTimeout(function(){
                        updatePair();
                        selected[0].classList.toggle("selected");
                        selected[0].classList.add("completed");
                        selected[1].classList.toggle("selected");
                        selected[1].classList.add("completed");
                        selected = null;
                        addTheEventListener();
                    },1000);
                }
            else{
                setTimeout(function(){
                    selected[0].classList.toggle("selected");
                    selected[0].parentNode.classList.toggle("rotation");
                    selected[1].classList.toggle("selected");
                    selected[1].parentNode.classList.toggle("rotation");
                    selected = null;
                    addTheEventListener();
                },waitTime);
                
            }
        }
	
}

function updateCount(){
	count++;
	countText.innerHTML = count;
}

function updatePair(){
    pairCount--;
    document.querySelector("#total").innerHTML = "Il vous reste " + pairCount + " paires !";
    if (pairCount == 0)
        {
            //On arrête le chronomètre !
            clearInterval(myTimer);
            validateScoring();
            switch (count){
                case 16:
                    document.querySelector("#total").innerHTML = "Toutes du premier coup ? C'est hallucinant !";
                    break;
                case 18:
                    document.querySelector("#total").innerHTML = "Presque parfait ! Bonne mémoire, Vous avez gagné !!!";
                    break;
                case 20:
                case 22:
                case 24:
                case 26:
                    document.querySelector("#total").innerHTML = "Pas mal ! Vous pouvez essayer de battre votre score !";
                    break;
                case 28:
                case 30:
                    document.querySelector("#total").innerHTML = "Ohlala ca fait beaucoup de coups ! Vous pouvez faire mieux !";
                    break;
                default:
                document.querySelector("#total").innerHTML = "Ohlala ca fait beaucoup de coups ! Vous pouvez faire mieux !";
            }
            
        }
}

/************** New functions ***************/


function createDeck(){
    //Le nombre de cartes dépend du nombre d'images dans var images
	for(var i=0;i<images.length;i++)
	{
		deck.push(createCard(i));
	}
    //Et on le fait deux fois car il faut faire des paires
    for(var i=0;i<images.length;i++)
	{
		deck.push(createCard(i));
	}
}

function createCard(i){
    //On créé les cartes avec leurs attribus
	return {
		img: images[i], //l'url de l'image
		cardNumber:i, //le nombre pour le dataset
		class:"card", //la class pour le css
	};
}

function randomizeDeck(){
    //La fonction permet de randomiser le contenu du deck (deux jeux de cartes en un seul deck)
    for(var position=deck.length-1; position>=1; position--)
    {
        //hasard reçoit un nombre entier aléatoire entre 0 et position
        var hasard=Math.floor(Math.random()*(position+1));

        //Echange
        var sauve=deck[position];
        deck[position]=deck[hasard];
        deck[hasard]=sauve;    
    }
}

function printCard(){

    //PrintCard va "imprimer" nos cartes à l'écran et les distribuer
    randomizeDeck();
    //On retire les fonctions au bouton et on les changes
    button.removeEventListener("click",printCard);
    button.addEventListener("click", restart);
    button.innerHTML = "Restart";
    //On va tirer chaque carte l'une après l'autre et l'insérer en HTML
	for(var i=0; i<deck.length; i++){
        //On créé le HTML de la carte
		var cardIMG = document.createElement("IMG");
		cardIMG.src = deck[i].img;
        cardIMG.alt = deck[i].class;
        cardIMG.dataset.id = deck[i].cardNumber;
        cardIMG.classList.add(deck[i].class);
        //On créé le li qui la contient
		var li = document.createElement("LI");
        //On lui rajoute la carte
        li.appendChild(cardIMG);
        //On créé la face arrière
        var back = document.createElement("DIV");
        back.classList.add("derriere");
        back.innerHTML = bgCard;
        //On lui rajoute
        li.appendChild(back);
        //On injecte le tout dans l'ul avec l'ID memory
        memory.appendChild(li);
        //On diffère la rotation
        testRotation(i);
	}
    //On rend les cartes clickables
    addTheEventListener();
    //et on lance le timer !
    myTimer = setInterval(function(){
        timer++;
        timerHTML.innerHTML = timer+" secondes";
        },1000);   
}

function validateScoring(){

    hiddenScore = (timer + count) * diffMultiply;
    hiddenScoreInput.value = hiddenScore;
    scoreFormulary.classList.toggle("hidden");
    timerScore.value = timer;
    diffName.value =  difficultyName;
    coupsScore.value =  count;

}



function restart(){
    clearInterval(myTimer);
    timer = 0;
    pairCount = deck.length /2;
    document.querySelector("#total").innerHTML = "Il vous reste <strong id=\"paires\">toutes les</strong> paires !";
    count=0;
    countText.innerHTML = count;
    memory.innerHTML = "";
    printCard();  
}

function testRotation(i){
    setTimeout(function(){
            console.log(memory.childNodes);
            memory.childNodes[i].classList.add("rotation");
            //On les place sur la grille
            //memory.childNodes[i].classList.add("g"+i);
        },(startTime + i*10));
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', function () {


    //************* Memory Var ***********/

    countText = document.getElementById("count");
    pairText = $("#paireCount");
    pairCount;
    waitTime = 3000;
    startTime = 100;
    selected = document.querySelectorAll(".selected");
    button = document.getElementById("newGame");
    memory = document.querySelector("#memory");
    timer = 0;
    myTimer; 

    timerHTML = document.querySelector("#timer");

    scoreFormulary = document.querySelector("#submitScore");
    timerScore = document.querySelector("#hiddenTimer");
    coupsScore = document.querySelector("#hiddenCoups");
    diffName = document.querySelector("#hiddenDifficulty");
    hiddenScoreInput = document.querySelector("#hiddenScore");
    difficultyName = "Normal";
    hiddenScore = 0;
    diffMultiply = 10;

  //Ton Code
  //Sera exécuté au chargement de la page;
    //On créé le deck qui sera randomizé
    createDeck();
    var easy = document.querySelector("#easy").addEventListener("click", function(){
        waitTime = 3000;
        startTime = 1000;
        difficultyName = "Easy";
        diffMultiply = 3;
        restart();

    });

    var normal = document.querySelector("#normal").addEventListener("click", function(){
        waitTime = 2000;
        startTime = 500;
        difficultyName = "Normal";
        diffMultiply = 2;
        restart();
    });

    var hard = document.querySelector("#hard").addEventListener("click", function(){
        waitTime = 1000;
        startTime = 100;
        difficultyName = "Hard";
        diffMultiply = 1;
        restart();
    });

    //On rend les boutons clickables
    button.addEventListener("click",printCard);
    //On initialise le nombre de paires restantes
    pairCount = deck.length /2;
  
});

