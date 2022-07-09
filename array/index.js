// 1. 변수 arr을 선언하고, 빈 배열로 값을 초기화 하세요.

const arr = [];
//const arr = new Array();

// 2. 변수 temp를 선언하고, "A"와 "B"와 "C"의 값을 넣도록 초기화 하세요.

const temp = ["A", "B", "C"];

// 3. 배열 temp의 길이를 출력하세요.

//console.log(temp.length);



// 만들어진 temp배열에 "D" 와 "E"를 추가하고,
// 길이를 출력하세요.
temp.push("D");
temp.push("E");
console.log(temp.length);

// 반복문을 사용하여 temp의 모든 요소를 출력하세요.
// [출력형태] A입니다.
//          B입니다.
//          C입니다.
//          ...
//          ...

for (let i = 0; i < temp.length; i++) {
    console.log(`${temp[i]} 입니다.`); 
};