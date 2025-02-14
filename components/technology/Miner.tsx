import Section from '../Section';
import Content from '../Content';
import P from '../P';
import Col from '../Col';
import H2 from '../H2';
import RParallax from '../RParallax';
// import Button from '../Button';

import { withTranslation } from '../../i18n';
import { styles } from '../../constants';

const Miner = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <RParallax percentage={0.5} speed={-13}>
        <Content direction="row">
          <Col flex style="algin-items: center;">
            <img src="/static/tech-miner.svg" />
          </Col>
          <Col flex style="justify-content: center;">
            <H2>{t('tech.miner')}</H2>
            <P mStyle="text-align: left;">{t('tech.miner.description')}</P>
          </Col>
        </Content>
        {/* <Content direction="row" padding="190px 0 0 0">
        <Col style="margin-right: 40px">
          <Button title="Mobile App" uri=""/>
        </Col>
        <Col style="margin-right: 40px">
          <Button title="Desktop App" uri=""/>
        </Col>
        <Col>
          <Button title="NAS" uri=""/>
        </Col>
      </Content> */}
        <style jsx>{`
          h2 {
            height: 80px;
            font-family: Montserrat;
            font-size: 60px;
            font-weight: 600;
            line-height: 1.33;
            letter-spacing: normal;
            color: #d7f2ee;
            margin-bottom: 60px;
          }

          @media only screen and (max-width: 1024px) {
            img {
              width: 100%;
            }
          }
        `}</style>
      </RParallax>
    </Section>
  );
};

export default withTranslation('technology')(Miner);
