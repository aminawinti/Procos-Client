import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import iotIcon from '../assets/tech/iot-icon-white.png';
import aiIcon from '../assets/tech/ai-icon-white.png';
import devIcon from '../assets/tech/dev-icon-white.png';
import embeddedSystemIcon from '../assets/tech/iot/embedded_systems_development/embedded-system-icon.png';
import embeddedSystem from '../assets/tech/iot/embedded_systems_development/embedded-system-image.jpg';
import wirelessIcon from '../assets/tech/iot/wireless_technologies/wireless-technologies-icon.png';
import wireless from '../assets/tech/iot/wireless_technologies/wireless-technologies-image.jpg';
import pcbIcon from '../assets/tech/iot/pcb_design/pcb-design-icon.png';
import pcb from '../assets/tech/iot/pcb_design/pcb-design-image.jpg';
import dataIcon from '../assets/tech/ai/data_analytics/ai-data-analytics-icon.png';
import data from '../assets/tech/ai/data_analytics/data-analytics-image.jpg';
import aiAutomationIcon from '../assets/tech/ai/automation/ai-automation-icon.png';
import aiAutomation from '../assets/tech/ai/automation/ai-automation-image.jpg';
import aiConsultingIcon from '../assets/tech/ai/ai_consulting/ai-consulting-icon.png';
import aiConsulting from '../assets/tech/ai/ai_consulting/ai-consulting-image.jpeg';
import mobileIcon from '../assets/tech/dev/mobile/mobile-icon.png';
import mobile from '../assets/tech/dev/mobile/android-ios-applications-image.jpeg';
import websitesIcon from '../assets/tech/dev/websites/websites-icon.png';
import websites from '../assets/tech/dev/websites/websites-image.jpg';
import desktopAppsIcon from '../assets/tech/dev/desktop/desktop-applications-icon.png';
import desktop from '../assets/tech/dev/desktop/desktop-applications-image.jpg';
import desktopExampleIcon from '../assets/tech/dev/desktop/example-icon.png';
import ourServicesIcon from '../assets/tech/our-services.svg';
import { useTranslation, Trans } from 'react-i18next';
import { useEffect } from 'react';

const SubServiceHeader = (props) => {
  return (
    <div className="sub-service-header" id={props.id}>
      <h2>{props.header}</h2>
    </div>
  );
};

const ServiceHeader = (props) => {
  return (
    <div className="services__section-subheader" id={props.id}>
      <h1 className="services__section-subheader--content">
        {props.serviceHeader}
      </h1>
      <p className="services__section-subheader--description">
        <HashLink to={`/services/#${props.id1}`} className="subservice">
          {props.subService1}
        </HashLink>
        <span className="color-2-theme text-bold">{' | '}</span>
        <HashLink to={`/services/#${props.id2}`} className="subservice">
          {props.subService2}
        </HashLink>
        <span className="color-2-theme text-bold">{' | '}</span>
        <HashLink to={`/services/#${props.id3}`} className="subservice">
          {props.subService3}
        </HashLink>
      </p>
    </div>
  );
};

