import React, { useState } from "react";
function Adding(propes)
{

  
    const[note,setnote] = useState(
      {
        title:"",
        content:"",
      }
    )
    const InputEvent =(val)=>{
      const value = val.target.value;
      const name = val.target.name;
      setnote((predata)=>{
        return {
          ...predata,
          [name] : value,
          

        }
      })
    }
    const addEvent=()=>{
      propes.passNote(note);
    }
    const [initialP_input , final_input] = useState(<input type ="text" placeholder="Write @ note"/>);
    const bigger =()=>{
      final_input(()=>{
        return(
            <>
            <div className="new_input">
            <input type ="text" placeholder="Title"
            name ="title"
            // value={note.title}
            onChange={InputEvent}
             />
            <textarea rows="" column =""
            onChange={InputEvent}
            name ="content"
            placeholder="Write a notes"
            // value={note.content}
            
            />
            <div className="btn">
            <button onClick={addEvent}>
            <i class="fa-solid fa-plus"></i>
            </button>
            </div>
            </div>
            
            </>
        )
      })
    }

    return(
        <>
        <div className="adding_box" onClick={bigger}>
          {initialP_input}
          
        </div>
        </>
    )
}
export default Adding;

