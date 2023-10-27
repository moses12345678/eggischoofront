import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEleves from './Listeleves';
import CreateRecordModal from './CreateRecordModal';
import Header2 from './PageLayout/Header2';
import { Link, Redirect } from "react-router-dom";
//import { useApiData } from './ApiContext/ApiDataContext';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import Footer from './PageLayout/Footer';
import Banner from './PageLayout/Banner';
import ListClassroom from './ListClassroom';

export default function ClassRoom() {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleCreate = (newRecord) => {
        // Update the data state with the new record
        setData([...data, newRecord]);
    };
    const logout = (e)=>{
        e.preventDefault(); // Prevent the default form submission

        // Perform any form validation or other logic here

        // Redirect to the home page (you can specify the path you want to redirect to)
        window.location.href = '/';
    }

    return (
        <>
        <Header2  onLogout={logout} />
        <div>
           <Banner />
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h1>Listes des Classes</h1>
                            <Button variant="primary" onClick={openModal}>
                            Ajouter Une Classe
                            </Button>
                        </div>
                        <CreateRecordModal
                            isOpen={modalIsOpen}
                            onClose={closeModal}
                            onCreate={handleCreate}
                        />
                        <ListClassroom data={data} />
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    );
}
