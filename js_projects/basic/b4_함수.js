// ESNext에서 추가되거나, 변경된 문법 3
// Arrow(화살표) 함수 : 함수를 간단(간략)하게 표현
/*
    - 절차(표준함수를 화살표 함수로 만드는 과정)
     1. function 제거
     2. 파라미터가 1개면 () 제거 가능, 0개면 반드시 () 사용, 
     3. => 화살표 기호 추가
     4. {}:코드블럭은 수행문(statements)이 1개이면 생략 가능
     5. 수행문이 한개, 중괄호 생략 되었다면, return도 생략 가능
*/
function test ( a, b )  {
    let c = a + b
    return c
}
const test2 = ( a, b ) => {
    let c = a + b
    return c
}
function test3 ( a  )  {    
    return a*2
}
const test4 = a => a*2
console.log( test4(100) )

// 파라미터 없는 에로우 함수 예시
const test5 = () => console.log('hi')
test5()
// 문자열 포멧팅과 연계
const selectLogin = uid => `select * from userTbl where uid='${uid}';`
console.log( selectLogin("게스트") )

// 함수 추가 파트 : 파라미터 확장, 기본값 부여, 화살표함수내에 this 용량
// 2022-11-15 진행
// 함수의 파라미터 기본값 부여
function getPerson(name='mora', age=20) {
    // 해당 파라미터에 어떤 타입의 값을 넣어야 할지, 어떤 성격의 값을 넣어야 할지 예시가 된다
    // 함수 호출시 파라미터를 유연하게 적용할수 있다(생략, 일부만 지정 가능?)
    console.log( `${name}의 나이는 ${age}입니다.` )
}
getPerson() // 기본값을 가진 파라미터는 함수 호출시 생략 가능
getPerson('김해공항', 50)
getPerson(50, '김해공항') // 타입이 변경되도 오류나지 않는다
getPerson('김해공항')     // 파라미터는 순서대로 대입된다

getPerson(name='김해공항', age=60)
getPerson(age=60, name='김해공항') // 파라미터의 순서는 반드시 지킨다 
// => 순서대로 파라미터 전달하는것이 기본

// 클로저 (고급)
// 함수 안에 함수가 정의, 호출->리턴, 함수는 내용이 pure(순수)함수 이여야한다
