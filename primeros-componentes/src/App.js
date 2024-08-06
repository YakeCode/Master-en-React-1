import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MiComponente';
import { SegundoComponente } from './components/SegundoComponente';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bienvenido a mi primer componente
        </p>

        <MyComponent/>
        <SegundoComponente/>

      </header>
      
    </div>
  );
}

export default App;
