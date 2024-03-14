import { useState, useEffect } from 'react'
import './Login.css'
import {easyFetch} from 'react'

// Podríamos obtener el HOSTNAME 

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   


    validateForm = () => {
        if (data.success) { 
            navegador
        } else {
            alert('The credentials are incorrect')
        }
    }

    handleSubmit = (event) => {
        (e).preventDefault()
    }


    return (
        <>
            <div className="login_container">
                <div className="login_block">
                    <h2 className="login_h2">Log In to your account</h2>
                    <form action="" className="login_credentials">
                        <h3 className="login_h3_email">E-mail</h3>
                        <label>
                            E-mail
                        <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <h3 className="login_h3_password">Password</h3>
                        <label>
                        <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                         {/* <p><button onClick={}>Sign Up </button>for fresh news.</p> */}
                         <label htmlFor="accept terms"></label>
                        <input type="checkbox" name="" id="" />
                        <input type="submit" value="" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
