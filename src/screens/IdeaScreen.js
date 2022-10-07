import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import oem1 from '../assets/oem1.png';
import oem2 from '../assets/oem2.png';
import oem3 from '../assets/oem3.png';
import oemIcon1 from '../assets/icons/oem-step-1.svg';
import oemIcon2 from '../assets/icons/oem-step-2.svg';
import oemIcon3 from '../assets/icons/oem-step-3.svg';
import oemIcon4 from '../assets/icons/oem-step-4.svg';
import oemIcon5 from '../assets/icons/oem-step-5.svg';
import oemIcon6 from '../assets/icons/oem-step-6.svg';
import { useTranslation, Trans } from 'react-i18next';

function IdeaScreen() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('pages.idea.helmet')}</title>
      </Helmet>

      {/* <!-- OUR THOUGHTS --> */}
      <div className="container-fluid justify-content-center our__thoughts-container">
        <div className="thoughts-bg">
          <div className="outter-div col-12">
            <div className="col-10 inner-div">
              <div className="custom_section-title">
                <h1 className="custom_section-title-header">
                  {t('pages.idea.thoughts')}
                </h1>
              </div>
              <p>
                <span>{t('pages.idea.thoughtsContent')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--  OEM --> */}
      <div id="oem" className="oem-container">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">OEM</h1>
        </div>

        <div className="container oem-spacing">
          <article className="postcard oem-1-color">
            <span className="postcard__img_link">
              <img
                loading="lazy"
                className="postcard__img"
                src={oem1}
                alt="img not found"
              />
            </span>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title oem-1-color">
                {t('pages.idea.oem.section1.header')}
              </h1>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                {t('pages.idea.oem.section1.details')}
              </div>
              <ul className="postcard__tagbox">
                <HashLink
                  to="/contact/#contact"
                  className="tag__item tag__item oem-1-color"
                >
                  {t('pages.idea.oem.section1.button')}
                </HashLink>
              </ul>
            </div>
          </article>
          <article className="postcard oem-2-color">
            <span className="postcard__img_link">
              <img
                loading="lazy"
                className="postcard__img"
                src={oem2}
                alt="img not found"
              />
            </span>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title oem-2-color">
                {t('pages.idea.oem.section2.header')}
              </h1>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                {t('pages.idea.oem.section2.details')}
              </div>
            </div>
          </article>
          <article className="postcard oem-3-color">
            <span className="postcard__img_link">
              <img
                loading="lazy"
                className="postcard__img"
                src={oem3}
                alt="img not found"
              />
            </span>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title oem-3-color">
                {t('pages.idea.oem.section3.header')}
              </h1>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                {t('pages.idea.oem.section3.details')}
                <HashLink
                  to="/contact"
                  className="link-text"
                  title="contact us"
                >
                  {t('pages.idea.oem.section3.detailsLink')}
                </HashLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* <!-- OEM FLOW --> */}
      <div id="oemflow" className="oem-flow">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">
            {t('pages.idea.oemFlow.header')}
          </h1>
        </div>
        <div className="section-under-title">
          <p className="section-under-title-content">
            {t('pages.idea.oemFlow.description')}
          </p>
        </div>

        <div className="section_our_solution">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img loading="lazy" src={oemIcon1} alt="oem step icon" />
                    </div>
                    <div className="solu_title">
                      <h3>{t('pages.idea.oemFlow.step1.header')}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{t('pages.idea.oemFlow.step1.details')}</p>
                    </div>
                  </div>
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img loading="lazy" src={oemIcon2} alt="oem step icon" />
                    </div>
                    <div className="solu_title">
                      <h3>{t('pages.idea.oemFlow.step2.header')}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{t('pages.idea.oemFlow.step2.details')}</p>
                    </div>
                  </div>
                </div>
                <div className="solution_cards_box sol_card_top_3">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img loading="lazy" src={oemIcon3} alt="oem step icon" />
                    </div>
                    <div className="solu_title">
                      <h3>{t('pages.idea.oemFlow.step3.header')}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{t('pages.idea.oemFlow.step3.details')}</p>
                    </div>
                  </div>
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img loading="lazy" src={oemIcon4} alt="oem step icon" />
                    </div>
                    <div className="solu_title">
                      <h3>{t('pages.idea.oemFlow.step4.header')}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{t('pages.idea.oemFlow.step4.details')}</p>
                    </div>
                  </div>
                </div>

                <div className="solution_cards_box">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img loading="lazy" src={oemIcon5} alt="oem step icon" />
                    </div>
                    <div className="solu_title">
                      <h3>{t('pages.idea.oemFlow.step5.header')}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{t('pages.idea.oemFlow.step5.details')}</p>
                    </div>
                  </div>
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img loading="lazy" src={oemIcon6} alt="oem step icon" />
                    </div>
                    <div className="solu_title">
                      <h3>{t('pages.idea.oemFlow.step6.header')}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{t('pages.idea.oemFlow.step6.details')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IdeaScreen;
