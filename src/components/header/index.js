import React, { Component } from 'react';
import styles from './index.module.scss';
import Avatar from './apple.png';

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.headerWrap}>
        <div className={styles.logo}>CBS Lite</div>
        <div className={styles.personalCenter}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
          <div>xinchen</div>
        </div>
      </div>
    );
  }
}

export default Header;
