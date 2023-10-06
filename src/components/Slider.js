// // // import React, { useState, useEffect } from 'react'
// // // import data from '../data'
// // // import Moon from './Moon';

// // // const Slider = () => {
// // //   const [moonInfo] = useState(data);
// // //   const [index, setIndex] = useState(0);


// // //   useEffect(() => {
// // //     const lastIndex = moonInfo.length - 1;
// // //     if (index < 0) {
// // //       setIndex(lastIndex);
// // //     }

// // //     if (index > lastIndex) {
// // //       setIndex(0);
// // //     }
// // //   }, [index, moonInfo]);

// // // }

// // // useEffect(() => {
// // //   let slider = setInterval(() => {
// // //     setIndex(index + 1);
// // //   }, 5000);

// // //   return () => {
// // //     clearInterval(slider);
// // //   }
// // // }, [index]);

// // // return (
// // //   <Section>
// // //     {moonInfo.map((item, indexMoon) => {
// // //       let position = "nextSlide";
// // //       if (indexMoon === index) {
// // //         position = "activeSlide"
// // //       }

// // //       if (indexMoon === index - 1 || (index === 0 && indexMoon === MoonInfo.length - 1)
// // //       ) {
// // //         position = "lastSlide"
// // //       }

// // //       return(
// // //         <p></p>
// // //       )



// // //     })}
// // //   </Section>
// // // )


// // import React, { useState, useEffect } from 'react';
// // import data from '../data';
// // import moonInfo from './../data';

// // const Slider = () => {
// //   const [moonInfo] = useState(data);
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     const lastIndex = moonInfo.length - 1;
// //     if (index < 0) {
// //       setIndex(lastIndex);
// //     }

// //     if (index > lastIndex) {
// //       setIndex(0);
// //     }
// //   }, [index, moonInfo]);

// //   useEffect(() => {
// //     let slider = setInterval(() => {
// //       setIndex(index + 1);
// //     }, 5000);

// //     return () => {
// //       clearInterval(slider);
// //     };
// //   }, [index]);

// //   return (
// //     <div className="slider">
// //       {moonInfo.map((moonInfo, indexMoon) => {
// //         let position = "nextSlide";
// //         if (indexMoon === index) {
// //           position = "activeSlide";
// //         }

// //         if (
// //           indexMoon === index - 1 ||
// //           (index === 0 && indexMoon === moonInfo.length - 1)
// //         ) {
// //           position = "lastSlide";
// //         }

// //         return (
// //           <div key={indexMoon} className={`slide ${position}`}>
// //             <p>{moonInfo}</p>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default Slider;


// import React, { useState, useEffect } from 'react';
// import moonInfo from '../data';

// const Slider = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = moonInfo.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }

//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 5000);

//     return () => {
//       clearInterval(slider);
//     };
//   }, [index]);

//   return (
//     <div className="slider">
//       {moonInfo.map((item, indexMoon) => {
//         let position = "nextSlide";
//         if (indexMoon === index) {
//           position = "activeSlide";
//         }

//         if (
//           indexMoon === index - 1 ||
//           (index === 0 && indexMoon === moonInfo.length - 1)
//         ) {
//           position = "lastSlide";
//         }

//         return (
//           <div key={indexMoon} className={`slide ${position}`}>
//             <p>{item}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Slider;
