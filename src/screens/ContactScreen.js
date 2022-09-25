import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useTranslation, Trans } from 'react-i18next';

function ContactScreen() {
  const { t, i18n } = useTranslation();
  const [btnStatus, setBtnStatus] = useState(true);

  function handleCkeckboxChange(e) {
    const ckeckbox = document.getElementsByName('checkbox')[0];
    setBtnStatus(!ckeckbox.checked);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'contact_form_template', e.target, 'MseIAmTh0S2jNtH4c')
      .then(
        (result) => {
          toast.success(t('pages.contact.section1.success'), {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            newestOnTop: true,
          });
        },
        (error) => {
          toast.error(error.text, {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            newestOnTop: true,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>{t('pages.contact.helmet')}</title>
      </Helmet>

      <div id="form" className="contact__page-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
              <div className="contact-form-inner">
                <h2 className="contact-form-inner-header">
                  {t('pages.contact.section1.header')}
                </h2>
                <p className="contact-intro-p">
                  {t('pages.contact.section1.sentence1')}
                  <HashLink to="#privacy" className="color-2-theme">
                    {t('pages.contact.section1.sentence1Link')}
                  </HashLink>
                  {t('pages.contact.section1.sentence1Remain')}
                  <br />
                  {t('pages.contact.section1.sentence2')}
                </p>
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="firstName"
                        placeholder={t('pages.contact.section1.fname')}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="lastName"
                        placeholder={t('pages.contact.section1.lname')}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        placeholder={t('pages.contact.section1.email')}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="phone"
                        placeholder={t('pages.contact.section1.phone')}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        placeholder={t('pages.contact.section1.subject')}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <textarea
                        name="message"
                        cols="40"
                        rows="10"
                        className="noResizer textarea-section"
                        placeholder={t('pages.contact.section1.message')}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check"
                      name="checkbox"
                      onChange={handleCkeckboxChange}
                    />
                    <label className="form-check-label" htmlFor="check">
                      {t('pages.contact.section1.agree')}
                    </label>
                  </div>
                  <div className="contact-submit">
                    <input
                      type="submit"
                      id="btncheck"
                      value={t('pages.contact.section1.button')}
                      className="submit-btn btn-disabled"
                      disabled={btnStatus}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
              <div className="contact-address-area">
                <h2 className="contact-address-area-header">
                  {t('pages.contact.section2.header')}
                </h2>
                <div className="contact-address-area-content">
                  <p>{t('pages.contact.section2.sentence')}</p>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker-alt color-theme" />
                      {t('pages.about.addressContent')}
                    </li>
                    <li>
                      <i className="fa fa-phone color-theme" />
                      (81) 072 721 5108
                    </li>
                    <li>
                      <i className="fa fa-fax color-theme" />
                      (81) 072 721 5107
                    </li>
                    <li className="pb-5">
                      <i className="fa fa-envelope-open color-theme" />
                      info@cp.co.jp
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="privacy-container">
            <h2 id="privacy" className="privacy-policy-header">
              {t('pages.contact.section3.header')}
            </h2>
            <div className="row">
              <div className="privacy-policy-content">
                <p className="privacy-intro-p">
                  {t('pages.contact.section3.sentence1')}
                </p>
                <h4 className="privacy-inner-header">
                  {t('pages.contact.section3.sentence2')}
                </h4>
                <p className="privacy-inner-subheader">
                  {t('pages.contact.section3.sentence3')}
                  <br />
                  {t('pages.contact.section3.sentence4')}
                </p>
                <div className="privacy-inner-list">
                  <span className="check-icon">✓</span>
                  {t('pages.contact.section3.bullet1')}
                  <br />
                  <span className="check-icon">✓</span>
                  {t('pages.contact.section3.bullet2')}
                  <br />
                  <span className="check-icon">✓</span>
                  {t('pages.contact.section3.bullet3')}
                  <br />
                  <span className="check-icon">✓</span>
                  {t('pages.contact.section3.bullet4')}
                  <br />
                  <span className="check-icon">✓</span>
                  {t('pages.contact.section3.bullet5')}
                  <br />
                  <span className="check-icon">✓</span>
                  {t('pages.contact.section3.bullet6')}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ContactScreen;
