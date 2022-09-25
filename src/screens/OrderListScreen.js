import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import { useTranslation, Trans } from 'react-i18next';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        orders: action.payload.orders,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function OrderListScreen() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [
    { loading, error, orders, pages, loadingDelete, successDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const deleteHandler = async (order) => {
    if (
      window.confirm('Are you sure you want to permanently delete this order?')
    ) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(`/api/orders/${order._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('order deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };

  return (
    <div className="admin-container">
      <Helmet>
        <title>{t('pages.ordersList.helmet')}</title>
      </Helmet>
      <h1 className="page__header">{t('pages.ordersList.header')}</h1>

      {loadingDelete && (
        <div className="loading-box">
          <LoadingBox></LoadingBox>
        </div>
      )}
      {loading ? (
        <div className="loading-box">
          <LoadingBox></LoadingBox>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Table responsive="xl">
            <thead className="table-head">
              <tr>
                <th> {t('pages.ordersList.id')}</th>
                <th> {t('pages.ordersList.user')}</th>
                <th> {t('pages.ordersList.date')}</th>
                <th> {t('pages.ordersList.status')}</th>
                <th> {t('pages.ordersList.action')}</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order.user
                      ? order.user.name
                      : t('pages.ordersList.deletedUser')}
                  </td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <span className="delivered">
                        {t('pages.ordersList.delivered')}
                        {', '}
                        {order.deliveredAt.substring(0, 10)}
                      </span>
                    ) : (
                      <span className="pending">
                        {t('pages.ordersList.pending')}
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
                      {t('pages.ordersList.detailsButton')}
                    </Button>
                    <Button
                      className="delete-button"
                      type="button"
                      variant="light"
                      onClick={() => deleteHandler(order)}
                    >
                      {t('pages.ordersList.deleteButton')}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {orders.length === 0 && !pages && (
            <div className="no-order">
              <MessageBox variant="info">
                {t('pages.ordersList.noOrder')}
              </MessageBox>
            </div>
          )}

          <div className="pagination-spacing">
            <ul className="pagination justify-content-center">
              {[...Array(pages).keys()].map((x) => (
                <li
                  key={x + 1}
                  className={
                    x + 1 === Number(page) ? 'page-item active' : 'page-item'
                  }
                >
                  <Link
                    className="page-link"
                    to={`/admin/orders?page=${x + 1}`}
                  >
                    {x + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
