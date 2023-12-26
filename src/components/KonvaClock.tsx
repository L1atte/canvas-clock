import { Stage, Layer, Circle } from 'react-konva';

function KonvaClock() {
  return (
    <>
      <BgClock />
    </>
  );
}

function BgClock() {
  return (
    <Stage>
      <Layer>
        <Circle
          x={190}
          y={190}
          radius={180}
          fill="white"
        />
      </Layer>
    </Stage>
  );
}

export { KonvaClock };
