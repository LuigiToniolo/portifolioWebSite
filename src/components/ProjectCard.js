import { Col } from "react-bootstrap";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export const ProjectCard = ({ imgUrl, title, description, onClickCard}) => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }

    return (
      <Col size={12} sm={6} md={4} >
        <button className="proj-imgbx" onClick={toggleModal}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
          >
            <div>My modal dialog.</div>
            <button onClick={toggleModal}>Close modal</button>
          </Modal>
        </button>
      </Col>
    );
  }


