import React from 'react'

const Time = ({ time, clickTime, changeDate, zone, infOrder, date, remove,toggle }) => {
    
      
  return (
      <div className="sectionTime">
        <div className='timeSection' >
            {time.map((el, index)=>{
            return(
                <div 
                    className={ changeDate ? 'change' : 'time' } 
                    key={el.id}
                    onClick={(e)=>toggle(e, el.time, zone, date)}
                    style={{color:  infOrder( el.time, zone, date) === true ? 'red' : 'black'}} 
                >
                    {el.time}
                </div> 
            ) 
        })}
        </div>
    </div>
  )
}
export default  Time