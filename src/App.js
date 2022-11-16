import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Jogos from './telas/jogos';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h3>BINGO DO MEDO</h3>
        </header>
        <Routes className="routes">
          <Route path='/' element={<Jogos />}></Route>
          <Route path='/jogo' element={<Jogos />}></Route>
          <Route path='/curta'></Route>
        </Routes>
        <footer>por raul396</footer>
      </div>
    </Router>
  );
}

export default App;
