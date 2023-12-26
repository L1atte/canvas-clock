import { ElementRef, useEffect, useRef } from 'react';
import { Stage, Layer, Circle, Text } from 'react-konva';

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

// 两个参数
// mode
// zone
function KonvaClock() {
  return <ClockDial />;
}

function ClockDial() {
  const stageRef = useRef<ElementRef<typeof Stage>>(null);

  return (
    <Stage
      ref={stageRef}
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
              align={'center'}
              verticalAlign={'center'}
              fill="white"
            ></Text>
          );
        })}
      </Layer>
    </Stage>
  );
}

export { KonvaClock };
