import React from 'react';

const GroupList = (props) => {
    const {genreList, currentGenre, textProp, keyProp, onGenreChange} = props;

    return(
        <ul className="list-group col-2">
            {genreList.map( genre => (
                <li 
                    className={genre === currentGenre ? "list-group-item active": "list-group-item"}
                    style={{cursor:'pointer'}}
                    key={genre[keyProp]}
                    onClick = {() => onGenreChange(genre)}>
                {genre[textProp]}
                </li>
            ))}
        </ul>
    );
}
GroupList.defaultProps = {
    textProp:'name',
    keyProp:'_id'
};

export default GroupList;