import "./assets/Fonts/fonts.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="text">
          <p id="title">Ana Beatriz</p>
          <p id="subtitle">Bem vindo ao meu humilde portfólio!</p>
          <button id="start">
            <p>Start</p>
            <img src="./icon-start.svg" />
          </button>
        </div>
        <div className="img">
        <img className="img3d" src="./pbc.png" />
        </div>
      </div>
    </>
  );
}

export default App;
