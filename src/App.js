import React, { Component } from 'react';
import './App.css';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import { getGenres} from './services/fakeGenreService';
import MoviesTable from './components/moviesTable';
import PaginationBar from './components/common/paginationBar';
import paginate from './utilities/paginate';
import GroupList from './components/common/groupList';
import PropTypes from 'prop-types';
import _ from 'lodash';

class App extends Component {
  state = { 
    movies:[],
    genres:[], 
    pageSize:4,
    currentPage:1,
    currentGenre:null,
    currentColumn:{column:'title', sortType:'asc'}
  }
  componentDidMount(){
    const genres = [{_id:'', name:'All Genres'}, ...getGenres()]
    this.setState({movies: getMovies(), genres})
  }

  handleDelete = id => {
    deleteMovie(id);
    this.setState({movies: getMovies()})
  }

  handleLike = (movie) => {
    let movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked
    this.setState({movies});
   }

  handlePageChange = page => {this.setState({currentPage: page});}

  handleGenreChange = genre => {this.setState({currentGenre: genre, currentPage: 1});}
  
  handleSort = currentColumn => {
      this.setState({currentColumn});
  }

  render() {
    const {length} = this.state.movies;
    const {currentPage, pageSize, movies, genres, currentGenre, currentColumn} = this.state;
    const filteredMovies = currentGenre && currentGenre._id ? movies.filter(m => m.genre._id === currentGenre._id): movies;
    const sortedMovies = _.orderBy(filteredMovies, [currentColumn.column], [currentColumn.sortType])
    const pageMovies = paginate(sortedMovies, currentPage, pageSize);
    return (
      <main className='container'>
        {length === 0 ? <p>There is no movie</p> : 
      <div className="row">
        <GroupList genreList={genres} currentGenre = {currentGenre} onGenreChange = {this.handleGenreChange} />
        <MoviesTable count = {filteredMovies.length} pageMovies = {pageMovies}
                     onLike = {this.handleLike} onDelete = {this.handleDelete}
                     onSort = {this.handleSort}
                     currentColumn = {currentColumn} />  
      </div>
        }
        <PaginationBar numberOfItems={filteredMovies.length} pageSize = {pageSize}
                       onPageChange = {this.handlePageChange} currentPage={currentPage}/>
      </main>
    );
  }
}
PaginationBar.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default App;
