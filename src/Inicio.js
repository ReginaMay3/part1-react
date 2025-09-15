const Inicio = (props) => { //esto es un componente
    console.log(props)
  return <h1 style={{color: props.color}}>
    {props.message}
  </h1>
}

export default Inicio //esto es un modulo 