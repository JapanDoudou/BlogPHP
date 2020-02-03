/******** v2.0 *********/

/****Déclarer les variables ******/
var user; //Le coup du joueur
var cpu; //Le coup de l'ordinateur
var result; //Le resultat de la confrontation
var yourAttempt =0;
var cpuAttempt =0;
var yourScore =0; //Ton Score
var cpuScore =0; //Score du CPU
var attempt =0; //Nombre de manches
var myBg = document.getElementById('area');
var winColor = "linear-gradient(#00e6ac, #ccffe6)";
var looseColor = "linear-gradient(#e66465, #ff3333)";
var neutralColor = "linear-gradient(#1C5F88 , #D6E5EE)"

/**** Fonction du CPU aléatoire ********/

function randomCPU(){

	var random = Math.floor(Math.random() * 5);

	switch(random){
		case 0:
		cpu="pierre";
        document.getElementById('cpu').innerHTML = "<h2>CPU</h2><i class=\"fas fa-hand-rock\"></i>";
		break;
		case 1:
		cpu="feuille";
        document.getElementById('cpu').innerHTML = "<h2>CPU</h2><i class=\"fas fa-hand-paper\"></i>";
		break;
		case 2:
		cpu="ciseaux";
        document.getElementById('cpu').innerHTML = "<h2>CPU</h2><i class=\"fas fa-hand-scissors\"></i>";
		break;
		case 3:
		cpu="lezard";
        document.getElementById('cpu').innerHTML = "<h2>CPU</h2><i class=\"fas fa-hand-lizard\"></i>";
		break;
		case 4:
		cpu="spock";
        document.getElementById('cpu').innerHTML = "<h2>CPU</h2><i class=\"fas fa-hand-spock\"></i>";
		break;
	}

	document.getElementById('cpu').value = cpu;

}

/******** Fonction Augmentation des manches ***********/

function yourScoring()
{
    changeColor(winColor);
    attempt++;
    yourAttempt++;
    document.getElementById('yourAttempt').innerHTML = parseInt(yourAttempt);
    document.getElementById('attempt').innerHTML = parseInt(attempt);
    if(yourAttempt==3){
        yourScore++;
        attempt=0;
        cpuAttempt =0;
        yourAttempt = 0;
        document.getElementById('attempt').innerHTML = parseInt(attempt);
        document.getElementById('yourScore').innerHTML = parseInt(yourScore);
        document.getElementById('cpuScore').innerHTML = parseInt(cpuScore);
        document.getElementById('cpuAttempt').innerHTML = parseInt(cpuAttempt);
        document.getElementById('yourAttempt').innerHTML = parseInt(yourAttempt);
    }
}

function cpuScoring()
{
    changeColor(looseColor);
    attempt++;
    cpuAttempt++;
    document.getElementById('cpuAttempt').innerHTML = parseInt(cpuAttempt);
    document.getElementById('attempt').innerHTML = parseInt(attempt);
    if(cpuAttempt ==3){
        cpuScore++; 
        attempt=0;
        yourAttempt =0;
        cpuAttempt = 0;
        document.getElementById('attempt').innerHTML = parseInt(attempt);
        document.getElementById('yourScore').innerHTML = parseInt(yourScore);
        document.getElementById('cpuScore').innerHTML = parseInt(cpuScore);
        document.getElementById('cpuAttempt').innerHTML = parseInt(cpuAttempt);
        document.getElementById('yourAttempt').innerHTML = parseInt(yourAttempt);
    }
}
/********** Changement de couleurs !********/

function changeColor(color)
{
    myBg = document.getElementById('area');
    myBg.style.background = color;
}

/********* Choix du joueur *************/

function pierre()
{
user="pierre";
document.getElementById('empty').innerHTML = "<h2>You</h2><i class=\"fas fa-hand-rock\"></i>";
randomCPU();
ChiFuMi();
}

function ciseau()
{
user="ciseaux";
document.getElementById('empty').innerHTML = "<h2>You</h2><i class=\"fas fa-hand-scissors\"></i>";
randomCPU();
ChiFuMi();
}

