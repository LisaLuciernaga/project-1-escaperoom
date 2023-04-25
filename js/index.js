window.addEventListener("load", function(){
    //THIS IS THE PART OF THE CODE, WHERE WE DECLARE THINGS

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //create all images for clickable objects
    let dog = document.createElement("img");
    dog.src = "img/dog.png";
    
    // let grandma = document.createElement("img");
    // grandma.src = "img/XXX";
    
    // let phone = document.createElement("img");
    // phone.src = "img/XXX.png";
    
    // let urn = document.createElement("img");
    // urn.src = "img/XXX";
    
    let clock = document.createElement("img");
    clock.src = "img/clock.png";
    
    
    //Create images for non clickable objects
    let frames = document.createElement("img");
    frames.src = "img/frames.png";
    
    let painting = document.createElement("img");
    painting.src = "img/painting.png";
    
    let wardrobe = document.createElement("img");
    wardrobe.src = "img/wardrobe.png";

    let comode = document.createElement("img");
    comode.src = "img/comode.png";


    

    class ClickableObject {
        constructor (width, height, x, y, name, image, riddleId){
            this.width = width;
            this.height = height;
            this.positionX = x;
            this.positionY = y;
            this.name = name;
            this.image = image;
            this.riddle = riddleId;
        }
        
        onHover(){
            //display object name - use onmouseover on the img for this?(https://www.w3schools.com/jsref/event_onmouseover.asp)
            if(x > image.x && x < (image.x + image.width && y > image.y && y < (image.y + image.height))){
                //Display image name
            }
        }
        
        
        
        onClick(x, y){
            //Check if image clicked
            if(x > this.image.x && x < (this.image.x + this.image.width && y > this.image.y && y < (this.image.y + this.image.height))){
                //Display riddle
                console.log("you clicked on an image!")
                // this.riddle.show //Mariona??
            } 
        }
        
        print(){
            ctx.drawImage(this.image, this.positionX, this.positionY, this.width, this.height)
        }
        
        solve(){
            //Solve the riddle, increment score, make object not clickable
        }
    }

    const clickableObjects = [
        new ClickableObject (100, 150, 0, 400, "dog", dog, 0),
        new ClickableObject (150, 350, 450, 150, "clock", clock, 0)
        
    ];

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

            //Print non-clickable objects
            ctx.drawImage(wardrobe, 0, 70, 300, 450);
            ctx.drawImage(painting, 600, 20, 170, 200);
            ctx.drawImage(frames, 300, 30, 170, 200);
            ctx.drawImage(comode, 260, 300, 200, 150);

            //Print objects on top of background
            for (let i = 0; i < clickableObjects.length; i++){
                clickableObjects[i].print();
            }

        },
        startTimer () {},

        keepScore () {},

        loose () {
            //show pop up with aunt Mildred & text
        },
        win () {
            //show pop up (your gran won riddle contest or so, img)
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




//THIS IS THE PART OF THE CODE, WHERE WE EXECUTE THINGS

    //Print startScreen
    ctx.fillStyle = "brown";
    ctx.fillRect(0, 0, 1000, 550);
    ctx.fillStyle = "#000000";
    ctx.font="65px Georgia";
    ctx.fillText("hello", 200, 200);
    
    canvas.addEventListener("click", game.startGame);
    canvas.addEventListener("click", (e)=>{
        let x = e.offsetX;
        let y = e.offsetY;
        ClickableObject.onClick(x, y);
    })
})

