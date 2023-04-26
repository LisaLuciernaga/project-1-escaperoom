window.addEventListener("load", function(){
    
    //this part is not defined in HTML, maybe we should delete it
const startButton= document.getElementsById("start-button")
startButton.addEventListener("click", function(){
    game.startGame();
})

})

/**
 * @type HTMLCanvasElement
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//Print startScreen
ctx.fillStyle = "brown";
ctx.fillRect(0, 0, 1000, 550);
ctx.fillStyle = "#000000";
ctx.font="65px Georgia";
ctx.fillText("hello",canvas.width/2, canvas.height/2);

canvas.addEventListener("click", function(){
    ctx.save();
    ctx.clearRect(0,0, canvas.width, canvas.height);

    // Print Room Canvas
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.font="65px Georgia";
    ctx.fillText("this is the room canvas", 200, 200); // test, remove later and add img

    ctx.restore();
});



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
     startTimer() {
        let minutes = 0;
        let seconds = 0;
        const timerElement = document.getElementById("timer")
    
        let intervalId = setInterval(() => {
            seconds++;
    
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            };
    
            let timeString = padZero(minutes) + ":" + padZero(seconds);
           
            timerElement.textContent = timeString;
    
            if (minutes === 5) {
                clearInterval(intervalId);
                return;
            }
        }, 1000);
    
        return intervalId;
    },
    
     padZero(num) {
        return num.toString().padStart(2, "0");
    },
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
