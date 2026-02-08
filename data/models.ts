export interface ActorConfig {
  schedule: string; // e.g., cron expression
  env: Record<string, string>;
  maxRetries: number;
}

export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export type RunStatus = 'success' | 'failed' | 'running' | 'pending';

export interface RunLog {
  id: string;
  actorId: string;
  status: RunStatus;
  startTime: string;
  endTime?: string;
  logs: string[]; // Simple array of log lines
}

export interface ExecutionState {
  lastRun?: string;
  status: 'idle' | 'running' | 'paused';
  currentRunId?: string;
}

// Extend the existing Actor interface (or replace it if we update types/index.ts)
export interface ActorModel {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'error' | 'maintenance';
  description: string;
  notionLink: string;
  icon?: string;
  config: ActorConfig;
  tasks: Task[];
  logs: RunLog[];
  executionState: ExecutionState;
}
