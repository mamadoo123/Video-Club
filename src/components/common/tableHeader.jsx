import React, {Component} from 'react';
// Inputs need to pass via props from any table component:
//   1- columns: array  
//   2- currentColumn: object
//   3- onSort: function

class TableHead extends Component {

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
        return ( 
            <thead>
                <tr>
                {this.props.columns.map( col => (
                    <th key={col.key}
                        onClick={() => this.raiseColumnSort(col.name)}>
                    {col.label}</th>)
                )
                }
                </tr>
            </thead>
         );
    }
}
 
export default TableHead;