import Navbar from './components/Navbar';
import Accounts from './components/StatusBox/Accounts';
import Assets from './components/StatusBox/Assets';
import Customers from './components/StatusBox/Customers';
import Datapoints from './components/StatusBox/Datapoints';
import Devices from './components/StatusBox/Devices';
import Documents from './components/StatusBox/Documents';
import Forms from './components/StatusBox/Forms';
import Invites from './components/StatusBox/Invites';
import Media from './components/StatusBox/Media';
import Messages from './components/StatusBox/Messages';
import Namespaces from './components/StatusBox/Namespaces';
import Orders from './components/StatusBox/Orders';
import Patients from './components/StatusBox/Patients';
import Relationships from './components/StatusBox/Relationships';
import Rules from './components/StatusBox/Rules';
import Templates from './components/StatusBox/Templates';
import Users from './components/StatusBox/Users';
import Workflows from './components/StatusBox/Workflows';

import './App.css';
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
            <Forms />
          </Col>
          <Col sm>
            <Invites />
          </Col>
          <Col sm>
            <Media />
          </Col>
          <Col sm>
            <Messages />
          </Col>
          <Col sm>
            <Namespaces />
          </Col>
          <Col sm>
            <Orders />
          </Col>
          <Col sm>
            <Patients />
          </Col>
          <Col sm>
            <Relationships />
          </Col>
          <Col sm>
            <Rules />
          </Col>
          <Col sm>
            <Templates />
          </Col>
          <Col sm>
            <Users />
          </Col>
          <Col sm>
            <Workflows />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
