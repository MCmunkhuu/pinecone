// import Header from "./Header/page";
// import Bigdiv from "./body/page";
// import styles from "./edit/edit.module.css"
// export default function Home() {
//     return (<div className={styles.mainContainer}>
//         <Header></Header>
//         <Bigdiv></Bigdiv>
//     </div>
//     )
// }
// "use client";
// import React, { useState, useEffect } from "react";
// const Timer = () => {
//  const [hour, setHour] = useState(0);
//  const [minut, setMinut] = useState(0);
//  const [seconds, setSeconds] = useState(0);
//  const [isActive, setIsActive] = useState(false);
//  const toggle = () => {
//  setIsActive(!isActive);
//  };
//  const reset = () => {
//  setHour(0);
//  setMinut(0);
//  setSeconds(0);
//  setIsActive(false);
//  };
//  useEffect(() => {
//  let interval = null;
//  if (isActive) {
//  interval = setInterval(() => {
//  setSeconds((seconds) => seconds + 1);
//  }, 1000);
//  } else if (!isActive && seconds !== 0) {
//  clearInterval(interval);
//  }
//  return () => clearInterval(interval);
//  }, [isActive, seconds]);
//  useEffect(() => {
//     let interval = null;
//     if (isActive) {
//     interval = setInterval(() => {
//     setMinut((minut) => minut + 1);
//     }, 60000);
//     } else if (!isActive && minut !== 0) {
//     clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//     }, [isActive, minut]);
//     useEffect(() => {
//         let interval = null;
//         if (isActive) {
//         interval = setInterval(() => {
//         setHour((hour) => hour + 1);
//         }, 360000);
//         } else if (!isActive && minut !== 0) {
//         clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//         }, [isActive, hour]);
//  return (
//  <div className="app">
//     <div className="hour">{hour}h</div>
//     <div className="minut">{minut}m</div>
//     <div className="time">{seconds}s</div>
//  <div className="row">
//  <button
//  className={`button button-primary button-primary-${
//  isActive ? "active" : "inactive"
//  }`}
//  onClick={toggle}
//  >
//  {isActive ? "Pause" : "Start"}
//  </button>
//  <button className="button" onClick={reset}>
//  Reset
//  </button>
//  </div>
//  </div>
//  );
// };
// export default Timer;
import Header from "./Header/page";
import Cart from "./Cart/page";
export default function name() {
  return (
    <div>
      <Header></Header>;<Cart></Cart>;
    </div>
  );
}
