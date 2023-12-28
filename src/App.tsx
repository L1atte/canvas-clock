import { CanvasClock } from './components/Clock';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <CanvasClock />
      <CanvasClock />
      <CanvasClock />
      <CanvasClock />
      <CanvasClock />
    </div>
  );
}

export default App;
