# react

    - 초기 js는 웹브라우저를 대상으로 이벤트/연산/인터렉션 담당하는 단순 스크립트였다
    - 구글 -> 2005(ajax등장) -> 2008(Chrome 브라우저(V8기반) 개발 공개)  -> V8엔진공개 -> V8기반으로 js를 구동하는 생태계 생성 : node
    - node 기반 / 언어( Javascript -> TypeScript )
        - 웹 어플리케이션, 서버 사이드, 데스크톱 어플리케이션 전방위에 사용됨
        - slack, atom, vs code : electron 기반 데스크톱 어플리케이션
        - 페이스북, 디스코드, 페이팔, 이베이 : 모바일웹앱(ionic, phonegap, titanium, react native(3세대), 플러터(구글 3~4세대/Dart 언어))
        - SPA : 프런트 중심의 웹어플리케이션(angular, react, vue)
    - react는 전통적인 웹 프레임웍의 아킥텍쳐 MVC(Model View Controller), MVVM, MVW, ..중에서 View에만 집중하는 프레임웍이다. 화면처리속도를 높이는 전략
        - 화면상에 갱신되는 부분만 새로운 뷰를 만들어서 대체
        - 랜더링(화면갱신)
            - 절차(나중에 기록)
        - react + (나머지 기능:third part 프레임웍/라이브러리)=>node 생태계 지원
    - 프레임웍 : 해당 생태계의 룰에 맞춰서 개발
    - 라이브러리 : 일종의 특정 기능을 제공하는 모듈, 나의 룰대로 개발

# node 기반 개발

    - node 설치(완료)
        - $ node -v
            - v18.12.1
    - 프로젝트 생성 모듈 설치(오피셜)
        - 윈도우
            - $ npm install -g create-react-app
        - 맥
            - $ sudo npm install -g create-react-app
    - 패키지 관리자 추가 설치
        - node를 설치하면 npm이 자동 설치가 된다 => npm이 패키지 관리자 <-> (파이썬 pip)
        - 보안, 설치 속도 유리한 패키지 관리자 yarn이 있음,
        - $ (sudo) npm install -g yarn
        - $ yarn --version
            보안 이슈로 문제 발생한다면 아래처럼 처리
            --------------------------------------
            관리자 권한으로 powershell 실행후 아래 처리
            PS C:\windows\system32> Get-ExecutionPolicy
            Restricted
            PS C:\windows\system32> Set-ExecutionPolicy RemoteSigned

            실행 규칙 변경
            실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면
            about_Execution_Policies 도움말 항목(https://go.microsoft.com/fwlink/?LinkID=135170)에
            설명된 보안 위험에 노출될 수 있습니다. 실행 정책을 변경하시겠습니까?
            [Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)
            [?] 도움말(기본값은 "N"): y
            PS C:\windows\system32> Get-ExecutionPolicy
            RemoteSigned

    - 프로젝트 생성
        - $ create-react-app react-basic
        or
        - $ yarn create react-app react-hi

    - 필요 모듈 설치하기
        - $ cd react-hi
        - $ yarn install (or npm install)
            => node_modules가 설치된다

    - 프로젝트 구동
        - $ cd react-hi
        - $ yarn start

    - 확장 프로그램 설치
        - ESLint : 자바스크립트 문법 검사해주는 도구
            - 오류를 내서 진단, 체크, 수정
        - Reactjs code snippets : 리액트 함수/클래스 자동완성 제공
