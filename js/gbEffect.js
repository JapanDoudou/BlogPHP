
window.addEventListener("DOMContentLoaded", (event) => {
    
/********** GameBoy Variables ******/

    var isGameboy = false;

/****** Get DOM elements * Always put at the End of Body to find DOM objects ***/

    var style = document.getElementById("style");
    var gbSeparator = document.querySelectorAll(".gb-separator");
    var modernSeparator = document.querySelectorAll(".modern-separator");
    var catButton = document.getElementById("purr").addEventListener('click',aspectGB);


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
    }

//********** End *********************//


});

