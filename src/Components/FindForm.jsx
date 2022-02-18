import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const FindForm = ({setDataForRequest}) => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    setDataForRequest(data.username, data.repos);
    navigate('/issuesList')
  }

  return (
    <Grid container sx={{display:"flex", justifyContent:'center'}}>
      <Grid item >
        <Card sx={{marginTop:"20px"}}>
          <CardHeader  title="Issues"/>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin='normal'
                id="username"
                label="username"
                sx={{display:'block'}}
                {...register('username', { required: true })}
              />
              <TextField
                margin='normal'
                id="repos"
                label="repos"
                sx={{display:'block'}}
                {...register('repos', { required: true })}
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