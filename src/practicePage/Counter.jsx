import { useState} from 'react'


function Counter() {
    const [addCounter, setCounter] = useState(1)

    const onClick = (e) => {
        e.preventDefault()
        setCounter(addCounter + 1)
    }

  return (
    <div>
       <div>{addCounter}</div>
        <button  onClick={onClick}>Add</button>
    </div>
  )
}

export default Counter