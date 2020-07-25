// import React, {useState, useEffect } from 'react'
// import moment from "moment";

// const Clock = () => {
//     var state = {
//         clock: ""
//     }
//     const now = moment();
//     var time = now.format("hh:mm a");
//     //const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(time, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="App">
//             <header className="App-header">
//                 {time} seconds have elapsed since mounting.
//             </header>
//         </div>
//     );
// };

// export default Clock;