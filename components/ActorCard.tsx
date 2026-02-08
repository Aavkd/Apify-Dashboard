import React from 'react';
import { Actor } from '../types';
import GlassCard from './GlassCard';
import StatusBadge from './StatusBadge';
import styles from './ActorCard.module.css';

interface ActorCardProps {
  actor: Actor;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {
  return (
    <GlassCard className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          {actor.icon && <span className={styles.icon}>{actor.icon}</span>}
          <h3 className={styles.title}>{actor.name}</h3>
        </div>
        <StatusBadge status={actor.status} />
      </div>
      <p className={styles.description}>{actor.description}</p>
      <div className={styles.footer}>
        <a
          href={actor.notionLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Documentation &rarr;
        </a>
      </div>
    </GlassCard>
  );
};

export default ActorCard;
