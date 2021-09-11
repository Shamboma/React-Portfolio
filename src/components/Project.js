import Modal from "react-modal";
import { useState } from "react";

const Project = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <article onClick={handleOpenModal}>
        <h1>{props.title}</h1>
        <img src={props.src} alt={props.src} />
      </article>
      <Modal isOpen={showModal}>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <a href={props.git} target={"_blank"} rel="noopener noreferrer">
          Demo
        </a>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </>
  );
};

export default Project;
