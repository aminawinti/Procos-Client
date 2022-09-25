import Axios from 'axios';
import React, { useContext, useEffect, useState, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import Container from 'react-bootstrap/Container';
import edit from '../assets/icons/edit.svg';
import Table from 'react-bootstrap/Table';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useTranslation, Trans } from 'react-i18next';
import emailjs from '@emailjs/browser';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const [orderId, setOrderId] = useState([]);
  const [creationDate, setCreationDate] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(
        'https://procos.herokuapp.com/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);

      orderId.push(data.order._id);
      creationDate.push(data.order.createdAt.substring(0, 10));

      const templateParams = {
        from_name: 'Procos Cosmetics',
        to_name: `${userInfo.name}`,
        message: 'Order completed successfully!',
        to_email: `${userInfo.email}`,
        order_id: orderId[0],
        order_date: creationDate[0],
        full_name: `${cart.shippingAddress.fullName}`,
        address: `${cart.shippingAddress.address}`,
        city: `${cart.shippingAddress.city}`,
        postal_code: `${cart.shippingAddress.postalCode}`,
        country: `${cart.shippingAddress.country}`,
      };

      emailjs
        .send(
          'gmail',
          'completed_order_template',
          templateParams,
          'MseIAmTh0S2jNtH4c'
        )
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log('FAILED...', error);
          }
        );
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    }
  }, [cart.shippingAddress, navigate]);

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <Container className="place-order-container">
        <Helmet>
          <title>{t('pages.placeOrder.helmet')}</title>
        </Helmet>

        <h1 className="page__header">{t('pages.placeOrder.header')}</h1>

        {cart.cartItems.length === 0 ? (
          <div className="no-order">
            <MessageBox variant="info">
              {t('pages.placeOrder.noOrder1')}{' '}
              <Link className="go-shopping-link" to="/">
                {t('pages.placeOrder.noOrder2')} 🡪
              </Link>
            </MessageBox>
          </div>
        ) : (
          <Col>
            <Card className="place-order-card">
              <Card.Body>
                <div className="card-body-container">
                  <Card.Title className="place-order__card-title">
                    {t('pages.placeOrder.contactInfos')}
                  </Card.Title>
                  <Link
                    className="edit-icon-container"
                    to="/shipping"
                    title={t('pages.placeOrder.edit')}
                  >
                    <img
                      loading="lazy"
                      className="edit-icon"
                      alt="icon not found"
                      src={edit}
                    />
                  </Link>
                </div>
                <Card.Text className="place-order__card-contact-infos">
                  <div className="place-order__card-contact-info">
                    <span className="place-order__card-contact-infos-header">
                      {t('pages.placeOrder.name')}
                    </span>{' '}
                    {cart.shippingAddress.fullName}
                  </div>
                  <div className="place-order__card-contact-info">
                    <span className="place-order__card-contact-infos-header">
                      {t('pages.placeOrder.email')}
                    </span>{' '}
                    {userInfo.email}
                  </div>
                  <div className="place-order__card-contact-info">
                    <span className="place-order__card-contact-infos-header">
                      {t('pages.placeOrder.address')}
                    </span>{' '}
                    {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                    {cart.shippingAddress.postalCode},{' '}
                    {cart.shippingAddress.country}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="place-order-card">
              <Card.Body>
                <div className="card-body-container">
                  <Card.Title className="place-order__card-title">
                    {t('pages.placeOrder.details')}
                  </Card.Title>

                  <Link
                    className="edit-icon-container"
                    to="/cart"
                    title={t('pages.placeOrder.edit')}
                  >
                    <img
                      loading="lazy"
                      className="edit-icon"
                      alt="icon not found"
                      src={edit}
                    />
                  </Link>
                </div>

                <Table className="place-order__table" responsive="xl">
                  <thead className="place-order__table-head">
                    <tr>
                      <th>{t('pages.placeOrder.prodImage')}</th>
                      <th>{t('pages.placeOrder.prodName')}</th>
                      <th>{t('pages.placeOrder.prodQuantity')}</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {cart.cartItems.map((item) => (
                      <tr className="place-order__table-body" key={item._id}>
                        <td>
                          <img
                            loading="lazy"
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded img-thumbnail"
                          ></img>
                        </td>
                        <td>
                          <Link to={`/product/${item.slug}`}>{item.name}</Link>
                        </td>
                        <td>
                          <span>{item.quantity}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <div className="register__submit">
              <Button
                className="register__submit-button"
                disabled={cart.cartItems.length === 0}
                type="button"
                onClick={placeOrderHandler}
              >
                {t('pages.placeOrder.placeOrderButton')}
              </Button>
            </div>
            {loading && (
              <div className="loading-box">
                <LoadingBox></LoadingBox>
              </div>
            )}
          </Col>
        )}
      </Container>
    </div>
  );
}
