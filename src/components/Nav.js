import React from 'react';
// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import  "../css/Nav.css";



const Nav = () => {
    // Material-UI
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));

      const classes = useStyles();


    return(
        <nav>
            <div className="left-nav">
            <h1>
                <a href="#">Games-Overflow</a>
            </h1>
            <ul>
                <li>Page 2</li>
                <li>Faq</li>
                <li>Help</li>
            </ul>
            </div>
            <div className="right-nav">
            {/* <input type="text" placeholder="Search.."></input> */}

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search" />
      
                </form>
                {/* <Button variant="contained">Log-In</Button> */}
                <button>Log-In</button>
            </div>
            
        </nav>
    )
}

export default Nav;