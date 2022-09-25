import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import check from '../assets/icons/check-solid.svg';
import { useTranslation, Trans } from 'react-i18next';

export default function CheckoutSteps(props) {
  const { t, i18n } = useTranslation();

  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>
        {props.step1 ? (
          <img
            loading="lazy"
            className="step-icon"
            alt="icon not found"
            src={check}
          />
        ) : (
          ''
        )}
        {t('pages.checkout.step1')}
      </Col>
      <Col className={props.step2 ? 'active' : ''}>
        {props.step2 ? (
          <img
            loading="lazy"
            className="step-icon"
            alt="icon not found"
            src={check}
          />
        ) : (
          ''
        )}
        {t('pages.checkout.step2')}
      </Col>
      <Col className={props.step3 ? 'active' : ''}>
        {props.step3 ? (
          <img
            loading="lazy"
            className="step-icon"
            alt="icon not found"
            src={check}
          />
        ) : (
          ''
        )}
        {t('pages.checkout.step3')}
      </Col>
    </Row>
  );
}