const ServiceContentLeft = (props) => {
  return (
    <div className="sub-service-container left">
      <div className="service-section-item">
        <img
          loading="lazy"
          src={props.mainImg}
          alt={props.altMainImg}
          className="img-responsive"
        />
      </div>

      <div className="service-section-item">
        <div className="row service-side">
          <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
            <div className="icon">
              <img loading="lazy" src={props.icon1} alt={props.altIcon1} />
            </div>
          </div>
          <div className="col-md-10 col-sm-10 col-xs-10 col-lg-10">
            <h4 className="subservice-item-header">
              {props.paragraph_1_header}
            </h4>
            <p className="subservice-item-p">{props.paragraph_1_content}</p>
          </div>
        </div>
        <div className="row service-side">
          <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
            <div className="icon">
              <img loading="lazy" src={props.icon2} alt={props.altIcon2} />
            </div>
          </div>
          <div className="col-md-10 col-sm-10 col-xs-10 col-lg-10">
            <h4 className="subservice-item-header">
              {props.paragraph_2_header}
            </h4>
            <p className="subservice-item-p">{props.paragraph_2_content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceContentRight = (props) => {
  return (
    <div className="sub-service-container right">
      <div className="service-section-item">
        <div className="row service-side">
          <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
            <div className="icon">
              <img loading="lazy" src={props.icon1} alt={props.altIcon1} />
            </div>
          </div>
          <div className="col-md-10 col-sm-10 col-xs-10 col-lg-10">
            <h4 className="subservice-item-header">
              {props.paragraph_1_header}
            </h4>
            <p className="subservice-item-p">{props.paragraph_1_content}</p>
          </div>
        </div>
        <div className="row service-side">
          <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
            <div className="icon">
              <img loading="lazy" src={props.icon2} alt={props.altIcon2} />
            </div>
          </div>
          <div className="col-md-10 col-sm-10 col-xs-10 col-lg-10">
            <h4 className="subservice-item-header">
              {props.paragraph_2_header}
            </h4>
            <p className="subservice-item-p">{props.paragraph_2_content}</p>
          </div>
        </div>
      </div>
      <div className="service-section-item">
        <img
          loading="lazy"
          src={props.mainImg}
          alt={props.altMainImg}
          className="img-responsive"
        />
      </div>
    </div>
  );
};

function ServicesScreen() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('pages.services.helmet')}</title>
      </Helmet>

      <div className="services__page-container">
        <div className="container-fluid justify-content-center services__group-container">
          <div className="services__group-bg">
            <div className="services__section-header">
              <h1 className="services__section-header--content">
                {t('pages.services.header')}
              </h1>
            </div>
            <div className="flex-container">
              <div className="flex-item">
                <div className="services-card service-bg iot-bg-card">
                  <div className="services-card-color-overlay">
                    <p className="service-description">
                      {t('pages.services.card1Details')}
                    </p>
                    <p className="button-explore">
                      <HashLink to="/services/#iot">
                        <img loading="lazy" src={iotIcon} alt="iot icon" />
                        <span id="explore1">{t('pages.services.explore')}</span>
                      </HashLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-item">
                <div className="services-card service-bg dev-bg-card">
                  <div className="services-card-color-overlay">
                    <p className="service-description">
                      {t('pages.services.card2Details')}
                    </p>

                    <p className="button-explore">
                      <HashLink to="/services/#dev">
                        <img loading="lazy" src={devIcon} alt="dev icon" />
                        <span id="explore2">{t('pages.services.explore')}</span>
                      </HashLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-item">
                <div className="services-card service-bg ai-bg-card">
                  <div className="services-card-color-overlay">
                    <p className="service-description">
                      {t('pages.services.card3Details')}
                    </p>

                    <p className="button-explore">
                      <HashLink to="/services/#ai">
                        <img loading="lazy" src={aiIcon} alt="ai icon" />
                        <span id="explore3">{t('pages.services.explore')}</span>
                      </HashLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceHeader
          id="iot"
          serviceHeader={t('pages.services.section1.header')}
          subService1={t('pages.services.section1.part1.header')}
          id1="embedded"
          subService2={t('pages.services.section1.part2.header')}
          id2="wireless"
          subService3={t('pages.services.section1.part3.header')}
          id3="pcb"
        />

        <SubServiceHeader
          id="embedded"
          header={t('pages.services.section1.part1.header')}
        />

        <ServiceContentLeft
          mainImg={embeddedSystem}
          altMainImg="embedded"
          icon1={embeddedSystemIcon}
          altIcon1="embedded icon"
          paragraph_1_header={t('pages.services.section1.part1.title1')}
          paragraph_1_content={t('pages.services.section1.part1.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section1.part1.title2')}
          paragraph_2_content={t('pages.services.section1.part1.details2')}
        />

        <SubServiceHeader
          id="wireless"
          header={t('pages.services.section1.part2.header')}
        />

        <ServiceContentRight
          icon1={wirelessIcon}
          altIcon1="wireless icon"
          paragraph_1_header={t('pages.services.section1.part2.title1')}
          paragraph_1_content={t('pages.services.section1.part2.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section1.part2.title2')}
          paragraph_2_content={t('pages.services.section1.part2.details2')}
          mainImg={wireless}
          altMainImg="wireless"
        />

        <SubServiceHeader
          id="pcb"
          header={t('pages.services.section1.part3.header')}
        />

        <ServiceContentLeft
          mainImg={pcb}
          altMainImg="pcb"
          icon1={pcbIcon}
          altIcon1="pcb icon"
          paragraph_1_header={t('pages.services.section1.part3.title1')}
          paragraph_1_content={t('pages.services.section1.part3.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section1.part3.title2')}
          paragraph_2_content={t('pages.services.section1.part3.details2')}
        />

        <ServiceHeader
          id="dev"
          serviceHeader={t('pages.services.section2.header')}
          subService1={t('pages.services.section2.part1.header')}
          id1="web"
          subService2={t('pages.services.section2.part2.header')}
          id2="desktop"
          subService3={t('pages.services.section2.part3.header')}
          id3="mobile"
        />

        <SubServiceHeader
          id="web"
          header={t('pages.services.section2.part1.header')}
        />

        <ServiceContentLeft
          mainImg={websites}
          altMainImg="websites"
          icon1={websitesIcon}
          altIcon1="websites icon"
          paragraph_1_header={t('pages.services.section2.part1.title1')}
          paragraph_1_content={t('pages.services.section2.part1.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section2.part1.title2')}
          paragraph_2_content={t('pages.services.section2.part1.details2')}
        />

        <SubServiceHeader
          id="desktop"
          header={t('pages.services.section2.part2.header')}
        />

        <ServiceContentRight
          icon1={desktopAppsIcon}
          altIcon1="desktop icon"
          paragraph_1_header={t('pages.services.section2.part2.title1')}
          paragraph_1_content={t('pages.services.section2.part2.details1')}
          icon2={desktopExampleIcon}
          altIcon2="example icon"
          paragraph_2_header={t('pages.services.section2.part2.title2')}
          paragraph_2_content={t('pages.services.section2.part2.details2')}
          mainImg={desktop}
          altMainImg="desktop"
        />

        <SubServiceHeader
          id="mobile"
          header={t('pages.services.section2.part3.header')}
        />

        <ServiceContentLeft
          mainImg={mobile}
          altMainImg="mobile"
          icon1={mobileIcon}
          altIcon1="mobile icon"
          paragraph_1_header={t('pages.services.section2.part3.title1')}
          paragraph_1_content={t('pages.services.section2.part3.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section2.part3.title2')}
          paragraph_2_content={t('pages.services.section2.part3.details2')}
        />

        <ServiceHeader
          id="ai"
          serviceHeader={t('pages.services.section3.header')}
          subService1={t('pages.services.section3.part1.header')}
          id1="consulting"
          subService2={t('pages.services.section3.part2.header')}
          id2="analytics"
          subService3={t('pages.services.section3.part3.header')}
          id3="automation"
        />

        <SubServiceHeader
          id="consulting"
          header={t('pages.services.section3.part1.header')}
        />

        <ServiceContentLeft
          mainImg={aiConsulting}
          altMainImg="AI consulting"
          icon1={aiConsultingIcon}
          altIcon1="AI consulting icon"
          paragraph_1_header={t('pages.services.section3.part1.title1')}
          paragraph_1_content={t('pages.services.section3.part1.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section3.part1.title2')}
          paragraph_2_content={t('pages.services.section3.part1.details2')}
        />

        <SubServiceHeader
          id="analytics"
          header={t('pages.services.section3.part2.header')}
        />

        <ServiceContentRight
          icon1={dataIcon}
          altIcon1="analytics icon"
          paragraph_1_header={t('pages.services.section3.part2.title1')}
          paragraph_1_content={t('pages.services.section3.part2.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section3.part2.title2')}
          paragraph_2_content={t('pages.services.section3.part2.details2')}
          mainImg={data}
          altMainImg="analytics"
        />

        <SubServiceHeader
          id="automation"
          header={t('pages.services.section3.part3.header')}
        />

        <ServiceContentLeft
          mainImg={aiAutomation}
          altMainImg="automation"
          icon1={aiAutomationIcon}
          altIcon1="automation icon"
          paragraph_1_header={t('pages.services.section3.part3.title1')}
          paragraph_1_content={t('pages.services.section3.part3.details1')}
          icon2={ourServicesIcon}
          altIcon2="services icon"
          paragraph_2_header={t('pages.services.section3.part3.title2')}
          paragraph_2_content={t('pages.services.section3.part3.details2')}
        />
      </div>
    </div>
  );
}
export default ServicesScreen;
