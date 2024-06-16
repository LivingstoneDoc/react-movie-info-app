function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>
          Find Movies, Add to Favourites, and more...
        </h1>
      </header>
      <div className='searchInput'>
        <img src='./search-icon.png' alt='search'/>
        <input type='text' placeholder='Search some movie'/>
      </div>
      <ul className='menuList'>
        <li className='activeMenuItem'>
          Home
        </li>
        <li>
          Favourites
        </li>
      </ul>
      <div className='movieList'>
        <div className='movieItem'>
          <img src='./movie1.png' alt='movie'/>
          <div className='movieName'>Soul<span className='movieYear'>(2020)</span></div>
        </div>
        <div className='movieItem'>
          <img src='./movie2.png' alt='movie'/>
          <div className='movieName'>Knives Out<span className='movieYear'>(2019)</span></div>
        </div>
        <div className='movieItem'>
          <img src='./movie6.png' alt='movie'/>
          <div className='movieName'>Onward<span className='movieYear'>(2020)</span></div>
        </div>
        <div className='movieItem'>
          <img src='./movie5.png' alt='movie'/>
          <div className='movieName'>Mulan<span className='movieYear'>(2020)</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
