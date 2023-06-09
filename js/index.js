window.addEventListener("load", function () {
  //THIS IS THE PART OF THE CODE, WHERE WE DECLARE THINGS

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let startText1 = "You're visiting your grandma and she asked for your help with her riddle contest.";
  let startText2 = "She's a little confused and scattered the riddles all over her living room...";
  let startTextClick = "(click anywhere to begin)";
  let startText3 = "Escaping Aunt Mildred";

  let auntMildred = document.createElement("img");
  auntMildred.src = "img/auntMildred.png";

  let winTrophy = document.createElement("img");
  winTrophy.src = "img/WinTrophy.gif";

  let trophy = document.createElement("img");
  trophy.src = "img/trophy.png";

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
    constructor(width, height, x, y, name, image) {
      this.width = width;
      this.height = height;
      this.positionX = x;
      this.positionY = y;
      this.name = name;
      this.image = image;
      this.solved = false;
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
    }
    
    const clickableObjects = [
      new ClickableObject(100, 150, 0, 400, "dog", dog),
      new ClickableObject(150, 350, 450, 150, "clock", clock),
      new ClickableObject(80, 120, 260, 200, "phone", phone),
      new ClickableObject(50, 70, 350, 240, "urn", urn),
      new ClickableObject(200, 250, 750, 300, "grandma", grandma),
    ];
    
    let backgroundImg = document.createElement("img");
    backgroundImg.src = "img/background.jpg";

    //Create audios
    let backgroundMusic = document.getElementById("backgroundmusic");
    backgroundMusic.loop = true;

    let openRiddleAudio = document.getElementById("openriddle");
    let closeRiddleAudio = document.getElementById("closeriddle");
    let correctAnswerAudio = document.getElementById("correctanswer");
    let wrongAnswerAudio = document.getElementById("wronganswer");
    let snorringAudio = document.getElementById("snorring");
    let looseAudio = document.getElementById("loose");
    let applauseAudio = document.getElementById("applause");
    let evilLaughAudio = document.getElementById("laugh");

  let game = {
    score: 0,
    started: false,
    winCondition: false,
    finished: false,
    
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
      ctx.drawImage(auntMildred, 1001, 300, 250, 250);
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

      backgroundMusic.play();
      snorringAudio.play();
      this.started = true;
      this.startTimer();
      this.displayScore();
      console.log("intervalId timer",game.intervalId)
    },

    startTimer() {
        let minutes = 0;
        let seconds = 10;
        const timerElement = document.getElementById("timer");
          
        let intervalId = setInterval(() => {
            if( this.winCondition === false){
            seconds--;
          if (seconds === -1) {
            seconds = 59;
            minutes--;
          }
          let timeString = this.padZero(minutes) + ":" + this.padZero(seconds);
          timerElement.textContent = "Time: " + timeString;
        //   console.log(seconds);
          if (minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            this.finished = true;
            this.loose()
            return;
          }
            } else {clearInterval(intervalId)}
        }, 1000);
        // if you win the timer stops
      },
  
      padZero(num) {return num.toString().padStart(2, "0");},
      stopTime() {clearInterval()},
      displayScore() {
        let scoreToDisplay = document.getElementById("score");
        scoreToDisplay.textContent = "Score: " + game.score;
      },

    loose() {
      for (let i = 0; i < clickableObjects.length; i++) {
        clickableObjects[i].solve = true;
        console.log("all riddles solved");
      }

      backgroundMusic.pause();
      snorringAudio.pause();
      looseAudio.play();
      let auntMildredEntered = false;
      let x = 1000;

      intervalId = setInterval(() => {
        if(x<350){
          clearInterval(intervalId);
          auntMildredEntered = true;
          console.log(auntMildredEntered);
          this.finishGame(ctx);
        };
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x--;
        for (let i = 0; i < clickableObjects.length; i++) {
          clickableObjects[i].print();
        }
        
        //REPRINT ROOM
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
        ctx.restore();
        
        ctx.drawImage(auntMildred, 1001, 300, 250, 250);
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
        
        for (let i = 0; i < clickableObjects.length; i++) {
          clickableObjects[i].print();
        }
        //Print auntMildred
        ctx.drawImage(auntMildred, x, 250, 300, 300); 
      }, 10)

    },
//finishGame & printLooseScreen work in mysterious ways. They give errors but removing seemingly irrelevant parts will result in the final black screen not appearing
    finishGame(ctx){
      evilLaughAudio.play();
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#a8986a";
      ctx.font = "50px Papyrus";
      ctx.fillText("You loose!", 350, 200);
      ctx.font = "24px Papyrus";
      ctx.fillText("Aunt Mildred arrived and saw, you're helping your grandma with the riddles.", 50, 300);
      ctx.fillText("Your grandma has been disqualified from the riddle contest.", 50, 400)
      this.printLooseScreen();
      console.log("game finished")
    },
  
    printLooseScreen() {
      if(auntMildredEntered == true){
        // ctx.font = "20px Georgia"
      }
    },

    win() {
      this.winCondition = true;
      //Print winning screen
      ctx.fillStyle = "#9F8E72";
      ctx.fillRect(0, 0, 1000, 550);
      ctx.fillStyle = "#000000";
      ctx.font = "40px Papyrus";
      ctx.fillText("You won!!!", 380, 100,);

      ctx.drawImage(trophy, 300, 150, 370, 350);

      applauseAudio.play();
      backgroundMusic.pause();
      snorringAudio.pause();
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
  ctx.font = "24px Papyrus";

  ctx.fillText(startText1, 20, 420);
  ctx.fillText(startText2, 20, 480);
  ctx.fillText(startTextClick, 20, 540);
  ctx.fillText(startText3, 330, 100, 800);

  auntMildred.onload =() => {ctx.drawImage(auntMildred, 350, 150, 200, 200)};

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
          if (clickableObjects[i].solved == false && game.finished == false) {
            riddles[i].modal.show();
            openRiddleAudio.play();
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
      game.displayScore();
      console.log(game.score);
      correctAnswerAudio.play();
      window.alert(
        "It seems that you dominate the English language, correct answer!"
      );
      if (game.score == 5) game.win();
    } else {
      wrongAnswerAudio.play();
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
      game.displayScore();
      console.log(game.score);
      correctAnswerAudio.play();
      window.alert("You're a genius! That's the correct answer");
      if (game.score == 5) game.win();
    } else {
      wrongAnswerAudio.play();
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
      game.displayScore();
      console.log(game.score);
      correctAnswerAudio.play();
      window.alert("Yes! That's right! You're good at this");
      if (game.score == 5) game.win();
    } else {
      wrongAnswerAudio.play();
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
      game.displayScore();
      console.log(game.score);
      correctAnswerAudio.play();
      window.alert("Correct answer!");
      if (game.score == 1) game.win();
    } else {
      wrongAnswerAudio.play();
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
      game.displayScore();
      console.log(game.score);
      correctAnswerAudio.play();
      window.alert("Duh. Correct answer");
      if (game.score == 5) game.win();
    } else {
      wrongAnswerAudio.play();
      console.log("wrong answer");
      window.alert("Wrong answer, try again");
    }
  });
});
