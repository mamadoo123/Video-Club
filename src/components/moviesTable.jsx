import React, {Component} from 'react';
import LikeComponent from './common/heart';
import TableHead from './common/tableHeader';

class MoviesTable extends Component {

   columns = [
      {key:'title', name:'title', label:'Title'},
      {key:'genre.name', name:'genre.name', label:'Genre'},
      {key:'numberInStock', name:'numberInStock', label:'Stoke'},
      {key:'dailyRentalRate', name:'dailyRentalRate', label:'Rate'},
      {key:'like'},
      {key:'delete'}
    ]
    render() {
        const {count, pageMovies, currentColumn, onLike, onDelete, onSort} = this.props;
        return(
            <div className="col-9">
            <h4>Showing {count} movies in the page </h4>
            <table className = "table table-hover">
              <TableHead 
                columns = {this.columns}
                onSort={onSort}
                currentColumn={currentColumn}
              />
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