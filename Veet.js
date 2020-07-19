window.addEventListener("load", init)
// ------------------Global------------------
let time = 3,
    score = 0,
    isplaying;
//------------------DOM------------------
const currentWord = document.getElementById("theWord"),
      changingSecond = document.getElementById("changingSecond"),
      input = document.querySelector("input"),
      message = document.querySelector(".message"),
      timeLeft = document.getElementById("timeLeft"),
      scoreDisplay = document.getElementById("score");

//--------------------------Random Word Array----------------------------------------
const data = [
    "something",
    "love",
    "red",
    "rahil",
    "poland",
    "persona",
    "cool",
    "youtuber",
    "veet",
    "score",
    "node.js",
    "game",
    "break",
    "walk",
    "dead",
    "earthwax",
    "color",
    "key",
    "diameter",
    "way",
    "middle",
    "deficiency",
    "misplace",
    "arrogant",
    "feather",
    "nature",
    "functional",
    "achievement",
    "heal",
    "parameter",
    "mud",
    "criminal",
    "draft",
    "onion",
    "preparation",
    "monster",
    "provide",
    "birthday",
    "cater",
    "association",
    "include",
    "introduction",
    "victory",
    "admire",
    "economy",
    "intervention",
    "bomb",
    "senior",
    "week",
    "tick",
    "chicken",
    "refer",
    "welfare",
    "register",
    "user",
    "behave",
    "generation",
    "diamond",
    "suggest",
    "flu",
    "resident",
    "hand",
    "deprive",
    "Sunday",
    "war",
    "vain",
    "utter",
    "credibility",
    "stimulation",
    "financial",
    "resist",
    "wake",
    "distributor",
    "horseshoe",
    "glove",
    "defend",
    "dawn",
    "plaintiff",
    "occasion",
    "swell",
    "peace",
    "pasture",
    "sand",
    "drill",
    "shark",
    "seek",
    "singer",
    "personal",
    "illusion",
    "virus",
    "panic",
    "haunt",
    "disappear",
    "casualty",
    "salad",
    "defend",
    "dawn",
    "plaintiff",
    "occasion",
    "swell",
    "peace",
    "pasture",
    "sand",
    "drill",
    "shark",
    "seek",
    "singer",
    "personal",
    "illusion",
    "virus",
    "panic",
    "haunt",
    "disappear",
    "casualty",
    "salad",
    "proportion",
    "nursery",
    "tense",
    "manufacture",
    "suffering",
    "machinery",
    "sick",
    "tenant",
    "repetition",
    "debut",
    "looting",
    "movement",
    "recycle",
    "communist",
    "balance",
    "stir",
    "insight",
    "disability",
    "confrontation",
    "convulsion",
    "pat",
    "cattle",
    "hip",
    "ideal",
    "message",
    "opposition",
    "blade",
    "sow",
    "staircase",
    "journal",
    "pleasure",
    "calf",
    "senior",
    "tidy",
    "nuance",
    "constitutional",
    "information",
    "ranch",
    "officer",
    "conservation",
    "periodic",
    "necessary",
    "accurate",
    "economic",
    "old",
    "paltry",
    "square",
    "nervous",
    "snobbish",
    "lively",
    "supreme",
    "jealous",
    "irate",
    "damaging",
    "nondescript",
    "late",
    "gifted",
    "undesirable",
    "successful",
    "remarkable",
    "acid",
    "loving",
    "alcoholic",
    "visible",
    "immense",
    "threatening",
    "grandiose",
    "future",
    "childlike",
    "marvelous",
    "general",
    "absorbing",
    "ill",
    "victorious",
    "unruly",
    "vague",
    "angry",
    "smelly",
    "cowardly",
    "sulky",
    "deadpan",
    "furtive",
    "tearful",
    "obeisant",
    "awful",
    "ceaseless",
    "abhorrent",
    "spicy",
    "exclusive",
    "absent",
    "neighborly",
    "miniature",
    "useless",
    "worthless",
    "cloistered",
    "draconian",
    "scary",
    "yielding",
    "moaning",
    "alcoholic",
    "roomy",
    "gigantic",
    "petite",
    "grandiose",
    "entertaining",
    "slimy",
    "zealous",
    "exotic",
    "hurt",
    "wiggly",
    "classy",
    "coherent",
    "internal",
    "breezy",
    "far",
    "mindless",
    "scared",
    "many",
    "abiding",
    "smiling",
    "satisfying",
    "sweltering",
    "confident",
    "brash",
    "precious",
    "quick",
    "competitive",
    "robust",
    "male",
    "present",
    "important",
    "psychedelic",
    "alluring",
    "freezing",
    "natural",
    "dark",
    "pathetic",
    "magnificent",
    "ratty",
    "basic"
  ]


//--------------------------init() function----------------------------------------
function init() {
  pullOutRandomWord()
  input.addEventListener("input", startMatch)
  setInterval(countDownFunc, 1000)
  setInterval(checkStatus, 50)
}
//--------------------------Pulling out a random Word ----------------------------------
function pullOutRandomWord() {
  let randomIndex = Math.floor(Math.random() * data.length);
  currentWord.innerHTML = data[randomIndex];
}

//--------------------------Count Down Timer ----------------------------------
function countDownFunc() {
  if (time > 0) {
    time--
  }
  else if (time === 0) {
    isplaying = false;
  }
  timeLeft.innerHTML = time;
}
//--------------------------check Status ----------------------------------
function checkStatus() {
  if (!isplaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    message.style.color = "red"
    score = -1;
  }
}
//--------------------------Start matching word ----------------------------------
function startMatch() {
  if (matchWord()) {
    pullOutRandomWord()
    isplaying = true;
    score++;
    time= 4;
    input.value = "";
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  }
  else {
    scoreDisplay.innerHTML = score;
  }
}
function matchWord() {
  if (input.value === currentWord.innerText) {
    message.innerHTML = "Correct!!";
    message.style.color = "green"
    return true;
  }else {
    return false;
  }
}
