import React, { useContext, useEffect, useReducer } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import pending from '../assets/icons/pending.svg';
import admin from '../assets/icons/admin.svg';
import users from '../assets/icons/users.svg';
import orders from '../assets/icons/orders.svg';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const { t, i18n } = useTranslation();

  const options = {
    width: '100%',
    height: '400px',
    legend: {
      maxLines: '5',
      position: 'top',
      alignment: 'center',
      textStyle: { color: '#26699c' },
    },
    fontSize: '12',
    fontName: 'Baloo 2',
    pieSliceBorderColor: '#fff',
    tooltip: { textStyle: { color: '#26699c' }, showColorCode: true },
  };

  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://procos.herokuapp.com/api/orders/summary',
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div className="dashboard-container">
      <Helmet>
        <title>{t('pages.dashboard.helmet')}</title>
      </Helmet>
      {loading ? (
        <div className="loading-box">
          <LoadingBox />
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Col>
          <h1 className="page__header">{t('pages.dashboard.header1')}</h1>
          <div className="summary-container">
            <Col xs={9} md={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="card-row">
                    <div className="dashboard-users-number">
                      {summary.users && summary.users[0]
                        ? summary.users[0].numUsers
                        : 0}
                    </div>
                    <div className="dashboard-admin-number">
                      {summary.admins && summary.admins[0]
                        ? summary.admins[0].numAdmins
                        : 0}
                    </div>
                  </Card.Title>
                  <Card.Text className="card-row">
                    <div className="dashboard-item-container">
                      <img
                        loading="lazy"
                        className="dashboard-icon"
                        alt={t('pages.cart.imgNotFound')}
                        src={users}
                      />
                      <span className="dashboard-icon-label">
                        {t('pages.dashboard.users')}
                      </span>
                    </div>
                    <div className="dashboard-item-container">
                      <img
                        loading="lazy"
                        className="dashboard-icon"
                        alt={t('pages.cart.imgNotFound')}
                        src={admin}
                      />
                      <span className="dashboard-icon-label admin-label">
                        {t('pages.dashboard.admin')}
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={9} md={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="card-row">
                    <div className="dashboard-users-number">
                      {summary.orders && summary.orders[0]
                        ? summary.orders[0].numOrders
                        : 0}
                    </div>
                    <div className="dashboard-pending-number">
                      {summary.orders && summary.orders[0]
                        ? summary.deliveredOrders[0].orders
                        : 0}
                    </div>
                  </Card.Title>
                  <Card.Text className="card-row">
                    <div className="dashboard-item-container">
                      <img
                        loading="lazy"
                        className="dashboard-icon"
                        alt={t('pages.cart.imgNotFound')}
                        src={orders}
                      />
                      <span className="dashboard-icon-label">
                        {t('pages.dashboard.orders')}
                      </span>
                    </div>
                    <div className="dashboard-item-container">
                      <img
                        loading="lazy"
                        className="dashboard-pending-icon"
                        alt={t('pages.cart.imgNotFound')}
                        src={pending}
                      />
                      <span className="dashboard-icon-label pending-label">
                        {t('pages.order.pending')}
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <Col className="chart-component">
            <h1 className="chart-header">{t('pages.dashboard.header2')}</h1>
            {summary.productCategories.length === 0 ? (
              <MessageBox>{t('pages.dashboard.noCategory')}</MessageBox>
            ) : (
              <Chart
                options={options}
                chartType="PieChart"
                loader={
                  <div className="loading-chart">
                    {t('pages.dashboard.loading')}
                  </div>
                }
                data={[
                  ['Category', 'Products'],
                  ...summary.productCategories.map((x) => [x._id, x.count]),
                ]}
              ></Chart>
            )}
          </Col>
        </Col>
      )}
    </div>
  );
}
