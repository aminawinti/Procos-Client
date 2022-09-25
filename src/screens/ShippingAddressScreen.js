import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import Container from 'react-bootstrap/Container';
import { useTranslation, Trans } from 'react-i18next';

export default function ShippingAddressScreen() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate('/placeorder');
  };

  useEffect(() => {
    ctxDispatch({ type: 'SET_FULLBOX_OFF' });
  }, [ctxDispatch, fullBox]);

  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>

      <Container className="small-container register__container">
        <Helmet>
          <title>{t('pages.shipping.helmet')}</title>
        </Helmet>

        <h1 className="page__header">{t('pages.shipping.header')}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="" controlId="fullName">
            <Form.Control
              className="register_form-control"
              placeholder={t('pages.shipping.fullname')}
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="" controlId="address">
            <Form.Control
              className="register_form-control"
              placeholder={t('pages.shipping.address')}
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="" controlId="city">
            <Form.Control
              className="register_form-control"
              placeholder={t('pages.shipping.city')}
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="" controlId="postalCode">
            <Form.Control
              className="register_form-control"
              placeholder={t('pages.shipping.postalCode')}
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="" controlId="country">
            <Form.Control
              className="register_form-control"
              placeholder={t('pages.shipping.country')}
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>
          <div className="register__submit">
            <Button className="register__submit-button" type="submit">
              {t('pages.shipping.button')}
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
