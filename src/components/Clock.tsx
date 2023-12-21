import { ElementRef, useEffect, useRef } from 'react';

type LineOption = {
  x: number;
  y: number;
  angle: number;
  width: number;
  length: number;
  color: string;
};

const width = 400;
const height = 400;
const radius = 180;
const dot = {
  x: 190,
  y: 190,
  radius: 14,
};

function CanvasClock() {
  return (
    <div style={{ position: 'relative' }}>
      <ClockBg />
      <ClockHands />
    </div>
  );
}

function ClockBg() {
  const canvasRef = useRef<ElementRef<'canvas'>>(null);

  useEffect(() => {
    const bgElement = canvasRef.current;
    const bgCtx = bgElement?.getContext('2d');

    if (bgElement) {
      bgElement.width = width;
      bgElement.height = height;
    }

    if (bgCtx) {
      bgCtx.imageSmoothingEnabled = true;

      bgCtx.beginPath();
      bgCtx.strokeStyle = '#fff';
      bgCtx.arc(dot.x, dot.y, radius, 0, 2 * Math.PI);
      bgCtx.stroke();
      bgCtx.closePath();

      bgCtx.beginPath();
      bgCtx.fillStyle = 'white';
      bgCtx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
      bgCtx.fill();
      bgCtx.closePath();

      // 设置数字刻度样式
      bgCtx.font = '500 40px SF Pro Text';
      bgCtx.textAlign = 'center';
      bgCtx.textBaseline = 'middle';

      // 绘制数字刻度
      for (let i = 1; i <= 12; i++) {
        const angle = (i * Math.PI) / 6; // 每个数字刻度所对应的角度
        const x = dot.x + Math.sin(angle) * (radius - 30);
        const y = dot.y - Math.cos(angle) * (radius - 30);
        bgCtx.fillText(i.toString(), x, y);
      }
    }
  }, []);

  return (
    <canvas
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
}

function ClockHands() {
  const canvasRef = useRef<ElementRef<'canvas'>>(null);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const handsElement = canvasRef.current;
    const handsCtx = handsElement?.getContext('2d');

    if (handsCtx) {
      handsCtx.imageSmoothingEnabled = true;

      timer.current = setInterval(() => {
        updatePointers(handsCtx);
      }, 1000);
    }

    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  return (
    <canvas
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
}
function updatePointers(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, width, height); // 清掉原来的指针
  // 获取当前时间
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // 算出时分秒指针现在应指向圆的几分之几处
  h = h > 12 ? h - 12 : h;
  h = h + m / 60;
  h = h / 12;
  m = m / 60;
  s = s / 60;

  const hourHand: LineOption = {
    width: 11.25,
    length: 90,
    color: 'white',
    x: dot.x,
    y: dot.y,
    angle: h,
  };

  const minuteHand: LineOption = {
    width: 11.25,
    length: 130,
    color: 'white',
    x: dot.x,
    y: dot.y,
    angle: m,
  };

  const secondHand: LineOption = {
    width: 2.813,
    length: 140,
    color: '#405EFF',
    x: dot.x,
    y: dot.y,
    angle: s,
  };

  drawHand(ctx, hourHand);
  drawHand(ctx, minuteHand);
  drawHand(ctx, secondHand);
}

function drawHand(ctx: CanvasRenderingContext2D, lineOption: LineOption) {
  if (!ctx) return;

  const angle = lineOption.angle * Math.PI * 2 - Math.PI / 2;

  ctx.beginPath();
  ctx.lineWidth = lineOption.width;
  ctx.strokeStyle = lineOption.color;
  ctx.moveTo(lineOption.x, lineOption.y);
  ctx.lineCap = 'round';
  ctx.lineTo(
    lineOption.x + lineOption.length * Math.cos(angle),
    lineOption.y + lineOption.length * Math.sin(angle),
  );
  ctx.stroke();
  ctx.closePath();
}

export { CanvasClock };
