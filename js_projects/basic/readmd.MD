# 목표
    - jS 문법 이해
        - 올드 버전 문법
        - 최신 문법

    - history        

    - 구성 및 관계성
        - JavaScript(1993 ~ )
        - ES5 : ECMAScript 5,  표준스크립트, 2009 발표
        - ESNext : ECMA 2015년부터 매년(1년주기) 발표(업그레이드, 변경,..), 새로운 표준안 발표, 문법 추가
            - ECMA 2015, ECMA 2016, ES6, ES7, ...
        - TypeScript : ESNext + Type(정수, 부동소수, 문자열, .... -> 오류를 줄이고, 명확성 부여)
        - 범위 
            - TypeScript(MS, 구글(확산)) > ESNext > ES5
            - TypeScript -> ESNext -> ES5 => 모든 브라우저 호환된다
                - 현재 js쪽은 ES5로 가동된다
                - TS -> transcompile(컴파일) -> ESNext -> 처리(표준화):babel -> ES5 생성 -> webpack -> 압축
                - trans compile 처리하여 사용
        - React
            - 1) ESNext 개발 -> ES5 호환처리 (이번 과정 방식)
            - 2) TypeScript -> ESNext -> ES5