import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import CheckBox from '@mui/material/Checkbox';

const FilterIssues = ({ filterIssues }) => {
    const [filterParams, setFilterParams] = useState({
        noneAssignee: false,
        id409579052: false,
        id1467678098: false
    })

    const handleChange = (e) => {
        setFilterParams({
            ...filterParams,
            [e.target.name]: e.target.checked
        })
    }

    useEffect( () => {
        filterIssues(filterParams)
    }, [filterParams])
  return (
    <Box sx={{width: '200px', position: 'fixed', left: '20px'}}>
        <FormControl>
            <FormLabel sx={{fontSize:'25px'}}>Asignee</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <CheckBox name="noneAssignee" onChange={handleChange}/>
                    }
                    label="none"
                />
            </FormGroup>
            <FormLabel sx={{fontSize:'25px'}}>Label id</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <CheckBox name="id409579052" onChange={handleChange}/>
                    }
                    label="409579052"
                />
                <FormControlLabel
                    control={
                        <CheckBox name="id1467678098" onChange={handleChange}/>
                    }
                    label="1467678098"
                />
            </FormGroup>
        </FormControl>
    </Box>
  )
}

export default FilterIssues