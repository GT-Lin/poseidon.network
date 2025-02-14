import React from 'react';
import Page from '../layout/Page';
import Header from '../components/home/Header';
import Intro from '../components/home/Intro';

import Solutions from '../components/home/Solutions';
import Investors from '../components/home/Investors';
import Team from '../components/home/Team';
import Contact from '../components/Contact';
import HelpCompany from '../components/home/HelpCompany';
import SettingUp from '../components/home/SettingUp';
import MediaList from '../components/home/MediaList';
import { styles } from '../constants';
import { withTranslation } from '../i18n';

class Homepage extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer', 'home'],
    };
  }

  render() {
    return (
      <Page
        navColor={styles.dark}
        title={`Poseidon Network | ${this.props.t('home.html.title')}`}
      >
        <Header />
        <Intro />
        <Solutions />
        <HelpCompany />
        <SettingUp />
        <Team />
        <Investors />
        <MediaList />
        <Contact />
      </Page>
    );
  }
}

export default withTranslation('home')(Homepage);
