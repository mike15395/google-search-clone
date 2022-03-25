import React from 'react'
import { Link} from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaceIcon from '@material-ui/icons/Place';
import PhotoIcon from '@material-ui/icons/Photo';
import NoteIcon from '@material-ui/icons/Note';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './SearchPage.css'
import UseGoogleSearch from '../useGoogleSearch';
//import { useState } from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/UserSlice';

function SearchPage() {
    
    const x = useSelector(selectUser);
    console.log(x);
  const {data} = UseGoogleSearch(x);
  console.log(data);
    
    //console.log(input);
    //console.log(data);
    return (
      <div className='search-page'>
        <div className='search-page-header'>
          <Link to='/'>
             <img className='img-google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png " alt="google-logo"></img>
          </Link>
              <div className='search-page-header-body'>
                    <Search hideButtons/>
                  <div className='search-page-options'>
                      <div className='search-page-option-left'>
                          <div className='search-page-option'>
                              <SearchIcon />
                              <Link to='/all'>All</Link>
                          </div>

                          <div className='search-page-option'>
                              <NoteIcon />
                              <Link to='/all'>News</Link>
                          </div>

                          <div className='search-page-option'>
                              <PhotoIcon />
                              <Link to='/all'>Images</Link>
                          </div>

                          <div className='search-page-option'>
                              <LocalOfferIcon />
                              <Link to='/all'>Shopping</Link>
                          </div>

                          <div className='search-page-option'>
                              < PlaceIcon/>
                              <Link to='/all'>Maps</Link>
                          </div>

                          <div className='search-page-option'>
                              <MoreVertIcon/>
                              <Link to='/all'>More</Link>
                          </div>

                          
                      </div>
                      <div className='search-page-option-right'>
                          <p>Settings</p>
                          <p>Tools</p>
                      </div>
                  </div>
             </div>
            </div>

              {data?.items.map((item,index) => (
                <div className='search-page-results' key={index}>
                    {/* <p>
                        About 200 results shown in 0.49secs for hello
                    </p> */}
                    <div className='search-page-result'>
                        <a href={item.link} target='_blank' rel="noreferrer">
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage-resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}
                            {item.displayLink}  
                        </a>
                        <a href={item.link} target='_blank' rel="noreferrer">
                            <h2>{ item.title}</h2>
                        </a>
                        <p>
                            {item.snippet}
                    </p>
                        <hr/>

                    </div>
                 </div>
            ))}  
            

            
    </div>
  )
}

export default SearchPage