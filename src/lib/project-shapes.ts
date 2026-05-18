// Mini-map SVGs for each project card. Each shape is a solid path with simple dot
// waypoints, drawn inside a 240x80 viewBox. The shape choice reflects the project's
// nature (linear pipeline, exploratory loop, parallel forks, signal wave, etc).

export type ProjectShape = {
  path: string;
  dots: { x: number; y: number }[];
};

export const PROJECT_SHAPE_VIEW = { width: 240, height: 80 } as const;

export const projectShapes: Record<string, ProjectShape> = {
  // Linear pipeline — sequential stages.
  line: {
    path: 'M 20,40 L 220,40',
    dots: [
      { x: 20,  y: 40 },
      { x: 70,  y: 40 },
      { x: 120, y: 40 },
      { x: 170, y: 40 },
      { x: 220, y: 40 },
    ],
  },

  // Closed loop — cyclic system, user exploration, returns to start.
  loop: {
    path: 'M 40,40 A 80,28 0 1,1 200,40 A 80,28 0 1,1 40,40 Z',
    dots: [
      { x: 40,  y: 40 },
      { x: 80,  y: 14 },
      { x: 160, y: 14 },
      { x: 200, y: 40 },
      { x: 160, y: 66 },
      { x: 80,  y: 66 },
    ],
  },

  // Fork — single path splits into two parallel branches that rejoin. Parallel
  // processing, composable engines, branch-and-merge workflows.
  fork: {
    path: 'M 20,40 L 70,40 L 130,18 L 190,40 L 220,40 M 70,40 L 130,62 L 190,40',
    dots: [
      { x: 20,  y: 40 },
      { x: 70,  y: 40 },
      { x: 130, y: 18 },
      { x: 130, y: 62 },
      { x: 190, y: 40 },
      { x: 220, y: 40 },
    ],
  },

  // Zigzag — scanning / search patterns (object detection, paddle games).
  zigzag: {
    path: 'M 20,62 L 60,18 L 100,62 L 140,18 L 180,62 L 220,18',
    dots: [
      { x: 20,  y: 62 },
      { x: 60,  y: 18 },
      { x: 100, y: 62 },
      { x: 140, y: 18 },
      { x: 180, y: 62 },
      { x: 220, y: 18 },
    ],
  },

  // Wave — signal / oscillation / convolution.
  wave: {
    path: 'M 20,40 Q 50,12 80,40 T 140,40 T 200,40 L 220,40',
    dots: [
      { x: 20,  y: 40 },
      { x: 50,  y: 12 },
      { x: 80,  y: 40 },
      { x: 110, y: 68 },
      { x: 140, y: 40 },
      { x: 170, y: 12 },
      { x: 200, y: 40 },
      { x: 220, y: 40 },
    ],
  },

  // Hub — central node with radiating connections. Integrations, Slack/API bots.
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

  // Meander — winding exploratory path (research, experimental studies).
  meander: {
    path: 'M 20,40 C 40,12 70,12 90,40 C 110,68 140,68 160,40 C 180,12 210,12 220,40',
    dots: [
      { x: 20,  y: 40 },
      { x: 55,  y: 18 },
      { x: 90,  y: 40 },
      { x: 125, y: 62 },
      { x: 160, y: 40 },
      { x: 195, y: 18 },
      { x: 220, y: 40 },
    ],
  },
};
