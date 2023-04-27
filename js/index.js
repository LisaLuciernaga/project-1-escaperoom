window.addEventListener("load", function () {
  //THIS IS THE PART OF THE CODE, WHERE WE DECLARE THINGS

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let startText1 =
    "You're visiting your grandma and she asked for your help with her riddle contest.";
  let startText2 =
    "She's a little confused and scattered the riddles all over her living room... (click anywhere to begin)";
  let startText3 = "Escaping Aunt Mildred";

  let auntMildred = document.createElement("img");
  auntMildred.src = "img/auntMildred.png";

  let winTrophy = document.createElement("img");
  winTrophy.src = "img/winTrophy.gif";

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
  comode.text = "Bachelor's chest";

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
    constructor(width, height, x, y, name, image, riddleId) {
      this.width = width;
      this.height = height;
      this.positionX = x;
      this.positionY = y;
      this.name = name;
      this.image = image;
      this.riddle = riddleId;
      this.solved = false;
    }

    // onHover() {
    //display object name - use onmouseover on the img for this?(https://www.w3schools.com/jsref/event_onmouseover.asp)
    //   if (
    //     x > image.x &&
    //     x < (image.x + image.width && y > image.y && y < image.y + image.height)
    //   ) {
    //     //Display image name
    //   }

    print() {
      ctx.drawImage(
        this.image,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      );
    }
  }

  const clickableObjects = [
    new ClickableObject(100, 150, 0, 400, "dog", dog, 0),
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
      for (let i = 0; i < clickableObjects.length; i++) {
        clickableObjects[i].print();
      }

      this.started = true;
      this.startTimer();
    },
    startTimer() {
      let minutes = 5;
      let seconds = 0;
      const timerElement = document.getElementById("timer");

      let intervalId = setInterval(() => {
        seconds--;

        if (seconds === -1) {
          seconds = 59;
          minutes--;
        }

        let timeString = this.padZero(minutes) + ":" + this.padZero(seconds);

        timerElement.textContent = timeString;
        console.log(seconds);
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          return;
        }
      }, 1000);

      return intervalId;
    },

    padZero(num) {
      return num.toString().padStart(2, "0");
    },

    loose() {
      //auntMildred animation
      setInterval(function () {
        if (auntmildred.x > 500) {
          auntMildred.x++;
        }
      }, 60);

      //Print loosing screen
      ctx.fillStyle = "#9F8E72";
      ctx.fillRect(0, 0, 1000, 550);
      ctx.fillStyle = "#000000";
      ctx.font = "20px Georgia";
      ctx.fillText("You lost!!!", 10, 50);
    },

    win() {
      //Print winning screen
      ctx.fillStyle = "#9F8E72";
      ctx.fillRect(0, 0, 1000, 550);
      ctx.fillStyle = "#000000";
      ctx.font = "20px Georgia";
      ctx.fillText("You won!!!", 10, 50);

      winTrophy.onload =() =>{ctx.drawImage(winTrophy, 400, 200, 200, 200)};
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
  }

  const riddles = [
    new Riddle(riddle1, "eat", new bootstrap.Modal("#riddle1")),
    new Riddle(riddle2, "2", new bootstrap.Modal("#riddle2")),
    new Riddle(
      riddle3,
      "what would your brother say?",
      new bootstrap.Modal("#riddle3")
    ),
    new Riddle(riddle4, "5 minutes", new bootstrap.Modal("#riddle4")),
    new Riddle(riddle5, "david", new bootstrap.Modal("#riddle5")),
  ];

  //THIS IS THE PART OF THE CODE, WHERE WE EXECUTE THINGS

  //Print startScreen
  ctx.fillStyle = "#9F8E72";
  ctx.fillRect(0, 0, 1000, 550);
  ctx.fillStyle = "#000000";
  ctx.font = "30px Blackadder ITC";

  ctx.fillText(startText1, 20, 420);
  ctx.fillText(startText2, 20, 480);
  ctx.fillText(startText3, 300, 100, 800);

  auntMildred.onload =() =>{ctx.drawImage(auntMildred, 350, 150, 200, 200)};
  
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
          if (clickableObjects[i].solved == false) {
            riddles[i].modal.show();
          }
        }
      }
    }
  });

  //Riddle #1 button, winning condition
  document.getElementById("button1").addEventListener("click", function () {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea1");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase();

    //Check if the answer is correct
    if (answerValue == riddles[0].solution || answerValue.includes("eat")) {
      console.log("correct answer!");
      clickableObjects[0].solved = true;
      game.score += 1;
      console.log(game.score);
      window.alert(
        "It seems that you dominate the English language, correct answer!"
      );
      if (game.score == 5) game.win();
    } else {
      console.log("wrong answer");
      window.alert("Wrong answer, try again");
    }
  });

  //Riddle #2 button, winning condition
  document.getElementById("button2").addEventListener("click", function () {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea2");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase();

    //Check if the answer is correct
    if (answerValue.includes("2") || answerValue.includes("two")) {
      console.log("correct answer!");
      clickableObjects[1].solved = true;
      game.score += 1;
      console.log(game.score);
      window.alert("You're a genius! That's the correct answer");
      if (game.score == 5) game.win();
    } else {
      console.log("wrong answer");
      window.alert("Wrong answer, try again");
    }
  });

  //Riddle #3 button, winning condition
  document.getElementById("button3").addEventListener("click", function () {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea3");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase();

    //Check if the answer is correct
    if (answerValue.includes("what would your brother")) {
      console.log("correct answer!");
      clickableObjects[2].solved = true;
      game.score += 1;
      console.log(game.score);
      window.alert("Yes! That's right! You're good at this");
      if (game.score == 5) game.win();
    } else {
      console.log("wrong answer");
      window.alert("Wrong answer, try again");
    }
  });

  //Riddle #4 button, winning condition
  document.getElementById("button4").addEventListener("click", function () {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea4");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase();

    //Check if the answer is correct
    if (answerValue.includes("5 min") || answerValue.includes("five min")) {
      console.log("correct answer!");
      clickableObjects[3].solved = true;
      game.score += 1;
      console.log(game.score);
      window.alert("Correct answer!");
      if (game.score == 5) game.win();
    } else {
      console.log("wrong answer");
      window.alert("Wrooong!!!");
    }
  });

  //Riddle #5 button, winning condition
  document.getElementById("button5").addEventListener("click", function () {
    // Get the answer element and value
    let answerElement = document.getElementById("floatingTextarea5");
    let answerValue = answerElement.value;
    answerValue = answerValue.toLowerCase();

    //Check if the answer is correct
    if (answerValue.includes("david")) {
      console.log("correct answer!");
      clickableObjects[4].solved = true;
      game.score += 1;
      console.log(game.score);
      window.alert("Duh. Correct answer");
      if (game.score == 5) game.win();
    } else {
      console.log("wrong answer");
      window.alert("Wrong answer, try again");
    }
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
