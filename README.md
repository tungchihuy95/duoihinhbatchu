# duoihinhbatchu
Game  đuổi hình bắt chữ:

A. Xây dựng giao diện
Gồm 3 hàng ngang (3 div chồng lên nhau):
  1. Phần 1: id=“picture”
  2. Phần 2: id=“unknown-word”
  3. Phần 3: id=“alphabet”

B. Chuẩn bị dữ liệu. Phần này sử dụng OOP. Các đối tượng sẽ có là:
Phần 1: Picture: có thuộc tính là url
Phần 2: UnknownWord: có 2 thuộc tínt: visibleLetters, invisibleLetters
Phần 3: Alphabet

C. làm lại bước A bằng JS

D. Code logic cho game: vd click vào button, chấm điểm đúng sai...

Ví dụ:
function Alphabet() {
  this.letters = [‘A’, ‘Ă’, ‘Â’, ‘B’….];
}

var vietnameseAlphabet = new Alphabet(‘Vietnamese’)
console.log(alphabet.language);


function UnknownWord() {
  this.visible = [];
  this.invisible = [];
}

var unknownWord = new U