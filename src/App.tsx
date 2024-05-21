import { useEffect, useState } from 'react'

import './App.css'

interface LightProps{
  id: number;
  isActive: boolean;
  color: string

}

function App() {
  const [lights, setLights] = useState<LightProps[]>([
    {id: 1, isActive: false, color: 'red'},
    {id: 2, isActive: false, color: 'yellow'},
    {id: 3, isActive: false, color: 'green'},
  ])

  const handleLights = (id: number) =>{
    const copyLight = 
    lights.map((light) => {
      return light.id === id 
      ? {...light, isActive: true}
      : { ...light, isActive: false}
    })
    setLights(copyLight);
    
  }


  return (
    <>
    <div className='container'>
      {lights.map((light) => {
        return <div key={light.id} >
            <div className={`itemLight ${light.isActive ? light.color : ''}`}
            onClick={() => {handleLights(light.id)}}
            ></div>
        </div>
      })}
    </div>
   
    </>
  )
}

export default App
