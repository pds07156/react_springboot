import React, { Component } from 'react';

class MyInput2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
    };
  }
  onSubmit = (e) => {
    // submit 이벤트 종료 처리
    e.preventDefault(); //  이벤트 무효화 처리
    console.log(this.state.age);
    // 입력창을 비운다
    this.setState({ age: '' });
  };
  onChange = (e) => {
    console.log(e.target.value);
    // 입력값 => 숫자가 아닌경우 빈값으로 대체 => 정규식
    // 숫자가 아닌 경우의 문자들은 모두 빈값으로 대체 -> 정규식 활용
    // 숫자가 아닌 모든 문자는 ''로 대체해라
    const v = e.target.value.replace(/[^0-9]/g, '');
    this.setState({ age: v });
  };
  render() {
    let { age } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="숫자만 입력"
            value={age}
            onChange={this.onChange}
          />
          <input type="submit" value="전송" />
        </form>
      </div>
    );
  }
}

export default MyInput2;
