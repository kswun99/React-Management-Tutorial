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
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
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
