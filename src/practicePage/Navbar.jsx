import {useState} from 'react'

function Navbar() {

  const[clicked, setClickeed] = useState(false)
  

  const onClick = () => {
    const hidden = document.querySelector('.pages')
    setClickeed(!clicked)
    if(clicked) {
      hidden.classList.remove('hidden')
    } else {
      hidden.classList.add('hidden')
    }
  }
  
  
  return (
    <nav>
        <div className="logo">
            <h1>Welcome</h1>
            {/* <a href="#" className='hamburger' onClick={onClick}>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </a> */}
        </div>

        <div className="pages hidden">
            {/* <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">Contact Us</a></li>
              
            </ul> */}
            <button className='btn'>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar