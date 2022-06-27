
// 43이 홀수인지 짝수인지 구하시오.
const p = 43;

console.log(`[SYSTEM] ${p} 짝수인지, 홀수인지 구하는 시스템 입니다.`)
if (p % 2 === 0) {
    console.log(`${p} 짝수입니다.`);
} else {
    console.log(`${p} 홀수입니다.`);
};

// 변수 filename을 만들고 
// "https://firebase.file.imagefile.com/202202021banner.png"
// 로 저장한다.
// filename 변수에 저장된 파일명의 확장자를 구하여 변수 expend 에 저장하고
// 출력하세요.

const filename = "https://firebase.file.imagefile.com/202202021banner.png"

const expend = `${filename}`

console.log(expend.split(".").pop());
