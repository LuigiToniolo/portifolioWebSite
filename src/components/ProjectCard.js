// import { Col } from "react-bootstrap";
// import { useState } from "react";
// import Modal from "react-modal";
// import ModalContent from '../components/Modal/index';

// Modal.setAppElement("#root");

// export const ProjectCard = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <Col size={12} sm={6} md={4} >
//         <div className="proj-imgbx" onClick={toggleModal}>
//           <img src={projects.imgUrl} />
//           <div className="proj-txtx">
//             <h4>{projects.title}</h4>
//             <span>{projects.description}</span>
//           </div>
//         </div>
//       </Col>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//         className="mymodal"
//         overlayClassName="myoverlay"
//         closeTimeoutMS={500}
//       >
//           <button className="botao-modal" onClick={toggleModal}>X</button>
//           <ModalContent />
//       </Modal>
//     </>
//   );
// }


