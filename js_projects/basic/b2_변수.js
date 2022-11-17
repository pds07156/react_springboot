// ESNext에서 추가되거나, 변경된 문법 1
// - 변수 추가된 키워드 : const, let
// - 문장의 끝에 ; 생략 가능하다

// 기존 var, 상수 const 생략(b1.js에서 체크 완료)
// 기존의 문제점
var a = "리엑트"
console.log( a )
if ( a ) {
    var a = "자바"
}
console.log( a )
// 변수의 범위란 => {  ...  } 기준, 블럭스코프
// var는 해당 범위를 무시한다, 같은 이름의 변수라면 var 여러번 해도 같은 변수로 본다 
//  -> 오동작 가능 => 해결하기 위해서 let 등장
var a1 = "리액트"
console.log( a1 )
if ( a1 ) {
    // a1의 변수 범위가 if문 내로 제한되었다 -> 지역변수 
    let a1 = "자바"
}
console.log( a1 )
// 결론
// 변수를 let만 사용하거나, var를 사용시에는 변수명이 겹치지 않게 사용