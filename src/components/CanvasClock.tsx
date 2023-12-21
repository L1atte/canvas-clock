import './CanvasClock.scss';

import { useRef } from 'react';
import { Circle, Layer, Stage, Text } from 'react-konva';

function Clock() {
  const stageRef = useRef(null);

  return (
    <Stage
      ref={stageRef}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        <Circle
          x={200}
          y={200}
          radius={180}
          fill="green"
        />
        <Text
          x={200}
          y={200}
          text="312"
          fill="white"
        />
      </Layer>
    </Stage>
  );
}

function ClockComponent() {
  return (
    <div className="clock">
      <section className="clock__indicator">12</section>
      <section className="clock__indicator">1</section>
      <section className="clock__indicator">2</section>
      <section className="clock__indicator">3</section>
      <section className="clock__indicator">4</section>
      <section className="clock__indicator">5</section>
      <section className="clock__indicator">6</section>
      <section className="clock__indicator">7</section>
      <section className="clock__indicator">8</section>
      <section className="clock__indicator">9</section>
      <section className="clock__indicator">10</section>
      <section className="clock__indicator">11</section>

      <div className="clock__axis"></div>
      <div className="clock__hour"></div>
      <div className="clock__minute"></div>
      <div className="clock__second"></div>
    </div>
  );
}

export { Clock, ClockComponent };
