import React from 'react';
import Layout from '@/components/Layout';
import ActorCard from '@/components/ActorCard';
import GlassCard from '@/components/GlassCard';
import actorsData from '@/data/actors.json';
import { Actor } from '@/types';

export default function Home() {
  // Cast the imported JSON data to the Actor type
  const actors: Actor[] = actorsData as unknown as Actor[];

  return (
    <Layout>
      <div className="grid">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
        
        {/* Placeholder for adding new actor */}
        <GlassCard 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '200px', 
            cursor: 'pointer', 
            borderStyle: 'dashed',
            opacity: 0.7,
            transition: 'opacity 0.2s'
          }}
          className="hover:opacity-100" // Simple hover effect if using Tailwind, but we are using vanilla CSS, so inline style logic or class is better.
          // Since we are using modules mostly, let's just stick to inline for this simple placeholder or add a class in globals if needed.
          // I'll just use the existing inline style approach for now.
        >
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.5)' }}>+</div>
          <p style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)' }}>Add New Actor</p>
        </GlassCard>
      </div>
    </Layout>
  );
}
