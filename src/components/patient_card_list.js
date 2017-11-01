import React from 'react';
import PatientCard from './patient_card';
import { ListGroup } from 'reactstrap';
import '../styles/patient_card_list.css';


function PatientCardList(props) {
  var renderPatients = () => {
      return props.patients.map(patient => {
        return (
          <PatientCard
            key={patient.fin}
            patientFullName = {patient.fullName}
            patientFin = {patient.fin}
            patientRoomBed = {patient.roomBed}
          />
        )
      });
  }
  return (
    <ListGroup>
      {renderPatients()}
    </ListGroup>
  )

}

export default PatientCardList;
