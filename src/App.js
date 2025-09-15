import './App.css';
import Inicio from './Inicio';

const Descripcion = () => { //esto es un componente
  return <p>El resultado es: </p>
}

function App() {
  const mensaje = 'Holis desde variable'
  const a = 5
  const b = 123
  return (
    <div className="App">
      <Inicio color='blue' message='Bienvenid@ a mi primera App'/>
      <Inicio color='green' message='Estoy haciendo un curso de React'/>
      <strong>Trabajando en ello...</strong>
      <Descripcion />  {a + b}
      <br />
      {mensaje + ' y evaluar en JSX'} {/*las llaves o curly braces se usan para evaluar tus variables, estas pueden ser strings, numeros, listas, elementos pero NO se pueden los objetos */}
    </div>
  );
}

export default App;