function papier()
{
user="feuille";
document.getElementById('empty').innerHTML = "<h2>You</h2><i class=\"fas fa-hand-paper\"></i>";
randomCPU();
ChiFuMi();
}

function lezard()
{
user="lezard";
document.getElementById('empty').innerHTML = "<h2>You</h2><i class=\"fas fa-hand-lizard\"></i>";
randomCPU();
ChiFuMi();
}

function spok()
{
user="spock";
document.getElementById('empty').innerHTML = "<h2>You</h2><i class=\"fas fa-hand-spock\"></i>";
randomCPU();
ChiFuMi();
}

/********** Programme du Janken *********/

function ChiFuMi()
{
  if (user == cpu) {
    changeColor(neutralColor);
    result="Match nul ... On rejoue ?";
    attempt++;
    document.getElementById('attempt').innerHTML = parseInt(attempt);
} else {
    switch (user) {
        case 'pierre':
            if (cpu == 'feuille') {
                result="<p>Le papier enveloppe le cailloux !<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            } else if (cpu == 'ciseaux') {
                result="<p>La pierre casse les ciseaux !<br><strong>T'as gagné</strong></p>";
                yourScoring();
            } else if (cpu == 'lezard'){
                result="<p>La pierre écrabouille le lezard<br><strong>T'as gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'spock'){
                result="<p>Spock désintègre la pierre<br><strong>T'a perdu !</strong></p>";
                cpuScoring();
            }
            break;
        case 'feuille':
            if (cpu == 'pierre') {
                result="<p>Le papier enveloppe le cailloux !<br><strong>T'as gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'ciseaux') {
                result="<p>Le papier se fait couper par les ciseaux !<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            } else if (cpu == 'lezard'){
                result="<p>Le papier se fait manger par le lezard !<br><strong>Perdant par mangeaison !</strong></p>";
                cpuScoring();
            } else if (cpu == 'spock'){
                result="<p>La feuille désavoue Spock !<br><strong>Gagnant par ... désavouement!</strong></p>";
                yourScoring();
            }
            break;
        case 'ciseaux':
            if (cpu == 'pierre') {
                result="<p>Les cailloux cassent les ciseaux !<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            } else if (cpu == 'feuille') {
                result="<p>Le papier se fait couper par les ciseaux !<br><strong>T'as Gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'lezard'){
                result="<p>Les ciseaux décapitent le lezard !<br><strong>T'as Gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'spock'){
                result="<p>Les ciseaux se font atomiser par Spock<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            }
            break;
        case 'lezard':
            if (cpu == 'pierre'){
                result="<p>La pierre écrase le lezard !<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            } else if (cpu == 'feuille'){
                result="<p>Le lezard mange la feuille !<br><strong>T'as gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'ciseaux'){
                result="<p>Les ciseaux décapitent lezard<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            } else if (cpu == 'spock'){
                result="<p>Le lezard empoisonne Spock<br><strong>T'as gagné !</strong></p>";
                yourScoring();
            }
            break;
        case 'spock':
            if (cpu == 'pierre'){
                result="<p>Spock désintègre la pierre<br><strong>T'as gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'feuille'){
                result="<p>La feuille désavoue spock<br><strong>T'as Perdu !</strong></p>";
                cpuScoring();
            } else if (cpu == 'ciseaux'){
                result="<p>Spock Atomise les ciseaux<br><strong>T'as gagné !</strong></p>";
                yourScoring();
            } else if (cpu == 'lezard'){
                result="<p>Spock se fait empoisonner par le lezard !<br><strong>T'as perdu !</strong></p>";
                cpuScoring();
            }
            break;       
    }
    
    
}  
document.getElementById('result').innerHTML = result;
}

document.querySelector('#lizard').addEventListener('click',lezard);
document.querySelector('#paper').addEventListener('click',papier);
document.querySelector('#rock').addEventListener('click',pierre);
document.querySelector('#scisor').addEventListener('click',ciseau);
document.querySelector('#spock').addEventListener('click',spok);
