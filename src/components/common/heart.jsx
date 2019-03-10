import React from 'react';

const LikeCopmonent = (props) =>{ 
        return ( <i 
                    className={getIconClass(props)}
                    onClick = {props.onClick}
                    style={{cursor:'pointer'}} 
                    >
                 </i>
                );
    }

    function getIconClass(props){
        let classes = 'fa fa-heart-o';
        if(props.liked) classes = 'fa fa-heart';
        return classes;
    }
 
export default LikeCopmonent;