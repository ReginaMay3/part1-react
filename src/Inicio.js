import './Inicio.css';

const Inicio = ({color, message, fontSize}) => { //esto es un componente
  return <h1 
    className={color.includes('grad-rose') ? 'gradient-text' : ''}
    style={{
      color: color.includes('grad-rose') ? undefined : color,
      fontSize: fontSize || '2em'
    }}
  >
    {message}
  </h1>
}

export default Inicio //esto es un modulo 