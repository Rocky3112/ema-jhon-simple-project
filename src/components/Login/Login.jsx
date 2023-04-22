import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError]= useState('')
    const [show, setShow] =useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const from = location.state?.from?.pathname || '/';

 const {user, signIn} = useContext(AuthContext);

    const handleSignIn =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;

        console.log(email, password);
         
        // if(!user){
        //     setError('User Not Found');
        //     return;
        // }
        

        signIn(email, password)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);
            form.reset();
            setError('')
            navigate(from, {replace:true} )
            
        })
        .catch( error => {
            console.log(error);
            setError(error.message)
            
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} >
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ? "text":"password"} placeholder="password" name='password' className="input input-bordered" required/>
          <p onClick={()=>setShow(!show)}><small>
            {show ? <span>Hide Password</span>:<span>Show Password</span>}
            </small></p>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login"  className="btn btn-primary" />
        </div>
        <p><small>New to Ema-john? <Link to="/signup">Create an account</Link></small></p>
        <p className=' text-red-500'>{error}</p>
      </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;