import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment";

function Users() {
  const [fetchUsersData, setFetchUsersData] = useState(null);

  const time = moment();
  const timeFormat = time.format('h:m:s')

  useEffect( () => {
    setInterval(() => {
      fetch("https://status-dashboard-api.herokuapp.com/users")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetchUsersData(data);
      }) 
    }, 15000) // Amount of MILLISECONDS it takes to refresh. 
  }, [])

  return (
    <Container>
      <Row>
        {
          fetchUsersData && 
          <Col sm>
          <Card className="mt-5" style={{ width: '18rem', height: '13rem' }}>
            <Card.Body>
              <Card.Title>
                USERS
              </Card.Title>
              <Card.Subtitle className="pt-1 pb-1" style={{ backgroundColor: fetchUsersData.success ? "#32CD32" : "#FF0000", color: 'white' }}>
                {fetchUsersData.success ? "Healthy" : "Error"}
              </Card.Subtitle>
              <Card.Text>
                {fetchUsersData.success ? fetchUsersData.hostname : "Request failed with status code 503."}
              </Card.Text>
              <Card.Text >
                {fetchUsersData.success ? timeFormat : "OUTAGE"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  );
}

export default Users;
