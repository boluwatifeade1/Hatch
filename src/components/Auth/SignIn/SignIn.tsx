import React, {useState} from 'react'
import classes from './SignIn.module.scss'

type Props = {
  user:string;
  password:string;
  handleSubmit:(event:string) => void;
  handleChange: (event:string) => void;
}

const SignIn: React.FC = (props) =>{
  const [user,setUser] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  
  const handleSubmit = (event:React.SyntheticEvent):void => {
    event.preventDefault()
    setUser('')
    setPassword('')
  }

  const HandleChange = (event:React.SyntheticEvent):void => {
    const { name , value } = event.target as HTMLInputElement;
    if(name === 'user'){
      setUser(value)
    }
    else{
      setPassword(value)
    }
  }

  return (
    <div className={classes.signIn}>
      <h3>Hello Admin</h3>
      <span>Default User and Password : admin</span>
      <form onSubmit = {handleSubmit}>
        <input 
          name = 'user' 
          type ='text' 
          value={user} 
          onChange={HandleChange}
          required
        />
        <label>username</label>
        <input 
          name = 'password' 
          type ='password' 
          value={password}
          onChange={HandleChange} 
          required
        />
        <label>password</label>
        <button className={classes.submit}>Login</button>
      </form>
    </div>
  )
}

export default SignIn;