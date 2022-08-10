import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment";

function Datapoints() {
  const [fetchDatapointsData, setFetchDatapointsData] = useState(null);

  const time = moment();
  const timeFormat = time.format('h:m:s')

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/datapoints")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchDatapointsData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchDatapointsData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                DATAPOINTS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchDatapointsData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchDatapointsData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchDatapointsData.success ? fetchDatapointsData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchDatapointsData.success ? timeFormat : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Datapoints;
