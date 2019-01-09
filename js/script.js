/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var totalScore = chooseGenre(q1Input) + chooseAnimal(q2Input) + chooseColor(q3Input);
        var show= recommendShow(totalScore);

    $(".result").text(show);
        
    });
});


function chooseGenre(userInput){
    if (userInput === "Suspence"){
        return 1;
    } else if (userInput === "Action"){
        return 2;
    } else if (userInput === "Informational"){
        return 3;
    } else if (userInput === "Sports"){
        return 4;
    } else{
        return 0;
    }
}

function chooseAnimal(userInput){
    if (userInput === "Bird"){
        return 1;
    } else if (userInput === "Lion"){
        return 2;
    } else if (userInput === "Dog"){
        return 3;
    } else if (userInput === "Bear"){
        return 4;
    } else{
        return 0;
    }
}
    
function chooseColor(userInput){
    if (userInput === "Blue"){
        return 1;
    } else if (userInput === "Red"){
        return 2;
    } else if (userInput === "Orange"){
        return 3;
    } else if (userInput === "Pink"){
        return 4;
    } else{
        return 0;
    }
}
    
function recommendShow(score){
    if(score === 3){
        return "Stranger Things";
    }else if (score === 6){
        return "Voltron";
    }else if (score === 9){
        return "Bones";
    }else if (score === 12){
        return "Carter High"
    }else{
        return "Bird Box";
    } 
}














