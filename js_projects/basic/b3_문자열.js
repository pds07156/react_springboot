// ESNext에서 추가되거나, 변경된 문법 2
// 자바타입:원시(primitive)타입(8개)+참조(reference)타입(1:무한대)
// 문자열 : 기존방식 ' ... ', " ... " 
// 신규추가 : Template Literals => 새로운 기호를 도입 `(백틱)
//           여러줄표현, 구조를 유지, 포멧팅가능

// 포멧팅
/*
대한민국 축구 국가대표 '캡틴' 손흥민(30·토트넘 홋스퍼)이 
국제축구연맹(FIFA)으로부터 역대 월드컵을 손흥민 빛낸 대표적인 
등번호 손흥민 '7번' 선수로 인정받았다. 
*/
const name   = '손홍민';
const age    = 30;
const number = '7번';
// 기존방식
var t = "대한민국 축구 국가대표 '캡틴' " + name + "(30·토트넘 홋스퍼)이\n";
// 신규방식
t = `
대한민국 축구 국가대표 '캡틴' ${name}(${age}·토트넘 홋스퍼)이 
국제축구연맹(FIFA)으로부터 역대 월드컵을 ${name} 빛낸 대표적인 
등번호 ${name} '${number}' 선수로 인정받았다. 
`
console.log( t )

// 구조유지
/*
   로그인 sql 쿼리문

   select
    *
   from 
    userTbl
   where
    uid='quest';
*/
let uid = 'guest'
let sql = `
    select
        *
    from 
        userTbl
    where
        uid='${uid}';
`
console.log( sql )