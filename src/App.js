import './App.css';
import Inicio from './Inicio';
import Page from './Page';

function App() {
  return (
    <>
      <div className="App">
        <Inicio color='var(--grad-rose)' message='Regina May'/>
        <br/>
        <Inicio fontSize='25px' color='var(--grad-rose)' message='Junior Front-end Developer'/>
        <br/>
        <Page />  
      </div>
      <></>
    </>
  );
}

export default App;
