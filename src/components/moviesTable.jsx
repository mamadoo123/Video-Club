import React, {Component} from 'react';
import LikeComponent from './common/heart';

class MoviesTable extends Component {

    raiseColumnSort = column => {
        const currentColumn = this.props.currentColumn;
    if(column === currentColumn.column)
      {
        currentColumn.sortType = (currentColumn.sortType === 'asc')? 'desc' : 'asc';
      }else{
        currentColumn.sortType = 'asc';
        currentColumn.column = column;
      }
    this.props.onSort(currentColumn);
    }

    render() {
        const {count, pageMovies, onLike, onDelete} = this.props;
        return(
            <div className="col-9">
            <h4>Showing {count} movies in the page </h4>
            <table className = "table table-hover">
              <thead>
                <tr>
                  <th onClick={() => this.raiseColumnSort('title')}>Title</th>
                  <th onClick={() => this.raiseColumnSort('genre.name')}>Genre</th>
                  <th onClick={() => this.raiseColumnSort('numberInStock')}>Stoke</th>
                  <th onClick={() => this.raiseColumnSort('dailyRentalRate')}>Rate</th>
                  <th> </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
              {pageMovies.map( movie => <tr key = {movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><LikeComponent liked={movie.liked} onClick={()=> onLike(movie)}/></td>
                <td><button className="btn btn-danger" onClick={() => onDelete(movie._id)}>Delete</button></td>
              </tr>)}
              </tbody>
            </table>
            </div>
        ); 
    }
}
export default MoviesTable;