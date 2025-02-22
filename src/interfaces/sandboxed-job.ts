import { JobsOptions } from '../types';
import { JobJson } from './job-json';

/**
 * @see {@link https://docs.bullmq.io/guide/workers/sandboxed-processors}
 */
export interface SandboxedJob<T = any, R = any>
  extends Omit<JobJson, 'data' | 'opts' | 'returnValue'> {
  data: T;
  opts: JobsOptions;
  moveToDelayed: (timestamp: number, token?: string) => Promise<void>;
  log: (row: any) => void;
  updateData: (data: any) => Promise<void>;
  updateProgress: (value: object | number) => Promise<void>;
  returnValue: R;
}
