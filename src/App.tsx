import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 0,
    image: "https://picsum.photos/200/300",
    name: "심청이",
    birthday: "710910",
    gender: "여자",
    job: "고등학생",
  },
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
];

function App() {
  return (
    <div>
      <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
