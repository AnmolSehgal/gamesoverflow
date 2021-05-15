import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{

    const paperStyle={padding :'0',margin:'0px',height:400,width:400, marginLeft:"250px",marginTop:"80px",backgroundColor: 'transparent'}
    const avatarStyle={backgroundColor:'black',padding:'10px',marginTop:"10px"}
    const btnstyle={}
    return(
        <div>
        <Grid > 
            <Paper elevation={80} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <br></br><br></br>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 <br></br><br></br>
                <Button type='submit' color='' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <br></br><br></br>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                <br></br><br></br>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}

export default Login