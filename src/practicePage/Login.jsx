import {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function Login() {

    const {loginWithRedirect} = useAuth0()
    

    const[formData, setFormData] = useState({
        email:'',
        password:''
    })

    const[sucess, setSucess] = useState(false)
    // eslint-disable-next-line

   const  { email, password} = formData

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSucess(true)
    }
    
  return (
    <div className='main-body'>
        <div className="container">
            <p className='title'>Register</p>
            {sucess === true && <p className='sucess'>Sucess! Registration is complete</p>}
            <form className="content" onSubmit={onSubmit}>
                <input type="email" value={email} className='input' name='email' required placeholder='1234@something.com' onChange={onChange}/>
                <input type="password" value={password} className='input' name='password' required placeholder='Password' onChange={onChange}/>
                <button className='btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login