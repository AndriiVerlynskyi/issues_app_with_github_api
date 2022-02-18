import React, { useState, useRef } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const FindForm = () => {

  const formFields = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <Grid container sx={{display:"flex", justifyContent:'center'}}>
      <Grid item >
        <Card sx={{marginTop:"20px"}}>
          <CardHeader  title="Issues"/>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                margin='normal'
                id="username"
                label="username"
                sx={{display:'block'}}
              />
              <TextField
                margin='normal'
                id="repos"
                label="repos"
                sx={{display:'block'}}
              />
              <Button margin='normal' variant='outlined' type='submit'>
                Get issues
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FindForm