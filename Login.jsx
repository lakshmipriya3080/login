import React, { useState } from 'react'
import './login.css';
import {  Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, ThemeProvider, createTheme } from '@mui/material';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';


const Login = () => {
    const [id,setId]=useState('')
    const [pwd,setPwd]=useState('')
    const [error,setError]=useState(false)
    
    
     const defaultTheme = createTheme();

     
   
    // const navigate=useNavigate()

    const readhrid =(event) =>{
        event.preventDefault();
        setId(event.target.value)
        console.log(event.target.value);
    }

    const readpassword =(event) =>{
        event.preventDefault();
        setPwd(event.target.value)
        console.log(event.target.value);
    }

    const savedata =()=> {
      
        

        if(id.trim() ==='')
        {
            setError(true);
            return

        }

        if(pwd.length<8)
        {
            setError(true);
            return;

        }
       
        

       
    }
  return (
    <div>
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
          
         <p className='bb'> <AdminPanelSettingsSharpIcon color='primary' fontSize='large'/></p>
          
          
      <h1 className='cc'>ADMIN LOGIN</h1>
       <TextField margin="normal" required fullWidth id="HR ID" label="HR ID" name="id" 
                autoComplete="id" autoFocus onChange={readhrid}/><br/>

       <p className='r'>{error && '*ID is requied'}</p>

      <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" 
                autoComplete="current-password" onChange={readpassword}/><br/>



      <p className='r'>{error && '*Password must be atleast 8 characters'}</p>

      <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />          

                
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}  onClick={savedata}>LOG IN</Button> 
      {/* <p className='r'>{error && '* ID and Password is required'}</p> */}
    
      </Container> 
      </ThemeProvider>
     
    </div>
  )
}

export default Login