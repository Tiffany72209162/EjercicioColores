import { useState } from 'react'

const Home = () => {

  const [show, setShow ] = useState(0)
  const handleshow = (num) => {
    setShow(num)
  }

  return (
    <div >
      <h1>Haga click a los botones para mostrar el cuadrado</h1>
      <button onClick={()=>handleshow(1)}>rojo</button>
      <button onClick={()=>handleshow(2)}>azul</button>
      <button onClick={()=>handleshow(3)}>amarillo</button>
      <button onClick={()=>handleshow(4)}>borrar</button>
      <br/><br/>
      {
        show ===1 && (
          <div id="red"></div>
        )
      }
      {
        show ===2 && (
          <div id="blue"></div>
        )
      }
            {
        show ===3 && (
          <div id="yellow"></div>
        )
      }

    </div>
  )
}

export default Home



