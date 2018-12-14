import React from "react";

const Time = ({
  time,
  changeDate,
  zone,
  infOrder,
  date,
  remove,
  toggle,
  userId, 
  isId
}) => {
  // console.log(this.props);
  
  return (
    <div className="sectionTime">
      <div className="timeSection">
        {time.map((el, index) => {
          return (
            <div
              // className={changeDate ? "change" : "time"}
              className={infOrder(el.time, zone, date, userId)}
              key={el.id}
              // data-userIdData={isId(el.time, zone, date, userId)}
              onClick={e => toggle(e, el.time, zone, date, userId)}
              // style={{
              // color: infOrder(el.time, zone, date, userId) === true ? "red" : "black"
              // }}
            >
              {el.time}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Time;