import profileImg from "./img/profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My React APP</h1>
      <h2>Author : Rizky Saparuly</h2>
      <img src={profileImg} alt="Profile-img" />
    </div>
  );
}

export default App;
