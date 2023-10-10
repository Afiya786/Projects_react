import React, { useState } from 'react'
import toodoo from "../images/toodoo.svg"
import '../index.css'


const Todo =() =>{
  const[inputData, setinputDta] = useState("");
  const[items, setitems] = useState([])
  const addItem=()=>{
    if(!inputData){

    }else{
    setitems([...items,inputData])
    setinputDta('')
    }
  }

  const deleteItem=(id) =>{
   
    const updateitems = items.filter((elem, ind) =>{
      return ind!== id;
    });

    setitems(updateitems)

  }


  const removeAll = () =>{
    setitems([]);
  }
    return(
        <>
            <div className='main-div'>
              <div className='child-div'>
                <figure>
                <i className="fa-solid fa-book"></i>
                    <figcaption><h1>To Do List <br /> Today List<i className="fa-solid fa-pen-nib"></i> </h1></figcaption>
                </figure>

                <div className='addItems'>
                  <input type='text' placeholder='Add items.....'
                  value={inputData} onChange={(e) =>setinputDta(e.target.value)}/>

                  <i className="fa-solid fa-plus" title='add items' onClick={addItem} ></i>
                  </div>

                  

                  <div className='showItems'>
                    {
                      items.map((elem, ind) =>{
                        return(
                          <div className='eachItem' key={ind}>
                            <h3>{elem}
                            <i className="fa-solid fa-trash" title='Delete items' onClick={() => deleteItem(ind)}></i></h3>
                          </div>
                        )
                  
                           
                      })
                    }
                    </div>
                    <div className='showItems'>
                    <button className="btn effect04" data-sm-link-text ="Remove All" onClick={removeAll}><span>Remove All</span></button>
                  </div>

              </div>
            </div> 
        </>
    )
}
export default Todo