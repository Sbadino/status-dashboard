import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Rules() {
  const [fetchRulesData, setFetchRulesData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/rules")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchRulesData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchRulesData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                RULES
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchRulesData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchRulesData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchRulesData.success ? fetchRulesData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchRulesData.success ? fetchRulesData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Rules;
