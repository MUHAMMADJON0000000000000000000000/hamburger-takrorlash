import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const people = [
    { id: 1, name: "Dilshod Karimov", type: "teacher" },
    { id: 2, name: "Malika Usmonova", type: "teacher" },
    { id: 3, name: "Jasur Rahimov", type: "teacher" },
    { id: 4, name: "Sevara Tursunova", type: "teacher" },
    { id: 5, name: "Akmal Xudoyberdiyev", type: "teacher" },
    { id: 6, name: "Nigora Ismoilova", type: "teacher" },
    { id: 7, name: "Farrux Alimuhamedov", type: "teacher" },
    { id: 8, name: "Madina Qosimova", type: "teacher" },
    { id: 9, name: "Sherzod Nabiyev", type: "teacher" },
    { id: 10, name: "Gulnoza Ergasheva", type: "teacher" },

    { id: 11, name: "Azizbek Jo‘rayev", type: "student" },
    { id: 12, name: "Shahzoda Anvarova", type: "student" },
    { id: 13, name: "Bekzod Alimuhamedov", type: "student" },
    { id: 14, name: "Mohira Xasanova", type: "student" },
    { id: 15, name: "Sardor Yo‘ldoshev", type: "student" },
    { id: 16, name: "Zilola Qodirova", type: "student" },
    { id: 17, name: "Javohir Normatov", type: "student" },
    { id: 18, name: "Dilnoza Shukurova", type: "student" },
    { id: 19, name: "Otabek Sayfullayev", type: "student" },
    { id: 20, name: "Rayhona Murodova", type: "student" },

    { id: 21, name: "Bahodir Sodiqov", type: "staff" },
    { id: 22, name: "Lola Matkarimova", type: "staff" },
    { id: 23, name: "Rustam Teshayev", type: "staff" },
    { id: 24, name: "Saida To‘xtayeva", type: "staff" },
    { id: 25, name: "Kamoliddin Ergashev", type: "staff" },
    { id: 26, name: "Mavluda Hakimova", type: "staff" },
    { id: 27, name: "Zafar Abdullayev", type: "staff" },
    { id: 28, name: "Gulbahor Rasulova", type: "staff" },
    { id: 29, name: "Anvarbek Xolmatov", type: "staff" },
    { id: 30, name: "Dilorom Yusupova", type: "staff" },
  ];
  const [selectedType, setSelectedType] = useState("all");
  const filteredPeople = people.filter(
    (person) => selectedType === "all" || person.type === selectedType,
  );
  return (
    <div>
      <h2>Filter by Type</h2>

      <button onClick={() => setSelectedType("all")}>All</button>
      <button onClick={() => setSelectedType("teacher")}>Teachers</button>
      <button onClick={() => setSelectedType("student")}>Students</button>
      <button onClick={() => setSelectedType("staff")}>Staff</button>

      <ul>
        {filteredPeople.map((person) => (
          <li key={person.id}>
            {person.name} - ({person.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
