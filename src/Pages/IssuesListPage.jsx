import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssuesList from '../Components/IssuesList';
import FilterIssues from '../Components/FilterIssues';
import SortingIssues from '../Components/SortingIssues';

import Box from '@mui/material/Box';

const IssuesListPage = ({ requestData }) => {

  const [issuesList, setIssuesList] = useState([]);

  const [filteredIssuesList, setFilteredIssuesList] = useState([]);


  //function for filtering issues by params
  const filterIssues = (filterParams) => {
    setFilteredIssuesList(issuesList);
    if (filterParams.noneAssignee === true){
      setFilteredIssuesList(filteredIssuesList.filter( issue => issue.assignee === null));
    } 
    if (filterParams.id1467678098 === true){
      setFilteredIssuesList(
        filteredIssuesList.filter( issue => {
        let leaveInArray = false;
        if (!!issue.labels){
          issue.labels.forEach( label => {
            leaveInArray = label.id === 1467678098
          })
          return leaveInArray
        }
      }))
    }
    if (filterParams.id409579052 === true){
      setFilteredIssuesList(
        filteredIssuesList.filter( issue => {
        let leaveInArray = false;
        if (!!issue.labels){
          issue.labels.forEach( label => {
            leaveInArray = label.id === 409579052
          })
          return leaveInArray
        }
      }))
    }
  }

    //function for sorting by date. It could be easily isolated if there is a state manager
  const sortByDate = (sortBy) => {
    setFilteredIssuesList(
      filteredIssuesList.slice().sort( (a, b) => {
          a = {...a, created_at: new Date(a.created_at.split('', 10).join(''))}
          b = {...b, created_at: new Date(b.created_at.split('', 10).join(''))}
          if(sortBy === 'newest'){
              return a.created_at - b.created_at
          } else {
              return b.created_at - a.created_at
          }
      })
    )
  }

  //I create a callback function for SortingIssuesPage, because of lack of state manager, 
  // so I can set sorted issues in the state of the IssuesListPage component

  const setSortedIssues = (sortBy) => {
    sortByDate(sortBy)
  };

  useEffect(  () => {
      axios(`https://api.github.com/repos/${requestData.username}/${requestData.repos}/issues`)
        .then( (resp) => {
          setIssuesList(resp.data);
          setFilteredIssuesList(resp.data)
        })
  }, [])

  return (
    <Box>
      <SortingIssues setSortedIssues={setSortedIssues}/>
      <FilterIssues filterIssues={filterIssues}/>    
      <Box>                 
        <IssuesList issuesList={filteredIssuesList}/>
      </Box>
    </Box>
  )
}

export default IssuesListPage