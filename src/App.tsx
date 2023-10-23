import "./App.css";
import "./assets/Fonts/fonts.css";
import { NavLink } from 'react-router-dom';
// import { ToggleColorMode } from './components/DarkMode'

export function App() {
  return (
    <>
      <div className="containerApp">
        <div className="text">
          <p id="title">Ana Beatriz</p>
          <p id="subtitle">Bem vindo ao meu humilde portfólio!</p>
          <NavLink to='/about'>
          <button id="start">
            <p>Start</p>
            <img src="./icon-start.svg" />
          </button>
          </NavLink>
        </div>
        <div className="img">
        {/* <ToggleColorMode /> */}
        <img className="img3d" src="./pbc1.png" />
        </div>
      </div>
    </>
  );
}

