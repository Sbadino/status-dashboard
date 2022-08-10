import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Namespaces() {
  const [fetchNamespacesData, setFetchNamespacesData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/namespaces")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchNamespacesData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchNamespacesData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                NAMESPACES
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchNamespacesData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchNamespacesData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchNamespacesData.success ? fetchNamespacesData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchNamespacesData.success ? fetchNamespacesData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Namespaces;
