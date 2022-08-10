import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Forms() {
  const [fetchFormsData, setFetchFormsData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/forms")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchFormsData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchFormsData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                FORMS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchFormsData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchFormsData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchFormsData.hostname}
              </Card.Text>
              <Card.Text >
                {fetchFormsData.time}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Forms;
