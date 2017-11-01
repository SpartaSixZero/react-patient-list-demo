import React from 'react';
import '../styles/patient_card.css';
import { ListGroupItem, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function PatientCard(props) {
  return (
    <ListGroupItem className="patient-card-list">
      <Container>
        <Row>
          <Col>
            {props.patientFullName}
          </Col>
          <Col>
            {props.patientRoomBed}
          </Col>
          <Col>
            {props.patientFin}
          </Col>
          <Col>
            <Button color="info">...</Button>
          </Col>
        </Row>
      </Container>
    </ListGroupItem>
  );
}

export default PatientCard;
