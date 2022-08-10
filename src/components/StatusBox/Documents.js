import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Documents() {
  const [fetchDocumentsData, setFetchDocumentsData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/documents")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchDocumentsData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchDocumentsData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                DOCUMENTS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchDocumentsData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchDocumentsData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchDocumentsData.hostname}
              </Card.Text>
              <Card.Text >
                {fetchDocumentsData.time}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Documents;
