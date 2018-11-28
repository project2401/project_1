import React from 'react'

const Time = ({time, clickTime, changeDate}) => {
    // console.log('time', time);
    
    // clickTime = e => {
    //     console.log(e.target);
        
    //     // e.target.style.color = e.target.style.color === 'rgb(0, 39, 255)' ? '#000' : 'rgb(0, 39, 255)'
    // }
  return (
      <div className="sectionTime">
        <div className='timeSection' >
            {time.map((el, index)=>{
                
            return(
                <div 
                    className={ changeDate ? 'chenge' : 'time' } 
                    key={el.id}
                    onClick={()=>clickTime(el.id, index)}
                    
                >
                
                    {el.time}
                
                </div> 
            ) 
        })}
        </div>
        <div className='timeSection' onClick={clickTime}>
            {time.map(el=>{
            return(
                <div className='time' key={el.id}>{el.time}</div> 
            ) 
        })}
        </div>
        <div className='timeSection' onClick={clickTime}>
            {time.map(el=>{
            return(
                <div className='time' key={el.id}>{el.time}</div> 
            ) 
        })}
        </div>
        <div className='timeSection' onClick={clickTime}>
            {time.map(el=>{
            return(
                <div className='time' key={el.id}>{el.time}</div> 
            ) 
        })}
        </div>
        <div className='timeSection' onClick={clickTime}>
            {time.map(el=>{
            return(
                <div className='time' key={el.id}>{el.time}</div> 
            ) 
        })}
        </div>
    </div>
  )
}
export default  Time