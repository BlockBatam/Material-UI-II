import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link } from 'react-router-dom'



export default props => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#000'}}>
          <Toolbar>
              <Grid
                justify = "space-between"
                container 
                spacing = {24}
                >
                <Grid Item xs={1}>
                    <Typography variant="headline" color="inherit"
                    >
                        <b>Uber</b>  
                    </Typography>
                </Grid>

                <Grid Item xs={6}>
                    <div>
                        <Button color="inherit">Mengemudi</Button>
                        <Button color="inherit">Lakukan Perjalanan</Button>
                        <Button color="inherit">Uber for Business</Button>
                        <Button color="inherit">Lebih Lanjut</Button>
                    </div>
                </Grid>

                <Grid Item xs={2}>
                    <div>
                        <Router>
                        <h><Button color="inherit">Masuk</Button></h>
                        <ul>
                            <li><Link to="https://www.uber.com/id/id/"></Link></li>
                        </ul>
                        </Router>
                        <Button color="inherit">Daftar</Button>
                    </div>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    );
  }





