import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = (): JSX.Element => {
  return (
    <div className={styles.navbar}>

      <div className={styles.navContainer}>

        <Link className={styles.image} to="/">
          <img src="/lego-icon.png" alt="Baseline" />
        </Link>

        <div className={styles.titleText}>
          <h1>LEGO Clicker</h1>
        </div>

        <Link className={styles.image} to="/">
          <img src="/lego-icon.png" alt="Baseline" />
        </Link>

      </div>

    </div>
  );
};

export default Navbar;
