import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Workflows() {
  const [fetchWorkflowsData, setFetchWorkflowsData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/workflows")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchWorkflowsData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchWorkflowsData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                WORKFLOWS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchWorkflowsData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchWorkflowsData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchWorkflowsData.success ? fetchWorkflowsData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchWorkflowsData.success ? fetchWorkflowsData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Workflows;
