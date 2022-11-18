/**
 * React 16.8부터 추가된 Hooks 기능 테스트
 * - 중요 기능들 위주로 체크
 * - 함수형 컴포넌트만 사용가능함
 */
import React, {
  useState, // 상태 변수 관리
  useEffect, // 함수형 컴포넌트의 라이프사이클중 일부 체크, 상태변화 감지
  useRef, // DOM의 특정 요소를 참조, 변수값을 저장, 값이 변경되도 화면이 갱신되지 않는용도
  useMemo, // 최적화 -> 상태변수
  useCallback, // 최적화 -> 함수
  useReducer, // 상태변수 각각에 대한 여러 상태를 부여할때 사용(고급, 복잡)
} from 'react';
// props의 타입을 강제할경우 제한할 경우 사용
import PropTypes from 'prop-types';
// props의 개별 속성들의 타입 지정
MyHooksTest.propTypes = {};

// 함수형 컴포넌트 (표준함수 스타일)
function MyHooksTest(props) {
  // uid
  const [uid, setUid] = useState('');
  // upw
  const [upw, setUpw] = useState('');
  // 라이프사이클 및 상태 변수 변화를 감지하여 뭔가 작업할대 필요한 훅 -> useEffect
  /* 아래 표현은 모든 상태변화에 일일이 반응한다 제거
    useEffect(() => {
      console.log('1');
      return () => {
        // 뒷정리 함수
        console.log('2');
      };
    });
    */
  // 컴포넌트가 생성될대 단한번 호출된다(사실 2번)
  // 컴포넌트가 화면에 보이기 직전 뭔가 할일이 있다면 여기서 수행 -> 네트워크(통신, 로컬디비처리, 데이터구성)
  // 단, 시간차를 두고 2회 호출되기 때문에 조건식 처리가 필요
  useEffect(() => {
    console.log('3');
    // return () => {
    //   // 뒷정리 함수
    //   console.log('4');
    // };
  }, []); // 컴포넌트가 구동되면 한번 호출된다(최초 진입시 1회의 느낌)
  useEffect(() => {
    // 상태변수가 변경되었다 -> 변경된후 값을 가지고 뭔가 연산한다면 여기서 진행
    console.log('5', uid);
    // 생략가능(필요한때만 사용)
    //return () => {
    // 뒷정리 함수 : 상태변수가 변경되었다, 변경되기전 값
    //  console.log('6', uid);
    //};
  }, [uid]); // 상태변수 uid를 감시하면서 변화되면 호출된다
  // 이벤트 처리 함수
  const onChangeUid = (e) => {
    setUid(e.target.value);
  };
  const onChangeUpw = (e) => {
    setUpw(e.target.value);
  };
  // JSX 리턴
  return (
    <div>
      <input value={uid} onChange={onChangeUid} />
      <input value={upw} onChange={onChangeUpw} />
      <div>
        {uid} / {upw}
      </div>
    </div>
  );
}

// 대표 모듈
export default MyHooksTest;
