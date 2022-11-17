// 배열 - 대표적인 jS의 자료구조, 순서존재, 값중복 ok

// 생성
let arr = ['A','B']
console.log( arr )

// 값 추출 -> 배열명[ 인덱스 ]
console.log( arr[0] )

// 배열 총길이
console.log( arr.length )

// 순환접근
arr.forEach( (value, index, array)=>{
    console.log( value, index )
} )

// 맴버를 하나씩 꺼내서 조작 후 리턴 -> map()
let data = arr.map( (value, index, array)=>{
    return `${index}-${value}`
} )
console.log( data )

// 맴버를 하나씩 꺼내서 컬러서  리턴 -> filter()
data = arr.filter( (value, index, array)=>{
    // 짝수번째 데이터만 모은다
    if( index % 2 == 0 ) return true
    return false
} )
console.log( data )

// 배열 조작
// 배열의 끝에 맴버 추가하기
arr.push('C')
console.log( arr )

// 배열 맨앞 맴버 제거하기
console.log( arr.shift() )
console.log( arr )

// 배열 맨앞에 맴버 추가하기
console.log( arr.unshift('A') )
console.log( arr )
console.log('----')
// 특정 위치 맴버 제거
console.log( arr.splice(1,2) )
console.log( arr )
