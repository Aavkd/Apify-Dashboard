import React from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.glassCard} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
