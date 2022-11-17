// ESNext에서 추가되거나, 변경된 문법 5
/**
 * 클레스 키워드를 사용하여 클레스 표현 가능
 */
// 자기자신 객체 => this, self
class Human {    
    // 생성자
    constructor ( name, age ) {
        // 맴버 변수 초기화, 선언이 없어도 초기화하면서 생성 가능하다
        this.name = name
        this.age  = age
    }
    // 맴버변수 
    level = 1
    // 맴버함수
    info () {
        console.log( `${ this.name }님의 나이는 ${ this.age }입니다.` )
    }
    // 순수함수(pure)
    add ( x, y ) {
        // 리턴값은 ()로 묶어서 처리 가능
        return (x+y)
    }
}

let obj = new Human('점심', 1130)
console.log( obj )
obj.info()

// 상속 -> 부모클레스의 모든 유산을 그대로 사용가능, 재정의(override), 자식만의 변수/함수 추가
class XMan extends Human {
    // 생성자 재정의
    constructor ( name, age, skill ) {
        super(name, age) // 부모생성자를 호출하여 name, age 초기화 한다
        this.skill = skill
    }
    // 함수 재정의 -> 부모의 함수 형태를 유지하면서 내용 재구성
    info () {
        super.info() // 부모에 존재하는 원래 함수 호출(한번 사용해봄)
        console.log( `${ this.name }님의 기술은 ${ this.skill }입니다.` )
    }
    // 정적(static) 함수 -> 객체를 전달해서 사용, 순수함수 구성시 적합
    static info2( obj ){
        console.log( obj.name )
    }
}
let x = new XMan('울버린', 100, '칼')
console.log( x )
x.info()
XMan.info2( x )