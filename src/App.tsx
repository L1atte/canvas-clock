import { ClockComponent } from './components/CanvasClock';
import { City } from './components/City';
import { CanvasClock } from './components/Clock';
import { KonvaClock } from './components/KonvaClock';
import './App.css';

function App() {
  return (
    <>
      <br />
      <KonvaClock />
      {/* <CanvasClock /> */}
      <br />
      <br />
      <City />
      {/* <ClockComponent /> */}
    </>
  );
}

export default App;
