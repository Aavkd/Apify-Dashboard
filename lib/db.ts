import fs from 'fs/promises';
import path from 'path';
import { Actor, ActorConfig, Task, RunLog, TaskStatus } from '../types';

const DATA_FILE = path.join(process.cwd(), 'data', 'actors.json');

async function readActors(): Promise<Actor[]> {
  const data = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

async function writeActors(actors: Actor[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(actors, null, 2));
}

export async function getActors(): Promise<Actor[]> {
  return readActors();
}

export async function getActor(id: string): Promise<Actor | undefined> {
  const actors = await readActors();
  return actors.find((a) => a.id === id);
}

export async function updateActorConfig(id: string, config: Partial<ActorConfig>): Promise<Actor | null> {
  const actors = await readActors();
  const index = actors.findIndex((a) => a.id === id);
  if (index === -1) return null;

  actors[index].config = { ...actors[index].config, ...config };
  await writeActors(actors);
  return actors[index];
}

export async function getTasks(actorId: string): Promise<Task[]> {
  const actor = await getActor(actorId);
  return actor ? actor.tasks : [];
}

export async function addTask(actorId: string, task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task | null> {
  const actors = await readActors();
  const index = actors.findIndex((a) => a.id === actorId);
  if (index === -1) return null;

  const newTask: Task = {
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...task,
  };

  actors[index].tasks.push(newTask);
  await writeActors(actors);
  return newTask;
}

export async function updateTaskStatus(actorId: string, taskId: string, status: TaskStatus): Promise<Task | null> {
  const actors = await readActors();
  const actorIndex = actors.findIndex((a) => a.id === actorId);
  if (actorIndex === -1) return null;

  const taskIndex = actors[actorIndex].tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) return null;

  actors[actorIndex].tasks[taskIndex].status = status;
  actors[actorIndex].tasks[taskIndex].updatedAt = new Date().toISOString();
  
  await writeActors(actors);
  return actors[actorIndex].tasks[taskIndex];
}

export async function addLog(actorId: string, log: Omit<RunLog, 'id'>): Promise<RunLog | null> {
  const actors = await readActors();
  const index = actors.findIndex((a) => a.id === actorId);
  if (index === -1) return null;

  const newLog: RunLog = {
    id: Math.random().toString(36).substring(7),
    ...log,
  };

  if (!actors[index].logs) {
    actors[index].logs = [];
  }
  actors[index].logs.push(newLog);
  await writeActors(actors);
  return newLog;
}
