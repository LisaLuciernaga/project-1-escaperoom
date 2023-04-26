window.addEventListener("load", function () {
  //THIS IS THE PART OF THE CODE, WHERE WE DECLARE THINGS

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let startText =
    "You're visiting your grandma and she asked for your help with her riddle contest. She's a little confused and scattered the riddles all over her living room... (click anywhere to begin)";

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

  let painting = document.createElement("img");
  painting.src = "img/painting.png";
  painting.text = "Grandma, when she was young & beautiful";

  let wardrobe = document.createElement("img");
  wardrobe.src = "img/wardrobe.png";
  wardrobe.text = "Wardrobe";

  let comode = document.createElement("img");
  comode.src = "img/comode.png";
  comode.text = "Bachelor's chest";

  class ClickableObject {
    constructor(width, height, x, y, name, image, riddleId) {
      this.width = width;
      this.height = height;
      this.positionX = x;
      this.positionY = y;
      this.name = name;
      this.image = image;
      this.riddle = riddleId;
    }

    onHover() {
      //display object name - use onmouseover on the img for this?(https://www.w3schools.com/jsref/event_onmouseover.asp)
      if (
        x > image.x &&
        x < (image.x + image.width && y > image.y && y < image.y + image.height)
      ) {
        //Display image name
      }
    }

    onClick() {
      //Check if image clicked
      // if(x > this.image.x && x < (this.image.x + this.image.width && y > this.image.y && y < (this.image.y + this.image.height))){
      //Display riddle
      // console.log("you clicked on an image!")
      // this.riddle.show //Mariona??
      // }
    }

    print() {
      ctx.drawImage(
        this.image,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      );
    }

    solve() {
      //Solve the riddle, increment score, make object not clickable
    }
  }

  const clickableObjects = [
    new ClickableObject(160, 170, 0, 380, "dog", dog, 0),
    new ClickableObject(150, 350, 450, 150, "clock", clock, 0),
    new ClickableObject(80, 120, 260, 200, "phone", phone, 0),
    new ClickableObject(50, 70, 350, 240, "urn", urn, 0),
    new ClickableObject(200, 250, 750, 300, "grandma", grandma, 0),
  ];

  let backgroundImg = document.createElement("img");
  backgroundImg.src = "img/background.jpg";

  let game = {
    // objects: clickableObjects,
    score: 0,
    started: false,
    startGame() {
      //display game screen, call start timer, display score
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
      for (let i = 0; i < clickableObjects.length; i++) {
        clickableObjects[i].print();
      }

      this.started = true;
    },
    startTimer() {},

    keepScore() {},

    loose() {
      //show pop up with aunt Mildred & text
    },
    win() {
      //show pop up (your gran won riddle contest or so, img)
    },
  };

  //Class riddle
  class Riddle {
    constructor(name, solution, modal) {
      this.riddleId = name;
      this.solution = solution;
      this.modal = modal;
      this.solved = false;
    }

    checkSolution() {
        //needed?
    }

    solve(){
        //Display that the answer is correct (make sound?) --bootstrap alert?
        //Make image no longer clickable
        //Increase score
    }
  }

  const riddles = [
    new Riddle (riddle1, "eat", new bootstrap.Modal("#riddle1")),
    new Riddle (riddle2, '2', new bootstrap.Modal("#riddle2")),
    new Riddle (riddle3, "what would your brother say?", new bootstrap.Modal("#riddle3")),
    new Riddle (riddle4, '5 minutes', new bootstrap.Modal("#riddle4")),
    new Riddle (riddle5, 'david', new bootstrap.Modal("#riddle5"))
  ]

  //THIS IS THE PART OF THE CODE, WHERE WE EXECUTE THINGS

  //Print startScreen
  ctx.fillStyle = "#9F8E72";
  ctx.fillRect(0, 0, 1000, 550);
  ctx.fillStyle = "#000000";
  ctx.font = "20px Georgia";
  ctx.fillText(startText, 10, 50);

  canvas.addEventListener("click", (e) => {
    //If game hasn't started yet, start game
    if (game.started == false) {
      game.startGame();
      console.log("game started");
      //If game started, check if clickable img is clicked
    } else {
      let x = e.offsetX;
      let y = e.offsetY;
      for (let i = 0; i < clickableObjects.length; i++) {
        if (
          x > clickableObjects[i].positionX &&
          x < clickableObjects[i].positionX + clickableObjects[i].width &&
          y > clickableObjects[i].positionY &&
          y < clickableObjects[i].positionY + clickableObjects[i].height
        ) {
          //Display riddle
          console.log("you clicked on an image!");
          riddles[i].modal.show();
        }
      }
    }
  });

  //Riddle #1 button, winning condition
  document.getElementById("button1").addEventListener("click", function() {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea1");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase()

    //Check if the answer is correct
    if(answerValue == riddles[0].solution || answerValue.includes('eat')){
        console.log("correct answer!");
        riddles[0].solved = true;
        riddles[0].solve();
        game.score +=1;
        console.log(game.score)
    } 
    else console.log("wrong answer");
  });
  
  //Riddle #2 button, winning condition
  document.getElementById("button2").addEventListener("click", function() {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea2");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase()

    //Check if the answer is correct
    if(answerValue.includes('2') || answerValue.includes('two')){
        console.log("correct answer!");
        riddles[1].solved = true;
        riddles[1].solve();
        game.score +=1;
        console.log(game.score)
    } 
    else console.log("wrong answer");
  });

  //Riddle #3 button, winning condition
  document.getElementById("button3").addEventListener("click", function() {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea3");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase()

    //Check if the answer is correct
    if(answerValue.includes('what would your brother')){
        console.log("correct answer!");
        riddles[2].solved = true;
        riddles[2].solve();
        game.score +=1;
        console.log(game.score)
    } 
    else console.log("wrong answer");
  });

  //Riddle #4 button, winning condition
  document.getElementById("button4").addEventListener("click", function() {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea4");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase()

    //Check if the answer is correct
    if(answerValue.includes('5 min') || answerValue.includes('five min')){
        console.log("correct answer!");
        riddles[3].solved = true;
        riddles[3].solve();
        game.score +=1;
        console.log(game.score)
    } 
    else console.log("wrong answer");
  });

  //Riddle #5 button, winning condition
  document.getElementById("button5").addEventListener("click", function() {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea5");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase()

    //Check if the answer is correct
    if(answerValue.includes('david')){
        console.log("correct answer!");
        riddles[3].solved = true;
        riddles[3].solve();
        game.score +=1;
        console.log(game.score)
    } 
    else console.log("wrong answer");
  });





//   canvas.addEventListener("onmouseover", (e) => {
//     console.log(); //Mariona?!!! How did you check, which values a mouseevent returns?? Or can I use isPointInside here?

    // image.isPointInside = function(x,y){
    //     return( x>=this.x
    //             && x<=this.x+this.width
    //             && y>=this.y
    //             && y<=this.y+this.height);
//   });
});
