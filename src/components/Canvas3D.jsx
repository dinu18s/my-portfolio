import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/useTheme';

export default function Canvas3D() {
  const canvasRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position for 3D parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - width / 2) * 0.05;
      targetMouseY = (e.clientY - height / 2) * 0.05;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particles
    const numParticles = 80;
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 1600,
        z: Math.random() * 1000 + 100,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
      });
    }

    // 3D Wireframe Polyhedrons
    const createCube = (size) => {
      const s = size / 2;
      return {
        vertices: [
          { x: -s, y: -s, z: -s },
          { x: s, y: -s, z: -s },
          { x: s, y: s, z: -s },
          { x: -s, y: s, z: -s },
          { x: -s, y: -s, z: s },
          { x: s, y: -s, z: s },
          { x: s, y: s, z: s },
          { x: -s, y: s, z: s },
        ],
        edges: [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7]
        ]
      };
    };

    const shapes = [
      { ...createCube(140), cx: -450, cy: -200, cz: 400, rx: 0, ry: 0, rz: 0, rSpeedX: 0.005, rSpeedY: 0.008 },
      { ...createCube(100), cx: 480, cy: 150, cz: 500, rx: 0, ry: 0, rz: 0, rSpeedX: -0.007, rSpeedY: 0.006 },
      { ...createCube(80), cx: -380, cy: 300, cz: 350, rx: 0, ry: 0, rz: 0, rSpeedX: 0.009, rSpeedY: -0.005 },
      { ...createCube(120), cx: 400, cy: -300, cz: 450, rx: 0, ry: 0, rz: 0, rSpeedX: -0.004, rSpeedY: -0.007 },
    ];

    const fov = 450;

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const particleColor = darkMode ? 'rgba(56, 189, 248, ' : 'rgba(14, 165, 233, ';
      const wireColor = darkMode ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.2)';

      // 1. Render 3D Particles
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x < -800) p.x = 800;
        if (p.x > 800) p.x = -800;
        if (p.y < -800) p.y = 800;
        if (p.y > 800) p.y = -800;
        if (p.z < 10) p.z = 1000;
        if (p.z > 1000) p.z = 10;

        const scale = fov / (fov + p.z);
        const projectedX = (p.x + mouseX) * scale + width / 2;
        const projectedY = (p.y + mouseY) * scale + height / 2;
        const alpha = Math.min(1, Math.max(0.1, (1 - p.z / 1000) * 0.7));

        ctx.beginPath();
        ctx.arc(projectedX, projectedY, p.radius * scale * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = particleColor + alpha + ')';
        ctx.fill();
      }

      // 2. Render 3D Wireframe Objects
      shapes.forEach((shape) => {
        shape.rx += shape.rSpeedX;
        shape.ry += shape.rSpeedY;

        const cosX = Math.cos(shape.rx);
        const sinX = Math.sin(shape.rx);
        const cosY = Math.cos(shape.ry);
        const sinY = Math.sin(shape.ry);

        // Transform vertices
        const projectedVertices = shape.vertices.map((v) => {
          // Rotate Y
          let x1 = v.x * cosY - v.z * sinY;
          let z1 = v.z * cosY + v.x * sinY;

          // Rotate X
          let y2 = v.y * cosX - z1 * sinX;
          let z2 = z1 * cosX + v.y * sinX;

          // World coordinates
          const worldX = x1 + shape.cx + mouseX;
          const worldY = y2 + shape.cy + mouseY;
          const worldZ = z2 + shape.cz;

          const scale = fov / (fov + worldZ);
          return {
            x: worldX * scale + width / 2,
            y: worldY * scale + height / 2,
            scale,
          };
        });

        // Draw edges
        ctx.strokeStyle = wireColor;
        ctx.lineWidth = 1.5;
        shape.edges.forEach(([startIdx, endIdx]) => {
          const p1 = projectedVertices[startIdx];
          const p2 = projectedVertices[endIdx];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-80"
    />
  );
}
