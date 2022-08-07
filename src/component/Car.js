
import './car.css'
import data from '../Object'

function Car() {
    return (
        <>
        <div className='parent'>
        {
             data.map((ele)=>{
                return(
                    <div className="app">
        <div className='price'>{ele.price}</div>
        <div className='numbers'>{ele.numbers}</div>
        <div className='colours'>{ele.colours}</div>
          
      </div>
                )
             })
        }
      </div>
      </>
    );
  }
  
  export default Car;
  