
import React, { useState } from "react";
import Adding from "./Adding";
import Header from "./Header";
import Notes from "./Notes";
const App=()=>{
    const[addItem,setAddItem ] = useState([]);
    const addNotes =(data)=>{
        // console.log(data.content);
        setAddItem((oldVal)=>{
            return[...oldVal,data];
        });
        
    }
    const deleted_note =(id)=>{
        setAddItem((oldData)=>{
           return oldData.filter((curData,index)=>{
                return index!==id;
                
            })
        })
    }
    return(

    <>
    <Header/>
    <Adding passNote ={addNotes}/>
    {addItem.map((val,index)=>{
        return(
            <Notes
            key ={index}
            id = {index}
            title ={val.title}
            content = {val.content}
            delete = {deleted_note}
            
            
            />
        )
    })}
    </>
    )
}
export default App;