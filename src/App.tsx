import { ClockComponent } from './components/CanvasClock';
import { City } from './components/City';
import { CanvasClock } from './components/Clock';
import { KonvaClock } from './components/KonvaClock';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <KonvaClock />
      <KonvaClock />
      <KonvaClock />
      <KonvaClock />
      <KonvaClock />
    </div>
  );
}

export default App;
