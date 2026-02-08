export interface Actor {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'error' | 'maintenance';
  description: string;
  notionLink: string;
  icon?: string;
}
