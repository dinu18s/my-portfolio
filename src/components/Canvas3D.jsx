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
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Starfield & Constellation Particles
    const numParticles = 90;
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1800,
        y: (Math.random() - 0.5) * 1800,
        z: Math.random() * 1100 + 100,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        color: i % 3 === 0 ? 'rgba(56, 189, 248,' : i % 3 === 1 ? 'rgba(168, 85, 247,' : 'rgba(99, 102, 241,'
      });
    }

    // 3D Geometric Objects: Icosahedron, Octahedron, Cube
    const phi = (1 + Math.sqrt(5)) / 2;

    const createIcosahedron = (scale) => {
      const v = [
        [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
        [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
        [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
      ].map(([x, y, z]) => ({ x: (x * scale) / phi, y: (y * scale) / phi, z: (z * scale) / phi }));

      const edges = [];
      const distSq = (p1, p2) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2;
      const expectedDistSq = (scale * 2 / phi) ** 2;

      for (let i = 0; i < v.length; i++) {
        for (let j = i + 1; j < v.length; j++) {
          if (Math.abs(distSq(v[i], v[j]) - expectedDistSq) < scale * 0.8) {
            edges.push([i, j]);
          }
        }
      }
      return { vertices: v, edges };
    };

    const createOctahedron = (size) => {
      const s = size;
      const vertices = [
        { x: s, y: 0, z: 0 },
        { x: -s, y: 0, z: 0 },
        { x: 0, y: s, z: 0 },
        { x: 0, y: -s, z: 0 },
        { x: 0, y: 0, z: s },
        { x: 0, y: 0, z: -s },
      ];
      const edges = [
        [0, 2], [2, 1], [1, 3], [3, 0],
        [0, 4], [2, 4], [1, 4], [3, 4],
        [0, 5], [2, 5], [1, 5], [3, 5],
      ];
      return { vertices, edges };
    };

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
      { ...createIcosahedron(85), cx: -480, cy: -220, cz: 420, rx: 0, ry: 0, rSpeedX: 0.006, rSpeedY: 0.009, color: 'rgba(56, 189, 248,' },
      { ...createOctahedron(90), cx: 520, cy: 120, cz: 500, rx: 0, ry: 0, rSpeedX: -0.008, rSpeedY: 0.007, color: 'rgba(168, 85, 247,' },
      { ...createCube(90), cx: -400, cy: 320, cz: 380, rx: 0, ry: 0, rSpeedX: 0.007, rSpeedY: -0.006, color: 'rgba(99, 102, 241,' },
      { ...createIcosahedron(65), cx: 420, cy: -320, cz: 460, rx: 0, ry: 0, rSpeedX: -0.005, rSpeedY: -0.008, color: 'rgba(56, 189, 248,' },
    ];

    const fov = 480;

    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Render 3D Particles & Projected Constellations
      const projectedParticles = [];
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x < -900) p.x = 900;
        if (p.x > 900) p.x = -900;
        if (p.y < -900) p.y = 900;
        if (p.y > 900) p.y = -900;
        if (p.z < 10) p.z = 1100;
        if (p.z > 1100) p.z = 10;

        const scale = fov / (fov + p.z);
        const projectedX = (p.x + mouseX * 0.7) * scale + width / 2;
        const projectedY = (p.y + mouseY * 0.7) * scale + height / 2;
        const alpha = Math.min(1, Math.max(0.1, (1 - p.z / 1100) * 0.75));

        projectedParticles.push({ x: projectedX, y: projectedY, z: p.z, scale, alpha, color: p.color });

        ctx.beginPath();
        ctx.arc(projectedX, projectedY, p.radius * scale * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${alpha})`;
        ctx.fill();
      }

      // Constellation connection lines
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 8, projectedParticles.length); j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.15 * p1.alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Render 3D Wireframe Polyhedrons
      shapes.forEach((shape) => {
        shape.rx += shape.rSpeedX;
        shape.ry += shape.rSpeedY;

        const cosX = Math.cos(shape.rx);
        const sinX = Math.sin(shape.rx);
        const cosY = Math.cos(shape.ry);
        const sinY = Math.sin(shape.ry);

        const projectedVertices = shape.vertices.map((v) => {
          let x1 = v.x * cosY - v.z * sinY;
          let z1 = v.z * cosY + v.x * sinY;

          let y2 = v.y * cosX - z1 * sinX;
          let z2 = z1 * cosX + v.y * sinX;

          const worldX = x1 + shape.cx + mouseX;
          const worldY = y2 + shape.cy + mouseY;
          const worldZ = z2 + shape.cz;

          const scale = fov / (fov + worldZ);
          return {
            x: worldX * scale + width / 2,
            y: worldY * scale + height / 2,
            scale,
            alpha: Math.min(1, Math.max(0.15, (1 - worldZ / 900) * 0.65)),
          };
        });

        // Draw edges with glowing gradient
        ctx.lineWidth = 1.3;
        shape.edges.forEach(([startIdx, endIdx]) => {
          const p1 = projectedVertices[startIdx];
          const p2 = projectedVertices[endIdx];
          if (!p1 || !p2) return;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${shape.color} ${p1.alpha * (darkMode ? 0.45 : 0.25)})`;
          ctx.stroke();
        });

        // Draw glowing vertex points
        projectedVertices.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `${shape.color} ${p.alpha * 0.9})`;
          ctx.fill();
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
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-85"
    />
  );
}
