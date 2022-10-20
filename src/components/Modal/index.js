// import { Component } from "react";
// import { Dialog } from "@mui/material";
// import { Projects } from "../Projects";
// // import "./styles.css";


// // ----------- Esse array é o equivalente ao nosso projects da Projects.js -----------

// // const roomData = [
// //   {
// //     id: 1,
// //     name: "standard room something new",
// //     image: [
// //       "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
// //     ]
// //   },

// //   {
// //     id: 2,
// //     name: "standard room something new",
// //     image: [
// //       "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
// //     ]
// //   },
// //   {
// //     id: 3,
// //     name: "standard room something new",
// //     image: [
// //       "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
// //     ]
// //   },
// //   {
// //     id: 4,
// //     name: "standard room something new",
// //     image: [
// //       "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
// //     ]
// //   }
// // ];

// // ----------- Própria modal, inclusive seu conteúdo -----------

// export const Modal = (imgUrl) => {
// //   state = {
// //     index: 0
// //   };

//     // const { index } = this.state;
//     // const { imgUrl, onHide } = ;
//     return (
//       <Dialog open={true} onClose={onHide}>
//         <div className="modal">
//           <img alt="" src={imgUrl} />

//           {/* ----------- Conteúdo da modal ----------- */}

//           {/* <button onClick={this.props.onHide}>Close Modal</button> */}
//         </div>
//       </Dialog>
//     );
// }

// //----------- No nosso caso, o "RoomCards" será equialente ao "ProjectCard" -----------


// // class RoomCards extends Component {
//   // state = {
//   //   showModal: null
//   // };

//   // getModal = (data) => {
//   //   this.setState({ showModal: data });
//   // };
//   // hideModal = () => {
//   //   this.setState({ showModal: null });
//   // };

// //   render() {
// //     return (
// //       <>
// //         {this.props.data.map((data) => {
// //           return (
// //             <div className="card__container" key={data.id}>
// //               <div className="card">
// //                 <h2 className="card__title">{data.name}</h2>

// //                 <div className="card__img">
// //                   <img
// //                     src={data.image}
// //                     onClick={() => this.getModal(data)}
// //                     alt=""
// //                   />

// //                 </div>
// //               </div>
// //               <button className="card__btn">Bestill overnatting</button>
// //             </div>
// //           );
// //         })}

// //         {this.state.showModal && (
// //           <Modal onHide={this.hideModal} images={this.state.showModal?.image} />
// //         )}
// //       </>
// //     );
// //   }
// // }

// //----------- No nosso caso, o "Room" será equialente ao "Project" -----------

// // class Room extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       data: roomData
// //     };
// //   }

// //   render() {
// //     return (
// //       <>
// //         <div>helo from room page</div>
// //         <RoomCards data={this.state.data} />
// //       </>
// //     );
// //   }
// // }

// // export default function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hello CodeSandbox</h1>
// //       <h2>Start editing to see some magic happen!</h2>

// //       <Room />
// //     </div>
// //   );
// // }
