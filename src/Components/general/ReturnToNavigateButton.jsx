import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button'

const ReturnToNavigateButton = ({ linkTo, title, args }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkTo)
  }

  return (
    <Button {...args} onClick={handleClick} variant='contained' sx={{margin:'10px 20px'}}>{title}</Button>
  )
}

export default ReturnToNavigateButton