import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/lego-icon.png" alt="Baseline" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
