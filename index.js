// B. ban ve
function Picture(srcInput) {
  this.link = srcInput;
}

function UnknownWord(visibleWordInput) {
  this.visibleWord = visibleWordInput;
  this.uncompletedWord = '';
  let length = visibleWordInput.length;
  for (let i = 0; i < visibleWordInput.length; i++) {
    this.uncompletedWord += '*';
  }
}

function Alphabet() {
  this.letters = ['A','Ă','Â','B','C','D','Đ','E','Ê','G','H','I','K','L','M','N','O','Ô','Ơ','P','Q','R','S','T','U','Ư','V','X','Y'];
}

// function Game(picture, unknownWord, alphabet) {
//   this.picture = picture;
//   this.unknownWord = unknownWord;
//   this.alphabet = alphabet;
// }

// ================================= //
// B. xay nha: tao ra du lieu that
let myPicture = new Picture('./image/vanmieu.jpg');
let myWord = new UnknownWord('VaNMIEU');
let myLetters = new Alphabet();
let myGame = new Game(myPicture, myWord, myLetters);

// C. ve lai giao dien bang JS
document.getElementById('my-picture').src = myPicture.link;

// ve tien trinh cua nguoi dung
redrawUncompletedWord();

// ve bang chu cai
let alphabetHTML = '';
for (let i = 0; i < myLetters.letters.length; i++) {
  alphabetHTML += '<button class="letter" onclick="check(\'' + myLetters.letters[i] + '\')">' + myLetters.letters[i] + '</button>'
}
document.getElementById('alphabet').innerHTML = alphabetHTML;

// kiem tra ky tu da click co trong dap an khong?
function check(letter) {
  let newUncompleted = '';
  for (let i = 0; i < myWord.visibleWord.length; i++) {
    if (myWord.visibleWord[i].toLowerCase() === letter.toLowerCase()) {
      newUncompleted += letter;
    } else if (myWord.uncompletedWord[i] === '*') {
      newUncompleted += '*';
    } else {
      newUncompleted += myWord.uncompletedWord[i];
    }
  }
  myWord.uncompletedWord = newUncompleted;

  //vex lai
  redrawUncompletedWord();
}

function redrawUncompletedWord() {
  let unknownWordHtml = '';
  for (let i = 0; i < myWord.uncompletedWord.length; i++) {
    unknownWordHtml += '<div class="letter">' + myWord.uncompletedWord[i] + '</div>';
  }
  document.getElementById('unknown-word').innerHTML = unknownWordHtml;
}
