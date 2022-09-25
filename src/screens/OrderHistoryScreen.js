import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, orders: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function OrderHistoryScreen() {
  const { t, i18n } = useTranslation();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(
          `https://procos.herokuapp.com/api/orders/mine`,

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div className="admin-container">
      <Helmet>
        <title>{t('pages.orderHistory.helmet')}</title>
      </Helmet>
      <h1 className="page__header">{t('pages.orderHistory.header')}</h1>

      {loading ? (
        <div className="loading-box">
          <LoadingBox></LoadingBox>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {orders.length !== 0 && (
            <Table responsive="xl">
              <thead className="table-head">
                <tr>
                  <th> {t('pages.orderHistory.id')}</th>
                  <th> {t('pages.orderHistory.date')}</th>
                  <th> {t('pages.orderHistory.status')}</th>
                  <th> {t('pages.orderHistory.action')}</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>
                      {order.isDelivered ? (
                        <span className="delivered">
                          {t('pages.orderHistory.delivered')} {', '}
                          {order.deliveredAt.substring(0, 10)}
                        </span>
                      ) : (
                        <span className="pending">
                          {t('pages.orderHistory.pending')}
                        </span>
                      )}
                    </td>
                    <td className="buttons-td">
                      <Button
                        className="details-button"
                        type="button"
                        variant="light"
                        onClick={() => {
                          navigate(`/order/${order._id}`);
                        }}
                      >
                        {t('pages.orderHistory.detailsButton')}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {orders.length === 0 && (
            <div className="no-order">
              <MessageBox variant="info">
                {t('pages.orderHistory.noOrder')}
                <br />
                <Link type="button" to={'/'}>
                  {t('pages.orderHistory.continue')} 🡪
                </Link>
              </MessageBox>
            </div>
          )}
        </>
      )}
    </div>
  );
}
