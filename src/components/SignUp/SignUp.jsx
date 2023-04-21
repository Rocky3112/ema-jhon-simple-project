import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError]= useState('')

const handleSignUp =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        const confirm =form.confirm.value;

        console.log(email, password, confirm);

        if(password !== confirm){
            setError('Your password did not match')
            return;
        }
        if(password.length <6){
            setError('password must be 6 characters or longer')

            return;
        }
        form.reset()
        setError()

    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Sign UP now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSignUp}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" name='confirm' placeholder="Confirm Password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Sign Up"  className="btn btn-primary" />
        </div>
        <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
        <p className='text-lg text-red-500'>{error}</p>
      </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;