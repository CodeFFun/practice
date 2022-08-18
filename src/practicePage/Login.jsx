import {useState} from 'react'

function Login() {

    const[formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    const[sucess, setSucess] = useState(false)
    // eslint-disable-next-line

   const  {firstName, lastName, email, password} = formData

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
                <input type="text" value={firstName} className='input' name='firstName' required placeholder='First Name' onChange={onChange}/>
                <input type="text" value={lastName} className='input' name='lastName' required placeholder='Last Name' onChange={onChange}/>
                <input type="email" value={email} className='input' name='email' required placeholder='1234@something.com' onChange={onChange}/>
                <input type="password" value={password} className='input' name='password' required placeholder='Password' onChange={onChange}/>
                <button className='btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login