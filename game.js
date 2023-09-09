// Desc: Main game file for Flan game
// Author: David_ca6
// Date: 20 July 2023
// Version: 1.0

// set up canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let offset = 160;
let step = 0;

// load bg image
const bgImage = new Image();
bgImage.src = "./assets/ui/bg.png";
bgImage.onload = () => { 
    canvas.width = bgImage.width;
    canvas.height = bgImage.height;
    startGame();
};

// setup flan object
flan = { 
    x: 35,
    y: 280,
    width: 128,
    height: 128,

    body:  0,
    base:  0,
    eyes:  0,
    mouth: 0,
    head:  0,
    hand:  0,
    bg:    0,

    draw: function () {
        let xpos = this.x + (step*offset);
        ctx.drawImage(flanBodyParts.bg,    xpos, this.y);
        ctx.drawImage(flanBodyParts.body,  xpos, this.y);
        ctx.drawImage(flanBodyParts.base,  xpos, this.y);
        ctx.drawImage(flanBodyParts.eyes,  xpos, this.y);
        ctx.drawImage(flanBodyParts.mouth, xpos, this.y);
        ctx.drawImage(flanBodyParts.head,  xpos, this.y);
        ctx.drawImage(flanBodyParts.hand,  xpos, this.y);
    }
}

