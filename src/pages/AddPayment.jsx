import { Component } from "react";

const handleKeyup = (e) => {
  const {value, maxLength, nextElementSibling} = e.target;
  console.log(e);
  // 숫자 유효성 검사
  if (!isFinite(value)) {
    alert('카드번호는 숫자만 입력할 수 있습니다.');
    e.target.value = '';
    return;
  }

  // 자동 포커스 넘김
  if (value.length >= maxLength && nextElementSibling) {
    nextElementSibling.focus();
  }
}

function InputCardNumber() {
  return (
    <div className="w-full">
      <p className="text-ms">카드 번호</p>
      <form className="w-full bg-gray-100 text-xl p-4 flex flex-row gap-2">
        <input type="text" maxLength="4" onKeyUp={handleKeyup} className="w-16 text-center bg-transparent" />-
        <input type="text" maxLength="4" onKeyUp={handleKeyup} className="w-16 text-center bg-transparent"/>-
        <input type="password" maxLength="4" onKeyUp={handleKeyup} className="w-16 text-center bg-transparent"/>-
        <input type="password" maxLength="4" onKeyUp={handleKeyup} className="w-16 text-center bg-transparent"/>
      </form>
    <div></div>
    </div>
  )
}

function InputCardDate() {
  const handleMonth = () => {
  }

  return (
    <div className="w-full">
      <p className="text-ms">만료일</p>
      <form className="w-full bg-gray-100 text-xl p-4 flex flex-row gap-2">
        <input type="text" placeholder="MM" maxLength="2" onKeyup={handleKeyup} className="w-10 text-center" />/
        <input type="text" placeholder="YY" maxLength="2" onKeyUp={handleKeyup} className="w-10 text-center" />
      </form>
    </div>
  )
}

class AddPayment extends Component {
  render() {
    return (
    <>
    <InputCardNumber/>
    <InputCardDate/>
    </>
    )
  }
}

export default AddPayment;