import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Customers() {
  const [fetchCustomersData, setFetchAccountsData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/customers")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchAccountsData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchCustomersData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                CUSTOMERS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchCustomersData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchCustomersData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchCustomersData.hostname}
              </Card.Text>
              <Card.Text >
                {fetchCustomersData.time}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Customers;
