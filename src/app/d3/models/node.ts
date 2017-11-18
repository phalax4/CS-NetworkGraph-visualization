import APP_CONFIG from '../../app.config';
import * as d3 from 'd3';
export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  rank?: number;
  label?: string;
  url?: string;
  id: string;
  group?: number;
  linkCount = 0;

  constructor(id) {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(Math.log2(this.rank * 10000) / APP_CONFIG.N);
  }

  get r() {
    return Math.log2(this.rank * 10000);
  }

  get fontSize() {
    return (30 * Math.log2(this.rank * 10000) + 10) + 'px';
  }

  get color (): string {
    return 'purple';
  }
}
