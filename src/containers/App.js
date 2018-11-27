import React, { Component } from 'react';
import Header from '../components/header';
import Content from '../routes';
import Footer from '../components/footer';
import styles from '../styles/app.module.scss';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.appLayout}>
        <Header />
        <div className={styles.contentWrap}>
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
