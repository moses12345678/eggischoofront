import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function CreateRecordModal({ isOpen, onClose, onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    fetch("http://127.0.0.1:8000/presms/eleves/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        onCreate(data);
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
        onClose();
      });
  };

  return (
    <Modal show={isOpen} onHide={onClose} >
      <Modal.Header closeButton >
        <Modal.Title>Ajouter un eleve</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'
      }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telephone:</Form.Label>
            <Form.Control
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="danger" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
