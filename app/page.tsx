import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

export default function Home() {
  const mockActors = [
    { id: 1, name: 'Research Bot', status: 'Active', description: 'Web scraping and data aggregation.' },
    { id: 2, name: 'Social Monitor', status: 'Idle', description: 'Tracking trends and mentions.' },
    { id: 3, name: 'Content Gen', status: 'Active', description: 'Generating blog posts and summaries.' },
    { id: 4, name: 'Analytics', status: 'Maintenance', description: 'Processing weekly reports.' },
  ];

  return (
    <Layout>
      <div className="grid">
        {mockActors.map((actor) => (
          <GlassCard key={actor.id} className="actor-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '600' }}>
              {actor.name}
            </h2>
            <p style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {actor.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span 
                style={{ 
                  display: 'inline-block', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '1rem', 
                  fontSize: '0.75rem', 
                  fontWeight: '500',
                  backgroundColor: actor.status === 'Active' ? 'rgba(40, 167, 69, 0.2)' : 
                                   actor.status === 'Idle' ? 'rgba(255, 193, 7, 0.2)' : 
                                   'rgba(220, 53, 69, 0.2)',
                  color: actor.status === 'Active' ? '#28a745' : 
                         actor.status === 'Idle' ? '#ffc107' : 
                         '#dc3545',
                }}
              >
                {actor.status}
              </span>
              <Button size="sm" variant="secondary">
                Details
              </Button>
            </div>
          </GlassCard>
        ))}
        {/* Placeholder for adding new actor */}
        <GlassCard style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', cursor: 'pointer', borderStyle: 'dashed' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>+</div>
          <p style={{ fontWeight: '500' }}>Add New Actor</p>
        </GlassCard>
      </div>
    </Layout>
  );
}
