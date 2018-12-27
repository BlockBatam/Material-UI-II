import React from 'react'
import { Paper, Typography, Grid, Button } from '@material-ui/core';


const style = {
    Paper : { padding: '60%', marginTop:'10px', marginBottom: 10, marginRight:'10px'
    }
  }
export default ({ styles }) =>

<Paper style={styles.paper}>
    <Typography variant="h1">
    <b>Lakukan perjalanan sesuai keingininan anda</b>
    </Typography>
    <Grid container>
    <Grid item sm>
        <Paper Style={style.Paper}/>
        <Typography variant="h4">
              <b>Mitra Mengemudi</b>
            </Typography>
                <Typography component="p">
                Mengemudilah kapan pun Anda mau. Temukan kesempatan di sekitar Anda.
                </Typography>
                <Typography component="p">
                <u>Pelajari lebih lanjut tentang mengemudi</u>
                </Typography>
            <Button variant="raised" color="primary" size="small" >
              Daftar menjadi mitra pengemudi 
             </Button>
             
        <Paper/>
    </Grid>
    <Grid item sm>
        <Paper Style={style.Paper}/>
            <Typography variant="h4">
              <b>Penumpang</b>
            </Typography>
            <Typography component="p">
            Sentuh ponsel anda. Capai tujuan anda.
            </Typography>
            <Typography component="p">
            <u>Pelajari Lebih Lanjut</u>
            </Typography>
            <Button variant="raised" size="small" color="primary" component='p' >
            Daftar Penumpang
            </Button>   
        <Paper/>
    </Grid>
  </Grid>
 </Paper>