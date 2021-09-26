import Modal from "react-modal";
import { useState } from "react";

const Project = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <article className={"Project"} onClick={openModal}>
        <h2>{props.title}</h2>
        <img src={props.src} alt={props.src} className={"Project-img"} />
      </article>
      <Modal isOpen={showModal} onRequestClose={closeModal} className={"Modal"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <h1>{props.title}</h1>
            </div>
          </div>
          <div className={"row fill"}>
            <div className={"col-12"}>
              <h2>{props.desc}</h2>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-12"}>
              <div className={"Nav"}>
                <a
                  href={props.demo}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button>Demo</button>
                </a>
                <a href={props.git} target={"_blank"} rel="noopener noreferrer">
                  <button>Git</button>
                </a>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Project;
