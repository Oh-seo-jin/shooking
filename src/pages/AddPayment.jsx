import { Component } from "react";

function InputCardNumber() {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatCardNumber(inputValue);
  }
  
  return (
    <div className="w-full">
      <p className="text-ms">카드 번호</p>
      <input type="text" onChange={handleChange} placeholder="0000 - 0000 - 0000 - 0000" className="w-full bg-gray-100 text-xl p-4" />
    <div></div>
    </div>
  )
}

class AddPayment extends Component {
  render() {
    return (
    <>
    <InputCardNumber/>
    </>
    )
  }
}

export default AddPayment;