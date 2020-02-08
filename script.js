const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.width = 1000;
canvas.height = 500;
let gameWidth = canvas.width;

const ballMove = ballsGame => {
    ballsGame.forEach(ballGame => {
        ballGame.move(collisionObjects);
    })
}
const updateGameWindow = () => {
    gameWidth = canvas.width;
    computerPaddle.positionX = canvas.width - 30;
}

const claerScreen = () => {
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function Paddle(width, height, color, positionX, positionY) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.speed = 3;
    this.middleHeight = height / 2;

}

function Ball(size, color, positionX, positionY) {
    this.width = size;
    this.height = size;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.middleHeight = size / 2;
    this.speedX = 2;
    this.speedY = 2;
    this.directionX = true; // true -> w prawo
    this.directionY = true; // true -> w dól

    this.move = collisionObjects => {
        let collision = 0;
        const ballLeft = this.positionX;
        const ballRight = this.positionX + this.width;
        const ballTop = this.positionY;
        const ballBottom = this.positionY + this.height;
        if (this.directionX && this.directionY) {
            for (let i = 0; i < collisionObjects.length; i++) {
                let objectLeft = collisionObjects[i].positionX;
                let objectRight = collisionObjects[i].positionX + collisionObjects[i].width;
                let objectTop = collisionObjects[i].positionY;
                let objectBottom = collisionObjects[i].positionY + collisionObjects[i].height;

                if (this === collisionObjects[i])
                    continue;
                else if (((objectLeft <= ballLeft && ballLeft <= objectRight) || (objectLeft <= ballRight && ballRight <= objectRight)) && ((objectTop <= ballTop && ballTop <= objectBottom) || (objectTop <= ballBottom && ballBottom <= objectBottom))) {
                    this.directionX != this.directionX;
                    break;
                }
                if ((ballLeft < objectRight && ((objectLeft <= ballLeft + this.speedX && ballLeft + this.speedX <= objectRight) || ((objectLeft <= ballRight + this.speedX && ballRight + this.speedX <= objectRight))) && (ballTop < objectBottom && ((objectTop <= ballTop + this.speedY && ballTop + this.speedY <= objectBottom) || (objectTop <= ballBottom + this.speedY && ballBottom + this.speedY <= objectBottom))))) {
                    collision = 1;
                    break;
                } else if (ballBottom + this.speedY > canvas.height) {
                    colission = 2;
                    break;
                } else if (ballLeft + this.speedX > canvas.width) {
                    colission = 3;
                    playerPoints++;
                    break;
                }
            }
        } else if (this.directionX && !this.directionY) {
            for (let i = 0; i < collisionObjects.length; i++) {
                let objectLeft = collisionObjects[i].positionX;
                let objectRight = collisionObjects[i].positionX + collisionObjects[i].width;
                let objectTop = collisionObjects[i].positionY;
                let objectBottom = collisionObjects[i].positionY + collisionObjects[i].height;

                if (this === collisionObjects[i])
                    continue;
                else if (((objectLeft <= ballLeft && ballLeft <= objectRight) || (objectLeft <= ballRight && ballRight <= objectRight)) && ((objectTop <= ballTop && ballTop <= objectBottom) || (objectTop <= ballBottom && ballBottom <= objectBottom))) {
                    this.directionX != this.directionX;
                    break;
                }
                if ((ballLeft < objectRight && ((objectLeft <= ballLeft + this.speedX && ballLeft + this.speedX <= objectRight) || ((objectLeft <= ballRight + this.speedX && ballRight + this.speedX <= objectRight))) && (ballBottom > objectTop && ((objectTop <= ballTop - this.speedY && ballTop - this.speedY <= objectBottom) || (objectTop <= ballBottom - this.speedY && ballBottom - this.speedY <= objectBottom))))) {

                } else if (
                    // dokonczyc
                ) {

                } else if (ballLeft + this.speedX > canvas.width) {
                    colission = 3;
                    playerPoints++;
                    break;
                }
            }

        } else if (!this.directionX && this.directionY) {
            for (let i = 0; i < collisionObjects.length; i++) {
                let objectLeft = collisionObjects[i].positionX;
                let objectRight = collisionObjects[i].positionX + collisionObjects[i].width;
                let objectTop = collisionObjects[i].positionY;
                let objectBottom = collisionObjects[i].positionY + collisionObjects[i].height;

                if (this === collisionObjects[i])
                    continue;
                else if (((objectLeft <= ballLeft && ballLeft <= objectRight) || (objectLeft <= ballRight && ballRight <= objectRight)) && ((objectTop <= ballTop && ballTop <= objectBottom) || (objectTop <= ballBottom && ballBottom <= objectBottom))) {
                    this.directionX != this.directionX;
                    break;
                }
                if ((ballRight > objectLeft && ((objectLeft <= ballLeft - this.speedX && ballLeft - this.speedX <= objectRight) || (objectLeft <= ballRight - this.speedX && ballRight - this.speedX <= objectRight))) && (ballTop < objectBottom && ((objectTop <= ballTop + this.speedY && ballTop + this.speedY <= objectBottom) || (objectTop <= ballBottom + this.speedY && ballBottom + this.speedY <= objectBottom)))) {

                }
                else if (ballBottom + this.speedY > canvas.height) {
                    colission = 2;
                    break;
                }
            }

        } else {
            for (let i = 0; i < collisionObjects.length; i++) {
                let objectLeft = collisionObjects[i].positionX;
                let objectRight = collisionObjects[i].positionX + collisionObjects[i].width;
                let objectTop = collisionObjects[i].positionY;
                let objectBottom = collisionObjects[i].positionY + collisionObjects[i].height;

                if (this === collisionObjects[i])
                    continue;
                else if (((objectLeft <= ballLeft && ballLeft <= objectRight) || (objectLeft <= ballRight && ballRight <= objectRight)) && ((objectTop <= ballTop && ballTop <= objectBottom) || (objectTop <= ballBottom && ballBottom <= objectBottom))) {
                    this.directionX != this.directionX;
                    break;
                }
                if ((ballRight > objectLeft && ((objectLeft <= ballLeft - this.speedX && ballLeft - this.speedX <= objectRight) || (objectLeft <= ballRight - this.speedX && ballRight - this.speedX <= objectRight))) && (ballBottom > objectTop && ((objectTop <= ballTop - this.speedY && ballTop - this.speedY <= objectBottom) || (objectTop <= ballBottom - this.speedY && ballBottom - this.speedY <= objectBottom)))) {

                }
            }
        }
    }
}

const drawObject = (collisionObject, context) => {
    collisionObjects.forEach(collisionObject => {
        context.fillStyle = collisionObject.color;
        context.fillRect(collisionObject.positionX, collisionObject.positionY, collisionObject.width, collisionObject.height);
    });
}

const collisionObjects = [];
const ballsGame = [];


const playerPaddle = new Paddle(20, 120, 'blue', 10, 50);
const computerPaddle = new Paddle(20, 120, 'red', canvas.width - 30, 100);
const ball = new Ball(20, 'white', canvas.width / 2 - 10, canvas.height / 2 - 10);

collisionObjects.push(playerPaddle, computerPaddle, ball);
ballsGame.push(ball);


const run = () => {
    if (gameWidth !== canvas.width)
        updateGameWindow();
    claerScreen();
    ballMove(ballsGame);
    drawObject(collisionObjects, ctx);
}

let timer = setInterval(run, 1000 / 60)

