import { ActorConfig, Task, RunLog, ExecutionState, RunStatus, TaskStatus } from '../data/models';

export interface Actor {
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

// Re-export types
export type { ActorConfig, Task, RunLog, ExecutionState, RunStatus, TaskStatus };
