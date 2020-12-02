import React, { useState } from "react";
import Balance from "./Balance";
import Header from "./Header";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import AddTransaction from "./AddTransaction";
import {InitialTransaction} from "../transactionConext";

export default function ExpenseTracker(){ 
     
    const [transaction, setTransaction] = useState(InitialTransaction);


    function handleOnAdd(tran){
        
        
        setTransaction((pv)=>{
        console.log(tran);
        return [...pv ,  tran]
       }); 
    }

    function balance (){
        var bal = 0;
        for (var i=0; i<transaction.length;i++){
            
            bal = bal + transaction[i].amount;
        }  
        return bal;
    }
    
    function income () {
                                            
      var inc = 0;
      for (var i=0; i<transaction.length;i++){
          
          if(transaction[i].amount >0 )
          inc = inc + transaction[i].amount;
      }  
      return inc;
    }
    
    function expense   () {
                                            
      var exp = 0;
      for (var i=0; i<transaction.length;i++){
          
          if(transaction[i].amount <0 )
          exp = exp + transaction[i].amount;
      }  
      return exp;
    }
    return ( 
            <div>
                <Header/>
                <div className="container">
                <Balance balance= {balance()}/>
                 <IncomeExpense income = {income()}  expense ={expense()}/>
                <History transaction = {transaction}/>
                <AddTransaction transactions ={transaction} onAdd={handleOnAdd}  />
                {
                    console.log(transaction)
                  
                }
                </div>
             
                
            </div> 

    );
}