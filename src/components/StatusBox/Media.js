import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Media() {
  const [fetchMediaData, setFetchMediaData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/media")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchMediaData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchMediaData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                MEDIA
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchMediaData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchMediaData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchMediaData.success ? fetchMediaData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchMediaData.success ? fetchMediaData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Media;
