import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Invites() {
  const [fetchInvitesData, setFetchInvitesData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/invites")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchInvitesData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchInvitesData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                INVITES
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchInvitesData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchInvitesData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchInvitesData.success ? fetchInvitesData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchInvitesData.success ? fetchInvitesData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Invites;
