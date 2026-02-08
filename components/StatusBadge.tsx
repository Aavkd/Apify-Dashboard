import React from 'react';
import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  status: 'online' | 'offline' | 'error' | 'maintenance';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <div className={`${styles.badge} ${styles[status]}`}>
      <span className={styles.dot}></span>
      <span className={styles.label}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  );
};

export default StatusBadge;
