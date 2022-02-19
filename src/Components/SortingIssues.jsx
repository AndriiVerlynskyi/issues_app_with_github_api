import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


const SortingIssues = ({ issuesList, setSortedIssues }) => {

    const [sortedIssuesList, setSortedIssuesList] = useState([])

    const [sortBy, setSortBy] = useState('newest');

    //function for sorting by date

    const sortByDate = () => {
        setSortedIssuesList(
            issuesList.slice().sort( (a, b) => {
                a = {...a, created_at: new Date(a.created_at.split('', 10).join(''))}
                b = {...b, created_at: new Date(b.created_at.split('', 10).join(''))}
                if(sortBy === 'newest'){
                    return b.created_at - a.created_at
                } else {
                    return a.created_at - b.created_at
                }
            })
        )
    }

    // On change of the sortBy constant I'm setting the sorted array after function invoking 
    useEffect( () => {
        sortByDate();
        setSortedIssues(sortedIssuesList)
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