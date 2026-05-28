// Mini-map SVGs for each project card. Each shape is a solid path with simple dot
// waypoints, drawn inside a 240x80 viewBox. Every shape is tuned to its project.

export type ProjectShape = {
  path: string;
  dots: { x: number; y: number }[];
};

export const PROJECT_SHAPE_VIEW = { width: 240, height: 80 } as const;

export const projectShapes = {
  // Sparkline of irregular samples at fixed intervals — time series, observability.
  series: {
    path: 'M 20,50 L 53,32 L 86,60 L 120,22 L 153,44 L 186,28 L 220,50',
    dots: [
      { x: 20,  y: 50 },
      { x: 53,  y: 32 },
      { x: 86,  y: 60 },
      { x: 120, y: 22 },
      { x: 153, y: 44 },
      { x: 186, y: 28 },
      { x: 220, y: 50 },
    ],
  },

  // Smooth route through scattered waypoints — navigation, location discovery.
  route: {
    path: 'M 30,55 Q 55,30 80,28 Q 110,30 130,42 Q 160,55 190,32 Q 210,20 220,42',
    dots: [
      { x: 30,  y: 55 },
      { x: 80,  y: 28 },
      { x: 130, y: 42 },
      { x: 190, y: 32 },
      { x: 220, y: 42 },
    ],
  },

  // Parallel line-item rows above a wider total — financial statements, roll-ups.
  rows: {
    path: 'M 30,20 L 130,20 M 30,34 L 130,34 M 30,48 L 130,48 M 30,62 L 220,62',
    dots: [
      { x: 130, y: 20 },
      { x: 130, y: 34 },
      { x: 130, y: 48 },
      { x: 30,  y: 62 },
      { x: 220, y: 62 },
    ],
  },

  // One input fanning into many outputs — allocation, distribution.
  split: {
    path: 'M 20,40 L 100,40 M 100,40 L 220,20 M 100,40 L 220,34 M 100,40 L 220,46 M 100,40 L 220,60',
    dots: [
      { x: 20,  y: 40 },
      { x: 100, y: 40 },
      { x: 220, y: 20 },
      { x: 220, y: 34 },
      { x: 220, y: 46 },
      { x: 220, y: 60 },
    ],
  },

  // Bracketed region with captured contents — regex groups, scoped expressions.
  capture: {
    path: 'M 50,20 Q 30,40 50,60 M 200,20 Q 220,40 200,60',
    dots: [
      { x: 50,  y: 20 },
      { x: 50,  y: 60 },
      { x: 95,  y: 40 },
      { x: 125, y: 40 },
      { x: 155, y: 40 },
      { x: 200, y: 20 },
      { x: 200, y: 60 },
    ],
  },

  // Horizontal flow with stage tick marks — CI/CD, sequential pipelines.
  pipeline: {
    path: 'M 20,40 L 220,40 M 55,32 L 55,48 M 95,32 L 95,48 M 135,32 L 135,48 M 175,32 L 175,48 M 215,32 L 215,48',
    dots: [
      { x: 55,  y: 40 },
      { x: 95,  y: 40 },
      { x: 135, y: 40 },
      { x: 175, y: 40 },
      { x: 215, y: 40 },
    ],
  },

  // Rays from a central source — lantern, illumination, beacons.
  radiate: {
    path: 'M 120,40 L 165,40 M 120,40 L 75,40 M 120,40 L 142,16 M 120,40 L 97,16 M 120,40 L 97,64 M 120,40 L 142,64',
    dots: [
      { x: 120, y: 40 },
      { x: 165, y: 40 },
      { x: 75,  y: 40 },
      { x: 142, y: 16 },
      { x: 97,  y: 16 },
      { x: 97,  y: 64 },
      { x: 142, y: 64 },
    ],
  },

  // Central node with radiating connections — integrations, bots.
  hub: {
    path: 'M 120,40 L 60,18 M 120,40 L 60,62 M 120,40 L 200,16 M 120,40 L 200,40 M 120,40 L 200,64',
    dots: [
      { x: 120, y: 40 },
      { x: 60,  y: 18 },
      { x: 60,  y: 62 },
      { x: 200, y: 16 },
      { x: 200, y: 40 },
      { x: 200, y: 64 },
    ],
  },

  // Overlapping bounding rectangles — object detection, segmentation.
  boxes: {
    path: 'M 30,20 L 100,20 L 100,55 L 30,55 Z M 120,28 L 200,28 L 200,62 L 120,62 Z',
    dots: [
      { x: 65,  y: 37 },
      { x: 160, y: 45 },
    ],
  },

  // Small cluster of circles like app icons in a folder — social sharing apps.
  icons: {
    path: 'M 90,28 A 10,10 0 1,1 110,28 A 10,10 0 1,1 90,28 M 130,28 A 10,10 0 1,1 150,28 A 10,10 0 1,1 130,28 M 90,52 A 10,10 0 1,1 110,52 A 10,10 0 1,1 90,52 M 130,52 A 10,10 0 1,1 150,52 A 10,10 0 1,1 130,52',
    dots: [],
  },

  // Vertical bars at varying heights on a baseline — LED strips, visualizers.
  bars: {
    path: 'M 20,55 L 220,55 M 35,55 L 35,32 M 55,55 L 55,22 M 75,55 L 75,38 M 95,55 L 95,26 M 115,55 L 115,32 M 135,55 L 135,18 M 155,55 L 155,30 M 175,55 L 175,40 M 195,55 L 195,24 M 215,55 L 215,32',
    dots: [
      { x: 35,  y: 32 },
      { x: 55,  y: 22 },
      { x: 75,  y: 38 },
      { x: 95,  y: 26 },
      { x: 115, y: 32 },
      { x: 135, y: 18 },
      { x: 155, y: 30 },
      { x: 175, y: 40 },
      { x: 195, y: 24 },
      { x: 215, y: 32 },
    ],
  },

  // Sliding window framing a region of a data stream — convolution kernels.
  kernel: {
    path: 'M 20,40 L 220,40 M 95,26 L 155,26 L 155,54 L 95,54 Z',
    dots: [
      { x: 35,  y: 40 },
      { x: 60,  y: 40 },
      { x: 85,  y: 40 },
      { x: 110, y: 40 },
      { x: 135, y: 40 },
      { x: 160, y: 40 },
      { x: 185, y: 40 },
      { x: 210, y: 40 },
    ],
  },

  // Row of character cells with a larger frame capturing one — OCR, character recognition.
  glyphs: {
    path: 'M 35,32 L 55,32 L 55,52 L 35,52 Z M 75,32 L 95,32 L 95,52 L 75,52 Z M 115,32 L 135,32 L 135,52 L 115,52 Z M 155,32 L 175,32 L 175,52 L 155,52 Z M 195,32 L 215,32 L 215,52 L 195,52 Z M 105,22 L 145,22 L 145,62 L 105,62 Z',
    dots: [
      { x: 125, y: 42 },
    ],
  },

  // Ball ricocheting off the floor between two paddles — pong, simple reflection.
  bounce: {
    path: 'M 30,15 L 42,15 L 42,58 L 30,58 Z M 198,15 L 210,15 L 210,58 L 198,58 Z M 42,22 L 150,65 L 194,50',
    dots: [
      { x: 194, y: 50 },
    ],
  },
} satisfies Record<string, ProjectShape>;
