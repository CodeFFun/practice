import {Link} from 'react'

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <h1>Welcome</h1>
        </div>
        <div className="pages">
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">Contact Us</a></li>
              
            </ul>
            <button className='btn'>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar