// for(변수의 초기화; 조건식; 증감식) {
//    로직    
// }


//for(let i = 0; i < 5; i++) {
    //console.log("*" + i);
//};

// 이중포문

// outerFor
for(let i = 1; i < 6; i++) {
    // innerFor
    for(let j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    console.log();
};

for(let i = 6; i > 1; i--) {
    for(let j = 1; j < i; j++) {
        process.stdout.write("*");
    }
    console.log();
};

//for(let i = 1; i < 6; i++) {
    //for(let j = 6; j > i; j--) {
        //process.stdout.write("*");
    //}
    //console.log();
//};

