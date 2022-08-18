import {useState} from 'react'

function BackgroundChanger() {

    const [addCounter, setAddCounter] = useState(0)
    const[ColdRed, setCold] = useState(200)
    const[HotBlue, setHot] = useState(60)

    const hot = { 
         r: 251,
         g : 183,
         b : HotBlue
        
    }
    const norm = { 
         r: 255,
         g : 253,
         b : 208
        
    }
    const cold = { 
         r: ColdRed,
         g : 241,
         b : 253
        
    }


    const add = (e) => {
        e.preventDefault()
        setAddCounter(addCounter + 1)
        addCounter > 35 && setHot(HotBlue - 3)
    }
    const subtract =(e) => {
        e.preventDefault()
        setAddCounter(addCounter - 1)
        addCounter < 0 && setCold(ColdRed - 10)
    }
  return (
    <div>
        <div className="container"
         style={addCounter <= 0 ? 
         {background:`rgb(${cold.r},${cold.g},${cold.b})`} 
         : addCounter >= 35 ? {background:`rgb(${hot.r},${hot.g},${hot.b})`} :
           {background:`rgb(${norm.r},${norm.g},${norm.b})`} 
            }>
            <div className="main-body">
                <div className="input-number">
                    {addCounter} degree celsius
                </div>
                <div className="btn-holder">
                    <button className='btn' onClick={add}>Increase</button>
                    <button className='btn' onClick={subtract}>Decrease</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackgroundChanger