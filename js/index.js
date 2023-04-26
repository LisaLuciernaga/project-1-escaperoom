//For BootStrap
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script> */}

window.addEventListener("load", function(){
    //THIS IS THE PART OF THE CODE, WHERE WE DECLARE THINGS

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let startText1 = "You're visiting your grandma and she asked for your help with her riddle contest.";
    let startText2 = "She's a little confused and scattered the riddles all over her living room... (click anywhere to begin)";

    let auntMildred = document.createElement("img");
    auntMildred.src = "img/auntMildred.png";

    //create all images for clickable objects
    let dog = document.createElement("img");
    dog.src = "img/dog.png";
    dog.text = "Mr. Chaps - taxidermed"; //Text to display when hovering mouse
    
    let grandma = document.createElement("img");
    grandma.src = "img/grandma.png";
    grandma.text = "Grandma (sleeping)";
    
    let phone = document.createElement("img");
    phone.src = "img/phone.png";
    phone.text = "Old phone";
    
    let urn = document.createElement("img");
    urn.src = "img/urn.png";
    urn.text = "Grandpa's ashes";
    
    let clock = document.createElement("img");
    clock.src = "img/clock.png";
    clock.text = "Clock";
    
    
    //Create images for non clickable objects
    let frames = document.createElement("img");
    frames.src = "img/frames.png";
    frames.text = "Some old photos"; //Text to display when hovering mouse
    
    let picture = document.createElement("img");
    picture.src = "img/picture.png";
    picture.text = "Grandma, when she was young & beautiful";
    
    let wardrobe = document.createElement("img");
    wardrobe.src = "img/wardrobe.png";
    wardrobe.text = "Wardrobe";

    let comode = document.createElement("img");
    comode.src = "img/comode.png";
    comode.text = "Bachelor's chest"

    let roundTable = document.createElement("img");
    roundTable.src = "img/roundTable.png";

    let vase = document.createElement("img");
    vase.src = "img/vase.png";

    let sideTable = document.createElement("img");
    sideTable.src = "img/sideTable.png";

    let denture = document.createElement("img");
    denture.src = "img/denture.png";

    let chandelier = document.createElement("img");
    chandelier.src = "img/chandelier.png";

    let suitcase = document.createElement("img");
    suitcase.src = "img/suitcase.png";

    let suitcasey = document.createElement("img");
    suitcasey.src = "img/suitcasey.png";


    

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
        
        onClick(){
            //Check if image clicked
            // if(x > this.image.x && x < (this.image.x + this.image.width && y > this.image.y && y < (this.image.y + this.image.height))){
                //Display riddle
                // console.log("you clicked on an image!")
                // this.riddle.show //Mariona??
            // }
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
        new ClickableObject (150, 350, 450, 150, "clock", clock, 0),
        new ClickableObject (80, 120, 260, 200, "phone", phone, 0),
        new ClickableObject (50, 70, 350, 240, "urn", urn, 0),
        new ClickableObject (200, 250, 750, 300, "grandma", grandma, 0)
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
            ctx.drawImage(picture, 700, 35, 200, 180);
            ctx.drawImage(frames, 300, 40, 150, 160);
            ctx.drawImage(comode, 260, 300, 200, 150);
            ctx.drawImage(roundTable, 600, 300, 100, 150);
            ctx.drawImage(vase, 598, 210, 80, 100);
            ctx.drawImage(sideTable, 650, 470, 100, 80);
            ctx.drawImage(denture, 685, 450, 30, 40);
            ctx.drawImage(chandelier, 470, -40, 120, 200);
            ctx.drawImage(suitcase, 47, 40, 200, 90);
            ctx.drawImage(suitcasey, 65, 28, 152, 70);


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
            // open the popup window and display the question $('#myModal').modal('show')
            const riddleWindow = document.createElement ('div')
            riddleWindow.innerHTML =  
            `<div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">You've found a new riddle!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>What common English verb becomes its own past tence by rearranging it's letters?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Check answer</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>`
        }
        
        hide(){
            //hide popup $('#myModal').modal('hide')
        }
        
        checkSolution(){
            //check if the solution, player entered matches riddle solution, return boolean
        }
    }




//THIS IS THE PART OF THE CODE, WHERE WE EXECUTE THINGS

//Print startScreen
ctx.fillStyle = "#9F8E72";
ctx.fillRect(0, 0, 1000, 550);
ctx.fillStyle = "#000000";
ctx.font ="30px Blackadder ITC";

ctx.fillText(startText1, 20, 420);
ctx.fillText(startText2, 20, 480);

ctx.drawImage(auntMildred, 500, 250, 90, 80);

    
    canvas.addEventListener("click", game.startGame);
    canvas.addEventListener("click", (e)=>{
        let x = e.offsetX;
        let y = e.offsetY;

        for(let i = 0; i < clickableObjects.length; i++){
            if(x > clickableObjects[i].positionX && x < (clickableObjects[i].positionX + clickableObjects[i].width) && y > clickableObjects[i].positionY && y < (clickableObjects[i].positionY + clickableObjects[i].height)){
                //Display riddle
                console.log("you clicked on an image!")
            // ClickableObject.onClick(x, y);
            }
        }
    })

    canvas.addEventListener("onmouseover", (e)=>{
        console.log() //Mariona?!!! How did you check, which values a mouseevent returns?? Or can I use isPointInside here?

        // image.isPointInside = function(x,y){
        //     return( x>=this.x 
        //             && x<=this.x+this.width
        //             && y>=this.y
        //             && y<=this.y+this.height);
    })












})

