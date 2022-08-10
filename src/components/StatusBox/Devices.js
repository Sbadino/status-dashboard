import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Devices() {
  const [fetchDevicesData, setFetchDevicesData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/devices")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchDevicesData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchDevicesData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                DEVICES
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchDevicesData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchDevicesData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchDevicesData.hostname}
              </Card.Text>
              <Card.Text >
                {fetchDevicesData.time}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Devices;