flanBodyParts = {

    bodyList: [
        "./assets/flans/body/none.png",
        "./assets/flans/body/cat.png",
        "./assets/flans/body/rat.png",
        "./assets/flans/body/tentacle.png",
        "./assets/flans/body/succubus.png",
    ],

    baseList: [
        "./assets/flans/base/caramel.png",
        "./assets/flans/base/chocolate.png",
        "./assets/flans/base/milk.png",
        "./assets/flans/base/blueberry.png",
        "./assets/flans/base/strawberry.png",
        "./assets/flans/base/purple.png",
    ],

    eyesList: [
        "./assets/flans/eyes/none.png",
        "./assets/flans/eyes/pien.png",
        "./assets/flans/eyes/><.png",
        "./assets/flans/eyes/(.png",
        "./assets/flans/eyes/censored.png",
        "./assets/flans/eyes/expressionless.png",
        "./assets/flans/eyes/heart.png",
        "./assets/flans/eyes/nerd.png",
        "./assets/flans/eyes/o o.png",
        "./assets/flans/eyes/sob.png",
        "./assets/flans/eyes/sunglasses.png",
        "./assets/flans/eyes/wink.png",
        "./assets/flans/eyes/zany.png",
    ],

    mouthList: [
        "./assets/flans/mouth/none.png",
        "./assets/flans/mouth/nerd.png",
        "./assets/flans/mouth/expressionless.png",
        "./assets/flans/mouth/kiss.png",
        "./assets/flans/mouth/O.png",
        "./assets/flans/mouth/pien.png",
        "./assets/flans/mouth/smile.png",
        "./assets/flans/mouth/smileBig.png",
        "./assets/flans/mouth/smug.png",
        "./assets/flans/mouth/tongueOut.png",
        "./assets/flans/mouth/zany.png",
        "./assets/flans/mouth/zipper.png",
    ],

    headList: [
        "./assets/flans/head/none.png",
        "./assets/flans/head/angry.png",
        "./assets/flans/head/heart.png",
        "./assets/flans/head/ribon1.png",
        "./assets/flans/head/ribon2.png",
        "./assets/flans/head/ribon3.png",
        "./assets/flans/head/sweat.png",
        "./assets/flans/head/angel.png",
        "./assets/flans/head/demon.png",
        "./assets/flans/head/pantsu.png",
        "./assets/flans/head/gradhat.png",
        "./assets/flans/head/tophat.png",
        "./assets/flans/head/sunhat.png",
        "./assets/flans/head/zzz.png",
        "./assets/flans/head/rescue.png",
        "./assets/flans/head/crown.png",
    ],

    handList: [
        "./assets/flans/hand/none.png",
        "./assets/flans/hand/pill.png",
        "./assets/flans/hand/pick.png",
        "./assets/flans/hand/ban.png",
        "./assets/flans/hand/firework.png",
        "./assets/flans/hand/flashlight.png",
        "./assets/flans/hand/gun.png",
        "./assets/flans/hand/camera.png",
        "./assets/flans/hand/phone.png",
        "./assets/flans/hand/mic.png",
        "./assets/flans/hand/dagger.png",
        "./assets/flans/hand/shield.png",
        "./assets/flans/hand/plunger.png",
        "./assets/flans/hand/broom.png",
        "./assets/flans/hand/scissor.png",
        "./assets/flans/hand/toiletpaper.png",
        "./assets/flans/hand/soap.png",
        "./assets/flans/hand/trumpet.png",
        "./assets/flans/hand/screwdriver.png",
        "./assets/flans/hand/paintbrush.png",
        "./assets/flans/hand/hypno.png",
    ],

    bgList: [
        "./assets/flans/bg/none.png",
        "./assets/flans/bg/beach.png",
        "./assets/flans/bg/island.png",
        "./assets/flans/bg/desert.png",
        "./assets/flans/bg/japanCastle.png",
        "./assets/flans/bg/castle.png",
        "./assets/flans/bg/night.png",
        "./assets/flans/bg/sunrise.png",
        "./assets/flans/bg/volcano.png",
    ],


    body:  new Image(),
    base:  new Image(),
    eyes:  new Image(),
    mouth: new Image(),
    head:  new Image(),
    hand:  new Image(),
    bg:    new Image(),

    sampleBody:  new Image(),
    sampleBase:  new Image(),
    sampleEyes:  new Image(),
    sampleMouth: new Image(),
    sampleHead:  new Image(),
    sampleHand:  new Image(),
    sampleBg:    new Image(),

    bodyL:  -1,
    baseL:  -1,
    eyesL:  -1,
    mouthL: -1,
    headL:  -1,
    handL:  -1,
    bgL:    -1,

  loadImages: function () {
    if(this.bodyL != flan.body){
        this.bodyL = flan.body;
        this.body = new Image();
        this.body.src = this.bodyList[flan.body];
    }

    if(this.baseL != flan.base){
        this.baseL = flan.base;
        this.base = new Image();
        this.base.src = this.baseList[flan.base];
    }

    if(this.eyesL != flan.eyes){
        this.eyesL = flan.eyes;
        this.eyes = new Image();
        this.eyes.src = this.eyesList[flan.eyes];
    }

    if(this.mouthL != flan.mouth){
        this.mouthL = flan.mouth;
        this.mouth = new Image();
        this.mouth.src = this.mouthList[flan.mouth];
    }

    if(this.headL != flan.head){
        this.headL = flan.head;
        this.head = new Image();
        this.head.src = this.headList[flan.head];
    }

    if(this.handL != flan.hand){
        this.handL = flan.hand;
        this.hand = new Image();
        this.hand.src = this.handList[flan.hand];
    }

    if(this.bgL != flan.bg){
        this.bgL = flan.bg;
        this.bg = new Image();
        this.bg.src = this.bgList[flan.bg];
    }
  },

}

// start game and initialize game objects
function startGame() { 
    // setup flan
    flanBodyParts.loadImages();

    flanBodyParts.sampleBody.src  = flanBodyParts.bodyList[1];
    flanBodyParts.sampleBase.src  = flanBodyParts.baseList[1];
    flanBodyParts.sampleEyes.src  = flanBodyParts.eyesList[1];
    flanBodyParts.sampleMouth.src = flanBodyParts.mouthList[1];
    flanBodyParts.sampleHead.src  = flanBodyParts.headList[1];
    flanBodyParts.sampleHand.src  = flanBodyParts.handList[1];
    flanBodyParts.sampleBg.src    = flanBodyParts.bgList[1];

    // start game loop
    gameLoop();
}

