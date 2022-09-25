import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ceo from '../assets/icons/ceo.png';
import { useTranslation, Trans } from 'react-i18next';
import { useEffect } from 'react';

function AboutScreen() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('pages.about.helmet')}</title>
      </Helmet>

      {/* <!-- Welcome --> */}
      <div id="about" className="welcome-container">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">{t('pages.about.welcome')}</h1>
        </div>

        <div className="col-sm-10 col-md-10 col-lg-8 col-xs-12">
          <div className="welcome-content">
            <div className="quote-icon quote-icon-style">
              <i className="fa fa-quote-left"></i>
            </div>
            <p className="welcome-content-p">
              {t('pages.about.welcomeContent')}
            </p>

            <div className="welcome__card-footer">
              <div className="welcome__card-footer-content">
                <img
                  loading="lazy"
                  className="ceo-icon"
                  src={ceo}
                  alt="person icon"
                />
                <div className="welcome__card-footer-details">
                  <h6 className="ceo-style">{t('pages.about.ceoName')}</h6>
                  <small className="job-title-style">
                    {t('pages.about.ceoPosition')}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Company Profile --> */}
      <div className="company-profile">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">
            {t('pages.about.companyProfile')}
          </h1>
        </div>

        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 company-profile-content">
          <Row xs={1} md={2} lg={3} className="g-0">
            <Card className="color-block-wrapper">
              <Card.Body>
                <div className="color-block color-block-icon start">
                  <Card.Title className="color-block-text">
                    {t('pages.about.startDate')}
                  </Card.Title>
                </div>

                <div className="color-block-bottom">
                  <Card.Text className="block-text">
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.startDateContent')}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="color-block-wrapper">
              <Card.Body>
                <div className="color-block color-block-icon activity">
                  <Card.Title className="color-block-text">
                    {' '}
                    {t('pages.about.mainActivity')}
                  </Card.Title>
                </div>

                <div className="color-block-bottom">
                  <Card.Text className="block-text">
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.mainActivityContent')}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="color-block-wrapper">
              <Card.Body>
                <div className="color-block color-block-icon address">
                  <Card.Title className="color-block-text">
                    {t('pages.about.address')}
                  </Card.Title>
                </div>

                <div className="color-block-bottom">
                  <Card.Text className="block-text">
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.addressContent')}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="color-block-wrapper">
              <Card.Body>
                <div className="color-block color-block-icon affiliates">
                  <Card.Title className="color-block-text">
                    {t('pages.about.affiliates')}
                  </Card.Title>
                </div>

                <div className="color-block-bottom">
                  <Card.Text className="block-text">
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.affiliatesContent.1')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.affiliatesContent.2')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.affiliatesContent.3')}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="color-block-wrapper">
              <Card.Body>
                <div className="color-block color-block-icon sales">
                  <Card.Title className="color-block-text">
                    {t('pages.about.sales')}
                  </Card.Title>
                </div>

                <div className="color-block-bottom">
                  <Card.Text className="block-text">
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.salesContent.1')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.salesContent.2')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.salesContent.3')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.salesContent.4')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.salesContent.5')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.salesContent.6')}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="color-block-wrapper">
              <Card.Body>
                <div className="color-block color-block-icon banks">
                  <Card.Title className="color-block-text">
                    {t('pages.about.tradingBanks')}
                  </Card.Title>
                </div>

                <div className="color-block-bottom">
                  <Card.Text className="block-text">
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.tradingBanksContent.1')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.tradingBanksContent.2')}
                    <br />
                    <span className="square-color">⬥</span>{' '}
                    {t('pages.about.tradingBanksContent.3')}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>

      {/* <!-- Corporate History --> */}
      <div className="corporate-history">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">
            {t('pages.about.corporateHistory')}
          </h1>
        </div>

        <div className="row">
          <div className="col-12 corporate__timeline-container">
            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>{t('pages.about.ts1.date')}</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="single-timeline-content d-flex ">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts1.details')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>2005</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts2.details')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>2004</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts3.details')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>1999</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts4.details')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>1997</p>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts5.detail1')}</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts5.detail2')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>1996</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts6.details')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div className="timeline-date">
                <p>{t('pages.about.ts7.date')}</p>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts7.detail1')}</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="single-timeline-content d-flex">
                    <div className="timeline-icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div className="timeline-text">
                      <p>{t('pages.about.ts7.detail2')}</p>
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
export default AboutScreen;
