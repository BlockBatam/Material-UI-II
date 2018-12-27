import React from 'react';
import { Grid } from '@material-ui/core';
import Left from './Left'
import Right from './Right'


const styles = {
  Paper : { padding: 20, marginTop:100, marginBottom: 10, marginRight:50, marginLeft:100}
}
export default props =>
  <Grid container>
    <Grid item sm>
      <Left styles={styles}/>
    </Grid>
    <Grid item sm>
    <Right styles={styles}/>
    </Grid>
  </Grid>
        