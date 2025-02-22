//source text based on recurring dream/out of body experience

/********************************/
/***-- Variables to change ---***/
/********************************/
let state = 0;
let questionText = "what troubles you?";
let n = 4;
let numSentences = 3;
let markov;
let source;
let displayText = [""];

function preload() {
  source = loadStrings("source.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  fill(255);
  textSize(32);
  textAlign(CENTER);

  button2 = createButton("👁");
  //button2 = createButton("🙏");
  button2.position((windowWidth/8)*7, 15);
  button2.mousePressed(popup);
  button2.style("background-color", "blue");
  button2.style("border-color", "white");
  button2.style("color", "white");
  button2.style("border-radius", "5px");
  button2.style("font-size", "28px")

  let inp = createInput(questionText);
  inp.position((windowWidth/2)-150, (windowHeight/8)*7-20);
  inp.size(300);
  inp.style("background-color", "blue");
  inp.style("border-color", "white");
  inp.style("color", "white");
  inp.style("border-radius", "5px");
  inp.style("font-size", "28px")

  button = createButton("let go");
  button.position((windowWidth/2)-40, (windowHeight/8)*7+30);
  button.mousePressed(generateText);
  button.style("background-color", "blue");
  button.style("border-color", "white");
  button.style("color", "white");
  button.style("border-radius", "5px");
  button.style("font-size", "28px")

  // create a markov model w' n=4
  markov = RiTa.markov(n);
  // load text into the model
  markov.addText(source.join(" "));
  drawText();
}

function draw() {}

function drawText() {
  background(0, 51, 255);
  textAlign(CENTER);
  text(displayText.join(" "), (windowWidth/2)-200, (windowHeight/2)-275, 400, 500);
}

function generateText() {
  displayText = markov.generate(numSentences);
  drawText();
}

function popup() {
  alert("hail oracle of sleep");
  alert("guardian the blue void");
  alert("goddess of guided mediation and ASMR");
  alert("feed upon our worries and help us rest");
}
