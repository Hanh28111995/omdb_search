import React, { useEffect } from 'react'
import MovieDetail from './MovieDetail'
import SearchInput from './SearchInput'
import './index.scss'
import ModelComponent from './ModelComponent'
import ChartD from './ChartD'

export default function SearchMovie(props) {

  useEffect(() => {
    document.title = props.title;
  });
  
  return (
    <div className='wrapper'>
      <div className='container py-5'>
        <div className='content'>
          <SearchInput />
          <MovieDetail />
          <ModelComponent />
          <ChartD/>
        </div>
      </div>
    </div>
  )
}
