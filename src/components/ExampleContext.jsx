import React from "react";

const MyContext = React.createContext();

export default function App() {
  return (
    <MyContext.Provider value="하이^^">
      <Use />
    </MyContext.Provider>
  )
}

function Use() {
  return (
    <MyContext.Consumer>
      {value => <p>{value}</p>}
    </MyContext.Consumer>
  )
}