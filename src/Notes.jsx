import React from 'react';
function Notes(propes){
    const deleted=()=>{
        propes.delete(propes.id)
    }
    return(
        <>
        <div className='Notes_box'>
            
        <h1>{propes.title}</h1>
        <p>{propes.content}</p>
        <i class="fa-solid fa-trash" onClick={deleted}></i>
            
        
        </div>
        </>
    );
}
export default Notes;