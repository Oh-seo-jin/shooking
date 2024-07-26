import { Component } from "react";

class NameForm extends Component {
  /* constructor : 변수 선언 */
  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* 함수 정의 */
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: '+this.state.value);
    event.preventDefault(); // 이벤트의 기본 동작 막음(새로고침, 링크이동)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          이름:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm;