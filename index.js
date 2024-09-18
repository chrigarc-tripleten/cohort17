const form = document.querySelector(".form");
const areaNode = document.querySelector(".area");
const stack = [];
let ballSelected = null;

function randomInt(limit = 100) {
  return Math.floor(Math.random() * limit);
}

function randomColor() {
  const red = randomInt(256);
  const green = randomInt(256);
  const blue = randomInt(256);
  return `rgb(${red}, ${green}, ${blue})`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addBall();
});

function handleClickBall(event) {
  const ballNode = event.target;
  if (ballSelected) {
    ballSelected.classList.remove("ball_active");
  }
  ballNode.classList.add("ball_active");
  ballSelected = ballNode;
}

function addBall() {
  const ballNode = document.createElement("div");
  ballNode.classList.add("ball");
  //tamaño
  const radio = randomInt(150);
  ballNode.style.width = `${radio}px`;
  ballNode.style.height = `${radio}px`;
  //color
  ballNode.style.backgroundColor = randomColor();
  //posicionamiento top, left
  const top = randomInt(window.innerHeight);
  const left = randomInt(window.innerWidth);
  ballNode.style.top = `${top}px`;
  ballNode.style.left = `${left}px`;

  ballNode.addEventListener("click", handleClickBall);

  areaNode.append(ballNode);
  stack.push(ballNode);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "+") {
    addBall();
  }
  if (event.key === "-") {
    /*
    const lastBall = document.querySelector('.ball:last-child');
    if(lastBall){
        lastBall.remove();
    } 
    */
    const lastBall = stack.pop();
    if (lastBall) {
      lastBall.removeEventListener('click', handleClickBall);
      lastBall.remove();
    }
  }
});

document.addEventListener("mousemove", function (event) {
  //console.log(event)
  if (ballSelected) {
    ballSelected.style.top = `${event.clientY - 50}px`;
    ballSelected.style.left = `${event.clientX - 50}px`;
  }
});
