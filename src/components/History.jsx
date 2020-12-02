import React from "react"; 

export default function History(props){
 


    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
             
             {
                 props.transaction.map((transaction,index)=>
                 <li  key={index} className={transaction.amount>0 ? "plus":"minus"}>
                 {transaction.description} <span>{transaction.amount}</span>
                 <button className="delete-btn" onClick ={()=>{
                            
                            props.onDelete(index);

                    }}>x</button>
                 </li> 
                 )

             }
                
           
        
            
             </ul>
           
        </div>
        
        );
}
