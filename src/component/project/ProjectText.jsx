import React, { useEffect, useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
function ProjectText({ title, body, detailBD }) {
  // custom text
  const [bodyLength, setBodyLength] = useState(false);
  const handleSign = () => {
    if (body.length > 160) {
      setBodyLength(true);
    }
  };
  const maxLength = 160;

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const isDetailBDValid = Array.isArray(detailBD);
  return (
    <div className="projecttext py-2">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-[16px] inline">
        {body.substring(0, maxLength)}
      </p>
      {body.length > maxLength && (
        <p
          onClick={openModal}
          className="tracking-wider text-[24px] text-blue-600 cursor-pointer inline"
        >
          ....
        </p>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // Menutup modal saat klik di luar
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "8px",
            background: "#fff",
            border: "2px solid black",
            width: "75%",
          },
        }}
      >
        <h2 className=" font-semibold text-2xl text-center mb-6">{title}</h2>
        <p className="mb-4 text-justify">{body}</p>
        {isDetailBDValid && detailBD.length > 0 && (
          <ol>
            {detailBD.map((detail, index) => (
              <li className=" ml-5 list-decimal" key={index}>
                {detail}
              </li>
            ))}
          </ol>
        )}
        {!isDetailBDValid && <p>No details available.</p>}

        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ProjectText;
