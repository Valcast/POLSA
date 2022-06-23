import './Search.css'

const Search = () => {
  return (
    <div className='Search'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='22.245'
        height='22.166'
        viewBox='0 0 22.245 22.166'>
        <path
          id='Icon_ionic-ios-search'
          data-name='Icon ionic-ios-search'
          d='M25.412,24.127l-5.885-5.94a8.387,8.387,0,1,0-1.273,1.289l5.847,5.9a.906.906,0,0,0,1.278.033A.912.912,0,0,0,25.412,24.127ZM12.937,19.548a6.623,6.623,0,1,1,4.684-1.94A6.582,6.582,0,0,1,12.937,19.548Z'
          transform='translate(-4 -3.993)'
          fill='#fff'
          stroke='#fff'
          strokeWidth='1'
        />
      </svg>
      <input className='searchInput' placeholder='Search...'></input>
    </div>
  )
}

export default Search
