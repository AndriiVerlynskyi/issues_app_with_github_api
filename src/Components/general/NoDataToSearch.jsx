import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

const NoDataToSearch = () => {
  return (
    <>
        <Typography align="center" variant="h4">There is no data for serach request</Typography>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Button 
                variant='contained' 
                color='primary'
                sx={{marginTop:'40px'}}
            >
                <Link 
                    to="/meetPage" 
                    style={{color:"inherit", textDecoration:"none"}}
                >
                    SEARCH
                </Link>
            </Button>
        </Box>
    </>
  )
}

export default NoDataToSearch