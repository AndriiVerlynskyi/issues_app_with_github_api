import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


const SortingIssues = ({ setSortedIssues }) => {

    const [sortBy, setSortBy] = useState('newest');


    // On change of the sortBy constant I'm setting the sorted array to a parent component 
    //throughout callback
    useEffect( () => {
        setSortedIssues(sortBy)
    }, [sortBy])

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    
  return (
    <Box sx={{display: 'flex', justifyContent:'flex-end', marginRight: '60px'}}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={sortBy}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={'newest'}>newest</MenuItem>
                <MenuItem value={'oldest'}>oldest</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SortingIssues