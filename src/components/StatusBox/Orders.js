import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Orders() {
  const [fetchOrdersData, setFetchOrdersData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/orders")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchOrdersData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchOrdersData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                ORDERS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchOrdersData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchOrdersData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchOrdersData.success ? fetchOrdersData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchOrdersData.success ? fetchOrdersData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Orders;
