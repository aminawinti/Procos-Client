import Axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { getError } from '../utils';
import { Store } from '../Store';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import mail from '../assets/icons/mail.svg';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useTranslation, Trans } from 'react-i18next';
import { toast } from 'react-toastify';
import delivered from '../assets/icons/delivered.svg';
import pending from '../assets/icons/pending.svg';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELIVER_REQUEST':
      return { ...state, loadingDeliver: true };
    case 'DELIVER_SUCCESS':
      return { ...state, loadingDeliver: false, successDeliver: true };
    case 'DELIVER_FAIL':
      return { ...state, loadingDeliver: false };
    case 'DELIVER_RESET':
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
      };
    default:
      return state;
  }
}

export default function OrderScreen() {
  const { t, i18n } = useTranslation();

  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order, loadingDeliver, successDeliver }, dispatch] =
    useReducer(reducer, {
      loading: true,
      order: {},
      error: '',
    });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await Axios.get(
          `https://procos.herokuapp.com/api/orders/${orderId}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate('/login');
    }
    if (!order._id || successDeliver || (order._id && order._id !== orderId)) {
      fetchOrder();
      if (successDeliver) {
        dispatch({ type: 'DELIVER_RESET' });
      }
    } else {
      console.log('$$ script stop executing..');
    }
  }, [order, userInfo, orderId, navigate, successDeliver]);

  async function deliverOrderHandler() {
    try {
      dispatch({ type: 'DELIVER_REQUEST' });
      const { data } = await Axios.put(
        `https://procos.herokuapp.com/api/orders/${order._id}/deliver`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'DELIVER_SUCCESS', payload: data });
      toast.success('Order is delivered and sent');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'DELIVER_FAIL' });
    }
  }

  return loading ? (
    <div className="loading-box">
      <LoadingBox></LoadingBox>
    </div>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Container className="order-container">
        <Helmet>
          <title>{t('pages.order.helmet')}</title>
        </Helmet>

        <div className="modal-body">
          <div className="order-wrapper">
            <h1 className="order-header">{t('pages.order.mainMessage')}</h1>

            <div className="order-details">
              <span className="id-text">
                {t('pages.order.order')} #<span className="">{orderId}</span>
              </span>

              {userInfo && order.isDelivered ? (
                <div className="delivered-container">
                  <img
                    loading="lazy"
                    className="order-icon"
                    alt={t('pages.cart.imgNotFound')}
                    src={delivered}
                  />
                  <span className="delivered-order">
                    {t('pages.order.delivered')},{' '}
                    {order.deliveredAt.substring(0, 10)}
                  </span>
                </div>
              ) : (
                <div className="pending-container">
                  <img
                    loading="lazy"
                    className="order-icon"
                    alt={t('pages.cart.imgNotFound')}
                    src={pending}
                  />
                  <span className="pending-order">
                    {t('pages.order.pending')}
                  </span>
                </div>
              )}
            </div>
            <div className="mail-note">
              <img
                loading="lazy"
                className="mail-icon"
                src={mail}
                alt={t('pages.cart.imgNotFound')}
              />
              <div className="order-notification-text">
                {t('pages.order.mailNotify1')}
                {t('pages.order.mailNotify2')}{' '}
                <span className="email-text">{userInfo.email}</span>
                <br />
                {t('pages.order.mailNotify3')}
              </div>
            </div>
            <div className="order__button-container">
              {userInfo.isAdmin && !order.isDelivered ? (
                <Button
                  className="order__button"
                  type="button"
                  onClick={deliverOrderHandler}
                >
                  {t('pages.order.fulfillButton')}
                </Button>
              ) : (
                <Button
                  className="order__button"
                  type="button"
                  onClick={() => navigate('/')}
                >
                  {t('pages.order.continueButton')}
                </Button>
              )}
            </div>
          </div>
        </div>

        <Table className="order__table" responsive="xl">
          <thead className="order__table-head">
            <tr>
              <th>{t('pages.placeOrder.prodImage')}</th>
              <th>{t('pages.placeOrder.prodName')}</th>
              <th>{t('pages.placeOrder.prodQuantity')}</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {order.orderItems.map((item) => (
              <tr className="order__table-body" key={item._id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded img-thumbnail"
                  ></img>
                </td>
                <td>
                  <Link
                    className="order__product-link"
                    to={`/product/${item.slug}`}
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <span className="order__product-quantity">
                    {item.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
