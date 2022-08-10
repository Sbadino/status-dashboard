import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment";

function Messages() {
  const [fetchMessagesData, setFetchMessagesData] = useState(null);

  const time = moment();
  const timeFormat = time.format('h:m:s')

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/messages")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchMessagesData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchMessagesData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                MESSAGES
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchMessagesData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchMessagesData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchMessagesData.success ? fetchMessagesData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchMessagesData.success ? timeFormat : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Messages;
