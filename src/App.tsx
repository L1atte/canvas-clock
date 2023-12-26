import { ClockComponent } from './components/CanvasClock';
import { City } from './components/City';
import { CanvasClock } from './components/Clock';
import { KonvaClock } from './components/KonvaClock';

function App() {
  return (
    <>
      <br />
      <br />
      <KonvaClock />
      {/* <CanvasClock /> */}
      <br />
      <br />
      <City />
      <br />
      <br />
      <ClockComponent />
      <br />
      <br />
    </>
  );
}

export default App;
