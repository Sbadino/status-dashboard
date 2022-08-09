import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StatusBox() {
  return (
    <Container>
      <Row>
        <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                ACCOUNTS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: "#32CD32", color: 'white' }}>
                Healthy
              </Card.Subtitle>
              <Card.Text>
                accounts-1234
              </Card.Text>
              <Card.Text >
                TIME
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem'}}>
            <Card.Body>
              <Card.Title>
                INVITES
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: "#FF0000", color: 'white' }}>
                Error
              </Card.Subtitle>
              <Card.Text style={{ color: '#FF0000' }}>
                OUTAGE
              </Card.Text>
              <Card.Text style={{ color: '#FF0000' }}>
                403
              </Card.Text>
              <Card.Text style={{ color: '#FF0000' }}>
                Forbidden
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StatusBox;