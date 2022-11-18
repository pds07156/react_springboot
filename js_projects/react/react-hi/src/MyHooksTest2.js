import React, {
  useState, // 상태 변수 관리
  useEffect, // 함수형 컴포넌트의 라이프사이클중 일부 체크, 상태변화 감지
  useRef, // DOM의 특정 요소를 참조, 변수값을 저장, 값이 변경되도 화면이 갱신되지 않는용도
  useMemo, // 최적화 -> 상태변수
  useCallback, // 최적화 -> 함수
  useReducer, // 상태변수 각각에 대한 여러 상태를 부여할때 사용(고급, 복잡)
} from 'react';
import PropTypes from 'prop-types';
MyHooksTest.propTypes = {};

function MyHooksTest(props) {
  // 상태변수 ============================================================
  const [uid, setUid] = useState('');
  const [upw, setUpw] = useState('');
  const [number, setNumber] = useState(''); // 숫자 입력칸에 등록된 숫자값
  const [nums, setNums] = useState([]); // 입력한 숫자들을 들고 있을 배열
  // ====================================================================
  // 변수인데, 값이 변경되도 랜더링 하지 않는다, 내부연산용, 화면에 상관없는 용도로 변수 사용
  const level = useRef(0);
  // ====================================================================
  // 컴포넌트가 보이기 직전 한번 호출(필요한것들 초기화, 단 조건식 사용(실제는 2번호출))
  useEffect(() => {
    console.log('3', level.current);
    level.current++;
    // 네트워크를 통해서 데이터 가져오기
    /*
    if (uid === '') {
      console.log('3-1');
      setUid('guest');
    }*/
  }, []);
  // 특정 상태변수가 변경됬다는 최종 확인을 여기서 확인
  useEffect(() => {
    console.log('5', uid);
  }, [uid]);
  // 이벤트 처리 함수 ====================================================
  const onChangeUid = (e) => {
    setUid(e.target.value);
  };
  const onChangeUpw = (e) => {
    setUpw(e.target.value);
  };

  // 일반 연산 함수 =======================================================
  // 파라미터로 전달받은 배열 데이터를 총합/총개수 연산해서 리턴 => 순수(pure) 함수 형태
  const calAverage = (arr) => {
    // 맴버가 없다면 평균 0
    if (arr.length === 0) return 0;
    // 합산
    const sum = arr.reduce((a, b) => a + b);
    // 평균
    return sum / arr.length;
  };
  // ====================================================================
  // 화면이 갱신될때다마 연산이 매번 수행된다 => 연산에 관여된 변수들 중에 변화가 없다면 연산 미수행
  // useMemo
  // nums 상태변수가 변경되면 -> 이를감지 -> 콜백호출 -> 연산수행 -> 화면갱신
  const avg = useMemo(() => {
    return calAverage(nums);
  }, [nums]);
  // =====================================================================
  // onChangeNumber, onRegi => 경우에 따라서는 랜더링시 매번 생성할수도 있다 -> 최적화 필요
  const onChangeNumber = useCallback((e) => {
    // 숫자를 입력하면 number 상태 변수에 저장
    const v = e.target.value.replace(/[^0-9]/g, '');
    setNumber(v);
  }, []); // 컴포넌트가 최초 랜더링될때 함수를 생성(1회만 수행, 최초에 한번 만들고  끝)
  const onRegi = useCallback(
    (e) => {
      // number 상태변수가 가지고 있는 값을 nums에 추가한다
      // 숫자 모습의 문자열(input에서 입력받으면 다 문자열)을 실제 정수형으로 변환해야 한다
      const tmp = nums.concat(parseInt(number));
      // 상태변수에 설정 -> 등록 완료 -> 입력값 비움 -> number 값을 ''으로 수정
      setNums(tmp);
      setNumber(''); // 입력창 초기화
    },
    [number, nums]
  ); // number 혹은 nums가 변화될때만 함수 생성
  // JSX =================================================================
  return (
    <div>
      <input value={uid} onChange={onChangeUid} />
      <input value={upw} onChange={onChangeUpw} />
      <div>
        {uid} / {upw} / {level.current}
      </div>
      <div>
        숫자를 입력하면 등록 버튼을 누르면 입련된 숫자들의 평균을 동적 계산한다
        <input value={number} onChange={onChangeNumber} />
        <button onClick={onRegi}>숫자 등록</button>
        {/* 등록한 숫자를 모두 리스팅한다 */}
        <ul>
          {nums.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
        <p>
          <b>평균</b> {avg}
        </p>
      </div>
    </div>
  );
}

// 대표 모듈
export default MyHooksTest;
