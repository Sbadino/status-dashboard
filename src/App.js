import './App.css';
import Navbar from './components/Navbar';
import Accounts from './components/StatusBox/Accounts';
import Assets from './components/StatusBox/Assets';
import Customers from './components/StatusBox/Customers';
import Datapoints from './components/StatusBox/Datapoints';
import Devices from './components/StatusBox/Devices';
import Documents from './components/StatusBox/Documents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Assets />
          </Col>
          <Col sm>
            <Customers />
          </Col>
          <Col sm>
            <Datapoints />
          </Col>
          <Col sm>
            <Devices />
          </Col>
          <Col sm>
            <Documents />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
          <Col sm>
            <Accounts />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
