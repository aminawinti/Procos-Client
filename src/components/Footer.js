import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation, Trans } from 'react-i18next';

import cpLogo from '../assets/cp_logo.svg';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-title">{t('footer.company')}</div>
            <div className="footer-link">
              <Link to="/about" className="footer-link">
                {t('navbar.about')}
              </Link>
            </div>
            <div className="footer-link">
              <Link to="/idea" className="footer-link">
                {t('navbar.idea')}
              </Link>
            </div>
            <div className="footer-link">
              <Link to="/contact" className="footer-link">
                {t('navbar.contact')}
              </Link>
            </div>
            <div className="footer-link">
              <HashLink to="/contact/#privacy" className="footer-link">
                {t('footer.privacy')}
              </HashLink>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title">{t('products.header')}</div>
            <div className="footer-link">
              <Link
                to={'/search?&category=クレンジング洗顔'}
                className="footer-link"
              >
                {t('categories.cat1')}
              </Link>
            </div>
            <div className="footer-link">
              <Link
                to={'/search?&category=化粧水特殊集中'}
                className="footer-link"
              >
                {t('categories.cat2')}
              </Link>
            </div>
            <div className="footer-link">
              <Link
                to={'/search?&category=バック　クリーム'}
                className="footer-link"
              >
                {t('categories.cat3')}
              </Link>
            </div>
            <div className="footer-link">
              <Link
                to={'/search?&category=スペシャル　ケア'}
                className="footer-link"
              >
                {t('categories.cat4')}
              </Link>
            </div>
            <div className="footer-link">
              <Link
                to={'/search?&category=メイク・健康食品'}
                className="footer-link"
              >
                {t('categories.cat5')}
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title">{t('navbar.services')}</div>
            <div className="footer-link">
              <HashLink to="/services/#iot" className="footer-link">
                {t('services.service1')}
              </HashLink>
            </div>
            <div className="footer-link">
              <HashLink to="/services/#dev" className="footer-link">
                {t('services.service2')}
              </HashLink>
            </div>
            <div className="footer-link">
              <HashLink to="/services/#ai" className="footer-link">
                {t('services.service3')}
              </HashLink>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title">{t('infos')}</div>
            <div className="footer-link-info">
              1-19-19 Makiochi, Minoo City, Osaka
            </div>
            <div className="footer-link-info">(81) 072 721 5108</div>
            <div className="footer-link-info">info@cp.co.jp</div>
            <div className="footer-logo">
              <Link to="/" onClick={handleClick} className="footer-link">
                <img
                  loading="lazy"
                  src={cpLogo}
                  width="48"
                  height="auto"
                  alt="cp logo"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
