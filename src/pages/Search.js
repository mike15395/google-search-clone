
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core';
import './Search.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import UseGoogleSearch from '../useGoogleSearch';
  //import { useStateValue } from '../StateProvider';
 //import { action } from '../reducer';
import { useDispatch } from 'react-redux';
import { addUsers } from '../features/UserSlice';

function Search({ hideButtons  }) {
  const [input, setInput] = useState('');
  
  const navigate = useNavigate();
  // const { data } = UseGoogleSearch(input);
   
  // console.log(data);
  
  const dispatch = useDispatch();
  
  
  // eslint-disable-next-line no-empty-pattern
  //  const [{}, dispatch] = useStateValue();
  const search = (e) => {
         e.preventDefault()
       navigate('/search-page');
     dispatch(addUsers({
       data :input
     }))
   
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  // const handleKey = (e) => {
    
  //   if (e.key === 'ENTER')
  //   {
  //       navigate('/search-page');
  //    dispatch(addUsers({
  //      data :input
  //    }))
  //     }
  
  // }
  return (
    <form className='search'>
      
          <div className='search-input'>
                <SearchIcon className='search-icon' />
                <input type='text' value={input} onChange={handleChange} />
                <MicIcon />
          </div>
        {!hideButtons && <div className='search-buttons'>
              <Button type='submit' onClick={search}> Google Search</Button>
              <Button>I'm Feeling Lucky</Button>

        </div>}
        
          
      </form>
  )
}
export default Search


