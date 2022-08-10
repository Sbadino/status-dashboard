import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Accounts() {
  const [fetchAccountsData, setFetchAccountsData] = useState(null);

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/accounts")
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
          fetchAccountsData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                ACCOUNTS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchAccountsData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchAccountsData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchAccountsData.success ? fetchAccountsData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchAccountsData.success ? fetchAccountsData.time : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Accounts;
