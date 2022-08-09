import './App.css';
import Navbar from './components/Navbar';
import StatusBox from './components/StatusBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StatusBox />
    </div>
  );
}

export default App;