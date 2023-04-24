window.addEventListener("load", function(){



const startButton = document.getElementById('start-button')
startButton.addEventListener('click', function(){
    game.startGame()
})





})

/**
 * @type HTMLCanvasElement
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//PrintstartScreen

ctx.fillStyle = "red";
//ctx.fillRect(0, 0, 1000, 700)
ctx.filltext("textToShow", 40, 40)
ctx.font = "62px Arial";


const clickableObjects = [
    new ClickableObject (50, 100),
    new ClickableObject (),
];


const game = {
    objects: clickableObjects,
    score: 0,
    startGame (){
        //display game screen, call start timer, display score
    },
    startTimer () {},
    loose () {
        //show pop up with aunt Mildred & text
    },
    win () {
        //show pop up (your gran won riddle contest or so, img)
    }
}


//Class objects
class ClickableObject {
    constructor (width, height, x, y, name, src, riddleId){
        this.width = width;
        this.height = height;
        this.positionX = x;
        this.positionY = y;
        this.name = name;
        this.src = src;
        this.riddle = riddleId;
    }

    onHover(){
        //display object name
    }

    onClick(){
        //execute riddle
    }

    print(){
        //Print the image on the canvas
    }

    solve(){
        //Solve the riddle, increment score, make object not clickable
    }
}

//Class riddle
class Riddle {
    constructor(name, question, img, solution){
        this.riddleId = name;
        this.question = question;
        this.img = img;
        this.solution = solution;
    }

    show(){
        // open the popup window and display the question
    }

    hide(){
        //hide popup
    }

    checkSolution(){
        //check if the solution, player entered matches riddle solution, return boolean
    }
}
