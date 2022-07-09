// String

const str = "Hello World";
// replace
// 특정 문자를, 지정된 문자로 바꿔주는것!

const answer = str.replace("H", "W");
console.log(answer);

const answer2 = str.replace("World", "Country");
console.log(answer2);

const answer3 = str.replace(" ", "");
console.log(answer3);
console.log("========================================================================================================================");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const vv = "안녕, 나는 OO(이)야";

// split
// 특정 문자열을 기준으로, 문자열을 쪼개는 것
// split은 나누어진 문자열을 배열로 반환한다.

const _vv = vv.split(", ");
console.log(_vv);

const vvs = _vv[1];
const _vvs = vvs.replace("OO", "OOO");
console.log(_vvs);


console.log("========================================================================================================================");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ap = '';

const _ap = ap.charCodeAt();
console.log(_ap);

if(_ap >= 65 && _ap <= 90) {
    console.log("대문자입니다");
}   else if(_ap >= 97 && _ap <= 122) {
    console.log("소문자입니다");
}   else {
    console.log("대소문자 외의 문자입니다");
};


let registerFlag = true;

const inputId = "asdfgjkl";
for(let i = 0; i< inputId.length; i++) {
    const compare = inputId[i].charCodeAt();
    if(compare>= 97 && compare <= 122) {

    }   else{ registerFlag = false;
    break;
    }
};

if(registerFlag) {
    console.log("가입이 가능합니다");
} else {
    console.log("가입이 불가능합니다");
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. 변수 aastr을 선언하고 "Hello My First Application" 이라는 값으로 초기화 한다.
// aastr에 있는 모든 대문자를 소문자로 변환하여 출력하세요.

const aastr = "Hello My First Application";
const aastr_answer = aastr.split(" ")


// 2. 변수 value에 "The Development with our team" 이라는 값으로 초기화한후,
// "with"를 "as" 로 변경하여 출력하세요.

const value = "The Development with our team";
const value_answer = value.replace("with", "as");
console.log(value_answer);


// 3. 변수 aaii에 "HELLO, THIS PROBLEM WAS SOLVED" 라는 값을 지정하고, 모든 문자를 소문자로 변경하여 출력하세요.

const aaii = "HELLO, THIS PROBLEM WAS SOLVED";



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
