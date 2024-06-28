
import './App.css';
import Userservice from './API/Userservice';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "monospace" ,textAlign:'center' }}> Welcome to Movie Review Hub</h1>
      <div>
        <Userservice />
      </div>
    </div>
  );
}

export default App;