// main game loop
function gameLoop() { 
    
    // get input
    input();

    // Update stuff from input
    update();

    // Draw graphics to screen
    draw();

    // Repeat gameLoop function 
    requestAnimationFrame(gameLoop);
}

keyEvt = {
    state: {
        left : false,
        right: false,
        up   : false,
        down : false,
        space: false,
        enter: false,
        esc  : false,
        shift: false,
    },
    pressed: {
        left : false,
        right: false,
        up   : false,
        down : false,
        space: false,
        enter: false,
        esc  : false,
        shift: false,
    },
    pressedNow: {
        left : false,
        right: false,
        up   : false,
        down : false,
        space: false,
        enter: false,
        esc  : false,
        shift: false,
    },
}

// read key input press
document.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.key === "ArrowLeft") { keyEvt.state.left  = true;}
    if (e.key === "ArrowRight") { keyEvt.state.right = true; }
    if (e.key === "ArrowUp") { keyEvt.state.up    = true; }
    if (e.key === "ArrowDown") { keyEvt.state.down  = true; }
});

// read key input release
document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") { keyEvt.state.left  = false;  keyEvt.pressed.left  = false; }
    if (e.key === "ArrowRight") { keyEvt.state.right = false;  keyEvt.pressed.right  = false; }
    if (e.key === "ArrowUp") { keyEvt.state.up    = false;  keyEvt.pressed.up  = false; }
    if (e.key === "ArrowDown") { keyEvt.state.down  = false;  keyEvt.pressed.down  = false; }
});

// update key event sync with game loop
function input() { 
    // update keyEvt.pressedNow
    keyEvt.pressedNow.left  = keyEvt.state.left  && !keyEvt.pressed.left;
    if(keyEvt.pressedNow.left){
        keyEvt.pressed.left  = true; 
    }

    keyEvt.pressedNow.right = keyEvt.state.right && !keyEvt.pressed.right;
    if(keyEvt.pressedNow.right){
        keyEvt.pressed.right  = true; 
    }

    keyEvt.pressedNow.up    = keyEvt.state.up    && !keyEvt.pressed.up;
    if(keyEvt.pressedNow.up){
        keyEvt.pressed.up  = true; 
    }
    
    keyEvt.pressedNow.down  = keyEvt.state.down  && !keyEvt.pressed.down;
    if(keyEvt.pressedNow.down){
        keyEvt.pressed.down  = true; 
    }
}

