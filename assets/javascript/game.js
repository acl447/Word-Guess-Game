window.onload = function pickWord () {
    
    var words = [
    "beatles",
    "supremes"

    ];



    var word = words[Math.floor(Math.random() * words.length)];

    var answerArray = [];

    for (var i = 0; i < word.length; i++) {

        answerArray[i] = "_";

    

        document.getElementById("blanks").innerHTML = answerArray.join(" ");


    

   

    

    
    };




};








var alreadyGuessed = "";

var numberRemaining = 12;

console.log(numberRemaining);



function resetGame() {

document.getElementById("numberRemaining").innerHTML = 12;

numberRemaining = 12;

alreadyGuessed = "";



document.getElementById("lettersGuessed").innerHTML = "";


 

    
};



document.onkeyup = function wordGuess(event) {

    var userGuess = event.key;

    var supremesLetterArray = ["s", "S", "u", "U", "p", "P", "r", "R", "e", "E", "m", "M"];

    var beatlesLetterArray = ["b", "B", "e", "E", "a", "A", "t", "T", "l", "L", "s", "S"];
   

    function pickWord () {
    
        var words = [
        "beatles",
        "supremes"

        ];



        var word = words[Math.floor(Math.random() * words.length)];

        var answerArray = [];

        for (var i = 0; i < word.length; i++) {

            answerArray[i] = "_";

    

            document.getElementById("blanks").innerHTML = answerArray.join(" ");
        }

        return pickWord;
    };

    if (document.getElementById("numberRemaining").innerHTML > 0) {

        document.getElementById("numberRemaining").innerHTML--;
    
        numberRemaining--;
    
        console.log(numberRemaining);
    
        
    
    
    } 
    
    else {
    
        resetGame();

        console.log(resetGame);

        pickWord();

        console.log(pickWord);
        
        
    };    


    if (userGuess !== "b" && userGuess !== "B" && userGuess !== "e" && userGuess !== "E" && userGuess !== "a" && userGuess !== "A"
        && userGuess !== "t" && userGuess !== "T" && userGuess !== "l" && userGuess !== "L" && userGuess !== "s" && userGuess !== "S") 
                
        {

            alreadyGuessed += userGuess;

            console.log(alreadyGuessed);

            document.getElementById("lettersGuessed").innerHTML += userGuess;
        };
    
        


   

    if (document.getElementById("blanks").innerHTML === "_ _ _ _ _ _ _") {


        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ _ _ _";
    
    
        } 
        
        else if (userGuess === "e" || userGuess === "E") {
    
            document.getElementById("blanks").innerHTML = "_ e _ _ _ e _";
    
        }

        else if (userGuess === "a" || userGuess === "A") {


            document.getElementById("blanks").innerHTML = "_ _ a _ _ _ _";
    
    
        }
    
        else if (userGuess === "t" || userGuess === "T") {
    
            document.getElementById("blanks").innerHTML = "_ _ _ t _ _ _";
    
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
            document.getElementById("blanks").innerHTML = "_ _ _ _ l _ _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {

            document.getElementById("blanks").innerHTML = "_ _ _ _ _ _ s";
    
        }
    
    }

    else if (document.getElementById("blanks").innerHTML === "B _ _ _ _ _ _") {

        if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ _ e _";
        
            }
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ _ _ _";
            
            }
    
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t _ _ _";
        
            }
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ l _ _";
        
            }
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ _ _ s";
        
        }
    
    }

    else if (document.getElementById("blanks").innerHTML === "_ e _ _ _ e _") {

        if (userGuess === "b" || userGuess === "B") {
    
    
        document.getElementById("blanks").innerHTML = "B e _ _ _ e _";
    
        }
    
        else if (userGuess === "a" || userGuess === "A") {
    
            document.getElementById("blanks").innerHTML = "_ e a _ _ e _";
    
    
        }
    
        else if (userGuess === "t" || userGuess === "T") {
    
            document.getElementById("blanks").innerHTML === "_ e _ t _ e _";
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
            document.getElementById("blanks").innerHTML === "_ e _ _ l e _";
    
        }
    
        else if (userGuess === "s" || userGuess === "S") {
    
            document.getElementById("blanks").innerHTML === "_ e _ _ _ e s";
    
        }
    
    } 

    else if (document.getElementById("blanks").innerHTML === "_ _ a _ _ _ _") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ _ _ _";
        
            }
    
        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ _ e _";
        
            }
    
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t _ _ _";
        
            }
    
    
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ l _ _";
        
            }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ _ _ s";
        
        }
    
    }
    
    else if (document.getElementById("blanks").innerHTML === "_ _ _ t _ _ _") {
    
        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t _ _ _";
        
            }
    
        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t _ e _";
        
            }
    
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t _ _ _";
        
            }
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t l _ _";
        
            }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t _ _ s";
        
        }
    
    
    }
    
    
    else if (document.getElementById("blanks").innerHTML === "_ _ _ _ l _ _") {
    
        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ l _ _";
        
            }
    
        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ _ l e _";
        
        }
        
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ l _ _";
        
        }
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t l _ _";
        
        }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ _ l _ s";
        
        }
    }
    
    else if (document.getElementById("blanks").innerHTML === "_ _ _ _ _ _ s") {
    
        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ _ _ s";
        
        }
    
        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ _ _ e s";
        
        }
    
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ _ _ s";
        
        }
    
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t _ _ s";
        
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ _ l _ s";
        
        }
    
    
    }
    
    else if (document.getElementById("blanks").innerHTML === "B e _ _ _ e _") {
    
        if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "B e a _ _ e _";
        
        }
        
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ t _ e _";
    
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ l e _";
    
        }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ _ e s";
    
        }
    
    }
    
    else if (document.getElementById("blanks").innerHTML === "B _ a _ _ _ _") {
    
        if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "B e a _ _ e _";
        }
    
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a t _ _ _";
    
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ l _ _";
    
        }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ _ _ s";
        }
    
    }
    
    else if (document.getElementById("blanks").innerHTML === "B _ _ t _ _ _") {
    
        if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ t _ e _";
    
        }
    
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a t _ _ _";
    
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t l _ _";
    
        }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t _ _ s";
    
        }
    }
    
    else if (document.getElementById("blanks").innerHTML === "B _ _ _ l _ _") {
    
        if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ l e _";
        }
    
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ l _ _";
    
        }
    
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t l _ _";
    
        }
    
        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ l _ s";
    
        }
    
    }

    else if (document.getElementById("blanks").innerHTML === "B _ _ _ _ _ s") {
    
        if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ _ e s";
        }
    
        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ _ _ s";
    
        }
    
        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t _ _ s";
    
        }
    
        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ l _ s";
    
        }
    
    }

    else if (document.getElementById("blanks").innerHTML === "_ e a _ _ e _") {


        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B e a _ _ e _";
    
        }

        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a t _ e _";
    
        }

        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ l e _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ _ e s";
    
        }

    }

    else if (document.getElementById("blanks").innerHTML === "_ e _ t _ e _") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ t _ e _";
    
        }

        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a t _ e _";
    
        }

        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t l e _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t _ e s";
    
        }




    }

    else if (document.getElementById("blanks").innerHTML === "_ e _ _ l e _")
        
        if (userGuess === "b" || userGuess === "B") {
    
    
        document.getElementById("blanks").innerHTML = "B e _ _ l e _";

        }

        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ l e _";
    
        }

        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t l e _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ _ l e s";
    
        }
        
    }

    if (document.getElementById("blanks").innerHTML === "_ e _ _ _ e s") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ _ e s";
    
        }

        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ _ e s";
    
        }

        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t _ e s";
    
        }

        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ _ l e s";
    
        }
        
    }

    else if (document.getElementById("blanks").innerHTML === "_ _ a t _ _ _") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a t _ _ _";
    
        }

        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a t _ e _";
    
        }

        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t l _ _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t _ _ s";
    
        }


    }

    else if (document.getElementById("blanks").innerHTML === "_ _ a _ l _ _") {
        
        if (userGuess === "b" || userGuess === "B") {
    
    
        document.getElementById("blanks").innerHTML = "B _ a _ l _ _";

        }

        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ l e _";
    
        }

        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t l _ _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ l _ s";
    
        }

    
    }

    else if (document.getElementById("blanks").innerHTML === "_ _ a _ _ _ s") {
        
        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ a _ _ _ s";
    
        }

        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e a _ _ e s";
    
        }

        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t _ _ s";
    
        }

        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ l _ s";
    
        }


    }

    else if (document.getElementById("blanks").innerHTML === "_ _ _ t l _ _") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t l _ _";
    
        }

        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t l _ _";
    
        }

        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t l _ _";
    
        }

        else if (userGuess === "s" || userGuess === "S") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t l _ s";
    
        }


    }
    
    else if (document.getElementById("blanks").innerHTML === "_ _ _ t _ _ s") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ t _ _ s";
    
        }

        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ t _ e s";
    
        }

        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a t _ _ s";
    
        }

        else if (userGuess === "l" || userGuess === "L") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t l _ s";
    
        }


    }

    else if (document.getElementById("blanks").innerHTML === "_ _ _ _ l _ s") {

        if (userGuess === "b" || userGuess === "B") {
    
    
            document.getElementById("blanks").innerHTML = "B _ _ _ l _ s";
    
        }

        else if (userGuess === "e" || userGuess === "E") {
    
    
            document.getElementById("blanks").innerHTML = "_ e _ _ l e s";
    
        }

        else if (userGuess === "a" || userGuess === "A") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ a _ l _ s";
    
        }

        else if (userGuess === "t" || userGuess === "T") {
    
    
            document.getElementById("blanks").innerHTML = "_ _ _ t l _ s";
    
        }



    }
    
    else if ((document.getElementById("blanks").innerHTML === "B e a _ _ e _") && (userGuess === "t" || userGuess === "T")
        || (document.getElementById("blanks").innerHTML === "B e _ t _ e _") && (userGuess === "a" || userGuess === "A")
        || (document.getElementById("blanks").innerHTML === "B _ a t _ _ _") && (userGuess === "e" || userGuess === "E")) 
    
    {
    
    
        document.getElementById("blanks").innerHTML = "B e a t _ e _";
    }

    else if ((document.getElementById("blanks").innerHTML === "B e a _ _ e _") && (userGuess === "l" || userGuess === "L")
        ||  (document.getElementById("blanks").innerHTML === "B e _ _ l e _") && (userGuess === "a" || userGuess === "A")
        ||  (document.getElementById("blanks").innerHTML === "B _ a _ l _ _") && (userGuess === "e" || userGuess === "E"))
        
        
    {
    
    
        document.getElementById("blanks").innerHTML = "B e a _ l e s";
    
    }
    
    else if ((document.getElementById("blanks").innerHTML === "B e a _ _ e _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "B e _ _ _ e s") && (userGuess === "a" || userGuess === "A")
        || (document.getElementById("blanks").innerHTML === "B _ a _ _ _ s") && (userGuess === "e" || userGuess === "E"))
        
        
        
    {
    
    
        document.getElementById("blanks").innerHTML = "B e a _ _ e s";
    
    }

    else if ((document.getElementById("blanks").innerHTML === "B e _ t _ _ _") && (userGuess === "l" || userGuess === "L")
        ||  (document.getElementById("blanks").innerHTML === "B _ _ t l _ _") && (userGuess === "e" || userGuess === "E")
        || (document.getElementById("blanks").innerHTML === "B e _ _ l _ _") && (userGuess === "t" || userGuess === "T"))
        
        
        
        {
    
    
            document.getElementById("blanks").innerHTML = "B e _ t l _ _";
    
        }

    else if ((document.getElementById("blanks").innerHTML === "B e _ t _ _ _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "B _ _ t _ _ s") && (userGuess === "e" || userGuess === "E")
        || (document.getElementById("blanks").innerHTML === "B e _ _ _ _ s") && (userGuess === "t" || userGuess === "T"))
        
        
        
        {
    
    
            document.getElementById("blanks").innerHTML = "B e _ t _ _ s";
    
        }

    else if ((document.getElementById("blanks").innerHTML === "B e _ _ l e _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "B e _ _ _ e s") && (userGuess === "l" || userGuess === "L")
        || (document.getElementById("blanks").innerHTML === "B _ _ _ l _ s") && (userGuess === "e" || userGuess === "E"))
        
        
        
        {
    
    
            document.getElementById("blanks").innerHTML = "B e _ _ l e s";
    
        }

    else if ((document.getElementById("blanks").innerHTML === "B _ a t _ _ _") && (userGuess === "l" || userGuess === "L")
        ||  (document.getElementById("blanks").innerHTML === "B _ a _ l _ _") && (userGuess === "t" || userGuess === "T")
        || (document.getElementById("blanks").innerHTML === "B _ _ t l _ _") && (userGuess === "a" || userGuess === "A"))
        
        
        
    {
    
    
        document.getElementById("blanks").innerHTML = "B _ a t l _ _";
    
    }
    
    else if ((document.getElementById("blanks").innerHTML === "B _ a t _ _ _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "B _ _ t _ _ s") && (userGuess === "a" || userGuess === "A")
        || (document.getElementById("blanks").innerHTML === "B _ a _ _ _ s") && (userGuess === "t" || userGuess === "T"))
        
        
        
    {
    
    
        document.getElementById("blanks").innerHTML = "B _ a t _ _ s";
    
    }
    
    else if ((document.getElementById("blanks").innerHTML === "B _ a _ l _ _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "B _ _ _ l _ s") && (userGuess === "a" || userGuess === "A")
        || (document.getElementById("blanks").innerHTML === "B _ a _ _ _ s") && (userGuess === "l" || userGuess === "L"))
        
        
        
    {
    
    
        document.getElementById("blanks").innerHTML = "B _ a _ l _ s";
    
    }

    else if ((document.getElementById("blanks").innerHTML === "B _ _ t l _ _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "B _ _ _ l _ s") && (userGuess === "t" || userGuess === "T")
        || (document.getElementById("blanks").innerHTML === "B _ _ t _ _ s") && (userGuess === "l" || userGuess === "L"))
        
        
        
    {
    
    
        document.getElementById("blanks").innerHTML = "B _ _ t l _ s";
    
    }

    else if ((document.getElementById("blanks").innerHTML === "_ e a t _ e _") && (userGuess === "l" || userGuess === "L")
        ||  (document.getElementById("blanks").innerHTML === "_ e a _ l e _") && (userGuess === "t" || userGuess === "T")
        || (document.getElementById("blanks").innerHTML === "_ e _ t l e _") && (userGuess === "a" || userGuess === "A"))
    
    
    
    {


        document.getElementById("blanks").innerHTML = "_ e a t l e _";

    }

    else if ((document.getElementById("blanks").innerHTML === "_ e a t _ e _") && (userGuess === "l" || userGuess === "L")
        ||  (document.getElementById("blanks").innerHTML === "_ e a _ l e _") && (userGuess === "t" || userGuess === "T")
        || (document.getElementById("blanks").innerHTML === "_ e _ t l e _") && (userGuess === "a" || userGuess === "A"))



    {


        document.getElementById("blanks").innerHTML = "_ e a t l e _";

    }

    else if ((document.getElementById("blanks").innerHTML === "_ e a t _ e _") && (userGuess === "s" || userGuess === "S")
        ||  (document.getElementById("blanks").innerHTML === "_ e a _ _ e s") && (userGuess === "t" || userGuess === "T")
        || (document.getElementById("blanks").innerHTML === "_ e _ t _ e s") && (userGuess === "a" || userGuess === "A"))



    {


        document.getElementById("blanks").innerHTML = "_ e a t _ e s";

    }




}



