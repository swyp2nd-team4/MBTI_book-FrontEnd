import './App.css';
import Rechart from './Rechart';
import Router from './shared/Router';

function App() {
  return (
    <div style={{ width: 1000, height: 800 }}>
      <Rechart />
      <Router />
    </div>
  );
}

export default App;