// update game state
function update() { 

    if(keyEvt.pressedNow.right){
        step++;
    }
    if(keyEvt.pressedNow.left){
        step--;
    }
    if(step>7){
        step = 7;
    }
    if(step<0){
        step = 0;
    }

    if(step == 0){
        if(keyEvt.pressedNow.up){
            flan.base++;
        }
        if(keyEvt.pressedNow.down){
            flan.base--;
        }
        if(flan.base > flanBodyParts.baseList.length-1){
            flan.base = flanBodyParts.baseList.length-1;
        } else if(flan.base < 0){
            flan.base = 0;
        }
    } else if(step == 1){
        if(keyEvt.pressedNow.up){
            flan.eyes++;
        }
        if(keyEvt.pressedNow.down){
            flan.eyes--;
        }
        if(flan.eyes > flanBodyParts.eyesList.length-1){
            flan.eyes = flanBodyParts.eyesList.length-1;
        } else if(flan.eyes < 0){
            flan.eyes = 0;
        }
    } else if(step == 2){
        if(keyEvt.pressedNow.up){
            flan.mouth++;
        }
        if(keyEvt.pressedNow.down){
            flan.mouth--;
        }
        if(flan.mouth > flanBodyParts.mouthList.length-1){
            flan.mouth = flanBodyParts.mouthList.length-1;
        } else if(flan.mouth < 0){
            flan.mouth = 0;
        }
    } else if(step == 3){
        if(keyEvt.pressedNow.up){
            flan.head++;
        }
        if(keyEvt.pressedNow.down){
            flan.head--;
        }
        if(flan.head > flanBodyParts.headList.length-1){
            flan.head = flanBodyParts.headList.length-1;
        } else if(flan.head < 0){
            flan.head = 0;
        }
    } else if(step == 4){
        if(keyEvt.pressedNow.up){
            flan.hand++;
        }
        if(keyEvt.pressedNow.down){
            flan.hand--;
        }
        if(flan.hand > flanBodyParts.handList.length-1){
            flan.hand = flanBodyParts.handList.length-1;
        } else if(flan.hand < 0){
            flan.hand = 0;
        }
    } else if(step == 5){
        if(keyEvt.pressedNow.up){
            flan.body++;
        }
        if(keyEvt.pressedNow.down){
            flan.body--;
        }
        if(flan.body > flanBodyParts.bodyList.length-1){
            flan.body = flanBodyParts.bodyList.length-1;
        } else if(flan.body < 0){
            flan.body = 0;
        }
    } else if(step == 6){
        if(keyEvt.pressedNow.up){
            flan.bg++;
        }
        if(keyEvt.pressedNow.down){
            flan.bg--;
        }
        if(flan.bg > flanBodyParts.bgList.length-1){
            flan.bg = flanBodyParts.bgList.length-1;
        } else if(flan.bg < 0){
            flan.bg = 0;
        }
    } else if(step == 7){

        if(keyEvt.pressedNow.up){
            generateFlan();
        }
        if(keyEvt.pressedNow.down){
            step=0;
            flan.base = 0;
            flan.eyes = 0;
            flan.mouth = 0;
            flan.head = 0;
            flan.hand = 0;
            flan.body = 0;
            flan.bg = 0;
        }
    }

    flanBodyParts.loadImages();

}

// main draw function
function draw() { 
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background image
    ctx.drawImage(bgImage, 0, 0);

    // Draw flan
    flan.draw();

    // Draw sample body parts
    ctx.drawImage(flanBodyParts.sampleBase,  15 + 0*offset, 450);
    ctx.drawImage(flanBodyParts.sampleEyes,  15 + 1*offset, 450);
    ctx.drawImage(flanBodyParts.sampleMouth, 15 + 2*offset, 450);
    ctx.drawImage(flanBodyParts.sampleHead,  15 + 3*offset, 450);
    ctx.drawImage(flanBodyParts.sampleHand,  15 + 4*offset, 450);
    ctx.drawImage(flanBodyParts.sampleBody,  15 + 5*offset, 450);
    ctx.drawImage(flanBodyParts.sampleBg,    15 + 6*offset, 450);

}

// function to allow to download the flan
function generateFlan() {
    const combinedCanvas = document.createElement("canvas");
    const combinedCtx = combinedCanvas.getContext("2d");

    combinedCanvas.width  = flan.width;
    combinedCanvas.height = flan.height;

    // Draw all the flan parts onto the combined canvas
    combinedCtx.drawImage(flanBodyParts.bg,    0, 0);
    combinedCtx.drawImage(flanBodyParts.body,  0, 0);
    combinedCtx.drawImage(flanBodyParts.base,  0, 0);
    combinedCtx.drawImage(flanBodyParts.eyes,  0, 0);
    combinedCtx.drawImage(flanBodyParts.mouth, 0, 0);
    combinedCtx.drawImage(flanBodyParts.head,  0, 0);
    combinedCtx.drawImage(flanBodyParts.hand,  0, 0);

    // Create a download link for the generated image
    const downloadLink = document.createElement("a");
    downloadLink.href = combinedCanvas.toDataURL("image/png");
    downloadLink.download = "flan.png";
    downloadLink.click();
}