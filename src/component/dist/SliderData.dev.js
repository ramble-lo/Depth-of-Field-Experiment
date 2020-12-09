"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderData = void 0;

var Data = function Data() {
  var DataList = [];

  for (var i = 1; i <= 66; i++) {
    DataList.push({
      serialNumber: {
        i: i
      },
      image: '/images/Y' + JSON.stringify(i) + '.jpg'
    });
  }

  return DataList;
};

Data();
console.log(Data());
var SliderData = Data(); // export const SliderData = [
//     {   
//         serialNumber:'01',
//         image:'/images/Y01.jpg'
//     },
//     {   
//         serialNumber:'02',
//         image:'/images/Y02.jpg'
//     },
//     {   
//         serialNumber:'03',
//         image:'/images/Y03.jpg'
//     },
//     {   
//         serialNumber:'04',
//         image:'/images/Y04.jpg'
//     },
//     {   
//         serialNumber:'05',
//         image:'/images/Y05.jpg'
//     },
//     {   
//         serialNumber:'06',
//         image:'/images/Y06.jpg'
//     },
//     {   
//         serialNumber:'07',
//         image:'/images/Y07.jpg'
//     },
//     {   
//         serialNumber:'08',
//         image:'/images/Y08.jpg'
//     },
//     {   
//         serialNumber:'09',
//         image:'/images/Y09.jpg'
//     },
//     {   
//         serialNumber:'10',
//         image:'/images/Y10.jpg'
//     },
//     {   
//         serialNumber:'11',
//         image:'/images/Y11.jpg'
//     },
//     {   
//         serialNumber:'12',
//         image:'/images/Y12.jpg'
//     },
//     {   
//         serialNumber:'13',
//         image:'/images/Y13.jpg'
//     },
//     {   
//         serialNumber:'14',
//         image:'/images/Y14.jpg'
//     },
//     {   
//         serialNumber:'15',
//         image:'/images/Y15.jpg'
//     },
//     {   
//         serialNumber:'16',
//         image:'/images/Y16.jpg'
//     },
//     {   
//         serialNumber:'17',
//         image:'/images/Y17.jpg'
//     },
//     {   
//         serialNumber:'18',
//         image:'/images/Y18.jpg'
//     },
//     {   
//         serialNumber:'19',
//         image:'/images/Y19.jpg'
//     },
//     {   
//         serialNumber:'20',
//         image:'/images/Y20.jpg'
//     }
// ]
// import React from 'react'
// const SliderData = () => {
//     let SliderList = [];
//     for(let i = 1; i <= 10; i++){
//         // compList.push(<Col className="p-0"  md={6}><div className="test-card">成功</div></Col>)
//         SliderList.push(
//             {
//                 serialNumber:{i},
//                 images:'/images/Y'+{i}+'01.jpg'
//             }
//         )
//     }
//     console.log(SliderList);   
//     return (
//         SliderList
//     )
// }
// const DataList = SliderList;
// export default SliderData;
// export {DataList} ;
// const SliderList = () => {
//     let SliderList = [];
//     for(let i = 1; i <= 10; i++){
//         // compList.push(<Col className="p-0"  md={6}><div className="test-card">成功</div></Col>)
//         SliderList.push(
//             {
//                 serialNumber:{i},
//                 images:'/images/Y'+{i}+'01.jpg'
//             }
//         )
//     }
//     console.log(SliderList);
//     return(
//         SliderList
//     )
// }
// export default SliderList
// export const SliderData = [
//     {   
//         serialNumber:'01',
//         images:'1/images/Y01.jpg'
//     }
// ]

exports.SliderData = SliderData;