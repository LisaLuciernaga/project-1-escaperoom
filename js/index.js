//THIS IS THE PART OF THE CODE, WHERE WE DECLARE THINGS!!

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// const clickableObjects = [
//     new ClickableObject (50, 100),
//     new ClickableObject (),
// ];

let backgroundImg = document.createElement("img");
backgroundImg.src = "img/background.jpg";

let game = {
    // objects: clickableObjects,
    score: 0,
    startGame (){
        //display game screen, call start timer, display score
        ctx.save();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        // Print Room Canvas
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
        ctx.restore();

        //Print objects on top of background (Erika)

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




//THIS IS THE PART OF THE CODE, WHERE WE EXECUTE FUNCTIONS!!!

window.addEventListener("load", function(){

    //Print startScreen
    ctx.fillStyle = "brown";
    ctx.fillRect(0, 0, 1000, 550);
    ctx.fillStyle = "#000000";
    ctx.font="65px Georgia";
    ctx.fillText("hello", 200, 200);
    
    canvas.addEventListener("click", game.startGame);
})
