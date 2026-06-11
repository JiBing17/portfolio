import { useEffect, useRef } from 'react';

const BALL_DEFS = [
  { size: 88, x: 0.72, y: 0.18, vx: 0.00055, vy: 0.00042 },
  { size: 52, x: 0.82, y: 0.68, vx: -0.00062, vy: 0.00048 },
  { size: 28, x: 0.45, y: 0.32, vx: 0.00075, vy: -0.00058 },
  { size: 64, x: 0.38, y: 0.78, vx: 0.0005, vy: -0.00065 },
  { size: 36, x: 0.25, y: 0.12, vx: -0.00068, vy: 0.00055 },
  { size: 76, x: 0.88, y: 0.48, vx: -0.00045, vy: -0.00052 },
];

const toPixels = (defs, w, h) =>
  defs.map((b) => ({
    size: b.size,
    r: b.size / 2,
    x: b.x * w,
    y: b.y * h,
    vx: b.vx * w,
    vy: b.vy * h,
  }));

const resolveWall = (ball, w, h) => {
  if (ball.x - ball.r <= 0) {
    ball.x = ball.r;
    ball.vx = Math.abs(ball.vx);
  } else if (ball.x + ball.r >= w) {
    ball.x = w - ball.r;
    ball.vx = -Math.abs(ball.vx);
  }

  if (ball.y - ball.r <= 0) {
    ball.y = ball.r;
    ball.vy = Math.abs(ball.vy);
  } else if (ball.y + ball.r >= h) {
    ball.y = h - ball.r;
    ball.vy = -Math.abs(ball.vy);
  }
};

const resolvePair = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  const minDist = a.r + b.r;

  if (dist === 0 || dist >= minDist) return;

  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = minDist - dist;

  a.x -= nx * overlap * 0.5;
  a.y -= ny * overlap * 0.5;
  b.x += nx * overlap * 0.5;
  b.y += ny * overlap * 0.5;

  const relVel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
  if (relVel >= 0) return;

  const impulse = -relVel;
  a.vx -= impulse * nx;
  a.vy -= impulse * ny;
  b.vx += impulse * nx;
  b.vy += impulse * ny;
};

const HeroBalls = () => {
  const wrapRef = useRef(null);
  const ballsRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const els = wrap.querySelectorAll('[data-ball]');
    let frameId;

    const tick = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w === 0 || h === 0) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      if (!ballsRef.current) {
        ballsRef.current = toPixels(BALL_DEFS, w, h);
      }

      const balls = ballsRef.current;

      balls.forEach((ball) => {
        ball.x += ball.vx;
        ball.y += ball.vy;
        resolveWall(ball, w, h);
      });

      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            resolvePair(balls[i], balls[j]);
          }
        }
        balls.forEach((ball) => resolveWall(ball, w, h));
      }

      balls.forEach((ball, i) => {
        const el = els[i];
        if (el) {
          el.style.transform = `translate(${ball.x - ball.r}px, ${ball.y - ball.r}px)`;
        }
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    const onResize = () => {
      ballsRef.current = null;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-bg" aria-hidden>
      {BALL_DEFS.map((ball, i) => (
        <div
          key={i}
          data-ball
          className="hero-ball"
          style={{ width: ball.size, height: ball.size }}
        />
      ))}
    </div>
  );
};

export default HeroBalls;
