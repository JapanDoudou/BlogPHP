window.addEventListener("DOMContentLoaded", (event) => {

/************* Recherche des boutons concernés ***************/

    var button1 = document.getElementById("html5").addEventListener('click',playSound1);
    var button2 = document.getElementById("css3").addEventListener('click',playSound2);
    var button3 = document.getElementById("js").addEventListener('click',playSound3);
    var button4 = document.getElementById("php").addEventListener('click',playSound4);
    var button5 = document.getElementById("mysql").addEventListener('click',playSound5);
    var button6 = document.getElementById("csharp").addEventListener('click',playSound6);
    var button7 = document.getElementById("wordpress").addEventListener('click',playLoop1);
    var button8 = document.getElementById("unity").addEventListener('click',playLoop2);
    var button9 = document.getElementById("bootstrap").addEventListener('click',playLoop3);

    /**** Put sounds in memory *********/

    var sounds;
    var retroSounds = new Array(
            'sounds/retro/pulse (7).wav',
            'sounds/retro/pulse (8).wav',
            'sounds/retro/pulse (09).wav',
            'sounds/retro/pulse (10).wav',
            'sounds/retro/crash (1).wav',
            'sounds/retro/sfx (2).wav',
            'sounds/retro/kick (3).wav',
            'sounds/retro/kick (4).wav',
            'sounds/retro/hihat (7).wav'
    )

    var modernSounds = new Array(
            'sounds/modern/clap1.wav',
            'sounds/modern/clap2.wav',
            'sounds/modern/ahh3.wav',
            'sounds/modern/boom4.wav',
            'sounds/modern/scratch.wav',
            'sounds/modern/DJ.wav',
            'sounds/modern/loop3.wav',
            'sounds/modern/loop1.wav',
            'sounds/modern/loop2.wav'

    )

    sounds = modernSounds; //Charge a default sample

    //********* Functions ***********/

    function changeSounds(isGameBoy){
        if(isGameBoy == true)
            {
                sounds = retroSounds;
            }
        else{
            sounds = modernSounds;
        }
    }

    function playSound1(){
        var audio0 = new Audio(sounds[0]);
        audio0.play();
    }
    function playSound2(){
        var audio1 = new Audio(sounds[1]);
        audio1.play();
    }
    function playSound3(){
        var audio2 = new Audio(sounds[2]);
        audio2.play();
    }
    function playSound4(){
        var audio3 = new Audio(sounds[3]);
        audio3.play();
    }
    function playSound5(){
        var audio4 = new Audio(sounds[4]);
        audio4.play();
    }
    function playSound6(){
        var audio5 = new Audio(sounds[5]);
        audio5.play();
    }
    function playLoop1(){
        var audio6 = new Audio(sounds[6]);
        audio6.play();
    }
    function playLoop2(){
        var audio7 = new Audio(sounds[7]);
        audio7.play();
    }
    function playLoop3(){
        var audio8 = new Audio(sounds[8]);
        audio8.play();
    }

    function aspectGB()
    {
        if (isGameboy == false)
            {
                isGameboy = true;
                style.className = "gb";
             for (var i = 0; i< modernSeparator.length ; i++)
                {
                    modernSeparator[i].className = "modern-separator hidden";
                    gbSeparator[i].className = "gb-separator"
                }
            }
        else {
            isGameboy = false;
            style.className = "normal";
            for (var i = 0; i< modernSeparator.length ; i++)
                {
                    modernSeparator[i].className = "modern-separator";
                    gbSeparator[i].className = "gb-separator hidden"
                }
        }
        changeSounds(isGameboy);
    }

});