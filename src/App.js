// import logo from './logo.svg';
import './App.css';
// import Car from './component/Car'
import React, {useState} from 'react';


function App() {
  let[selects,setSelects]=useState("Cash");
  let[date,setDate] = useState('');
  let[amount,setAmount]=useState('');
  let[remark,setRemark]=useState('');
  // let[email,setEmail]= useState('');
  // let[password,setPassword]=useState('');
  let[list,setList]=useState([]);
 const handleClick=(e)=>{
    e.preventDefault();
    // console.log(email,password);
    console.log(date,amount,remark);
    const data = {date,amount,remark};
    if(date && amount && remark)
    {
      
    
      setList((ls)=>[...ls,data])
      
      
    }
  };
  
  return (
  
    <div className="App">
     <form>
      {/* <div>Enter email</div>
      <input type="text" placeholder ="email" onChange={(e)=>setEmail(e.target.value)}></input>
      <div>Enter password</div>
      <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <button type="submit" onClick={handleClick}>submit</button> */}
      <div className='main'>
        <div className='inner'>Receipt Details</div>
      </div>
      <div className='date'>
        <div>Date</div>
        <input type="date"placeholder='Enter Date' onChange={(e)=>setDate(e.target.value)}></input>
      </div>
      <div className='amount'>
        <div>Amount</div>
        <input type="text" placeholder='Enter Amount (in INR)' onChange={(e)=>setAmount(e.target.value)}></input>
      </div>
      <div className='money'>
      <label>Payment mode</label>
      <select  value = {selects} onChange={(e)=>setSelects(e.target.value)}>
        <option value="Cash">
         Cash
        </option>
        <option value="Debit card" >Debit card </option>
        <option value="Credit card">Credit card</option>
        <option value="UPI">UPI</option>
      </select>
      </div>
      <div className='remark'>
        <div>Remark</div>
        <input type = "text" placeholder='Enter Remark' onChange={(e)=>setRemark(e.target.value)}></input>
      </div>
      <div className='head'>
        <div className='headinner'>
      <div className='box1'>CANCEL</div>
      </div>
      <div className='headouter'>
       <button type="submit" onClick={handleClick}>submit</button> 
      {/* <div className='box2' onClick={handleClick}>SUBMIT</div> */}
      </div>
      </div>
     </form>
     <div className='columnd'>
          
      <div className='dated' placeholder='Date'>Date</div>
      
      <div className='amount' placeholder='Amoount'>Amount</div>
      <div className='payment' placeholder='Payment mode'>Payment Mode</div>
    
      <div className='remark' placeholder='Remark'>Remark</div>
     </div>

    {
      list.map((ele)=>{
        return(
          <>
          <div className='column'>
          
      <div className='datename' placeholder='Date'>{ele.date}</div>
      
      <div className='amountname' placeholder='Amoount'>Rs{ele.amount}</div>
      <div className='paymentname' placeholder='Payment mode'>{selects}</div>
    
      <div className='remarkname' placeholder='Remark'>{ele.remark}</div>
     </div>
          {/* <div className='numbers' placeholder='email'>{ele.email}</div>
          <div className='colours'>{ele.password}</div> */}
          </>
        )
      })
    }
    </div>
    
    
    
  );
}

export default App;
