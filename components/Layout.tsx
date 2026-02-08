import React from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className={styles.title}>
            Actor Dashboard
          </h1>
        </div>
      </header>
      <main className={`${styles.main} container`}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Actor Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
