import React, {useState } from "react"; 



export default function AddTransaction(props){
    
 
  const [enteredTransaction , setEnteredTransaction] = useState({description:"",amount:0});
 

  function handleOnChange(event){
   
    const {id, value } = event.target;
    let idKey = "amount";
    let enteredAmount =0;
    if(id === "text"){
      idKey = "description";
      enteredAmount = value;
    } 
    else{
    enteredAmount = Number(value);
    }
    

    setEnteredTransaction((previousValue)=>{
      return {...previousValue,
              [idKey] : enteredAmount
            };
    });

  }


 

    return (<div>

<h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." onChange={ handleOnChange} value = {enteredTransaction.description}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." onChange={ handleOnChange} 
         value = {enteredTransaction.amount !== 0 ? enteredTransaction.amount : "" }  />
        </div>
        <button className="btn" onClick={(event)=>{
          
            props.onAdd(enteredTransaction);
           setEnteredTransaction( {description:"",amount:0});
            event.preventDefault();
            
          
          

        }}>Add transaction</button>
      </form>

    </div>);

}