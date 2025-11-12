const Inicio = ({message, fontSize}) => { //esto es un componente
  return <h1 class="bg-gradient-to-tr from-pink-700 to-pink-300 text-transparent bg-clip-text" style={{fontSize: fontSize}}>
    {message}
  </h1>
}

export default Inicio //esto es un modulo 