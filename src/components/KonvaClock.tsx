import { useEffect, useRef } from 'react';
import { Circle, Layer, Line, Stage, Text } from 'react-konva';

type HandOption = {
  x: number;
  y: number;
  width: number;
  length: number;
  color: string;
};

// 获取设备的像素比
// const devicePixelRatio = window.devicePixelRatio || 1;
const width = 400;
const height = 400;
// const scaleWidth = width * devicePixelRatio;
// const scaleHeight = height * devicePixelRatio;
const radius = 180;
const dot = {
  x: 190,
  y: 190,
  radius: 14,
};

const hourHand: HandOption = {
  width: 11.25,
  length: 90,
  color: '#fff',
  x: dot.x,
  y: dot.y,
};

const minuteHand: HandOption = {
  width: 11.25,
  length: 130,
  color: '#fff',
  x: dot.x,
  y: dot.y,
};

const secondHand: HandOption = {
  width: 2.813,
  length: 140,
  color: '#405EFF',
  x: dot.x,
  y: dot.y,
};

// 两个参数
// mode
// zone
function KonvaClock() {
  return (
    <div style={{ position: 'relative' }}>
      <ClockDial />
      <ClockHands />
    </div>
  );
}

function ClockDial() {
  return (
    <Stage
      width={width}
      height={height}
    >
      <Layer>
        <Circle
          x={dot.x}
          y={dot.y}
          radius={radius}
          stroke="white"
        />
        {Array.from({ length: 12 }, (_, index) => index + 1).map(i => {
          const angle = (i * Math.PI) / 6; // 每个数字刻度所对应的角度
          const x = dot.x + Math.sin(angle) * (radius - 20);
          const y = dot.y - Math.cos(angle) * (radius - 20);

          return (
            <Text
              key={i}
              x={x}
              y={y}
              text={i.toString()}
              align={}
              verticalAlign={'center'}
              fill="white"
            ></Text>
          );
        })}
      </Layer>
    </Stage>
  );
}

function ClockHands() {
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timer.current = setInterval(() => {}, 1000);

    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  return (
    <Stage
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      width={width}
      height={height}
    >
      <Layer>
        <Line
          points={[hourHand.x, hourHand.y, hourHand.x, hourHand.y - hourHand.length]}
          strokeWidth={hourHand.width}
          stroke={hourHand.color}
          lineCap="round"
        />
        <Line
          points={[minuteHand.x, minuteHand.y, minuteHand.x, minuteHand.y - minuteHand.length]}
          strokeWidth={minuteHand.width}
          stroke={minuteHand.color}
          lineCap="round"
        />
        <Line
          points={[secondHand.x, secondHand.y, secondHand.x, secondHand.y - secondHand.length]}
          strokeWidth={secondHand.width}
          stroke={secondHand.color}
          lineCap="round"
        />
      </Layer>
    </Stage>
  );
}

export { KonvaClock };
