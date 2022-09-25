import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import Table from 'react-bootstrap/Table';
import { useTranslation, Trans } from 'react-i18next';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload.users,
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

export default function UserListScreen() {
  const { t, i18n } = useTranslation();

  const [
    { loading, error, users, pages, loadingDelete, successDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `https://procos.herokuapp.com/api/users/admin?page=${page}`,
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
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const deleteHandler = async (user) => {
    if (
      window.confirm('Are you sure you want to permanently delete this user?')
    ) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(
          `https://procos.herokuapp.com/api/users/${user._id}`,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        toast.success('user deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (error) {
        toast.error(getError(error), {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          newestOnTop: true,
        });
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };

  return (
    <div className="admin-container">
      <Helmet>
        <title>{t('pages.usersList.helmet')}</title>
      </Helmet>
      <h1 className="page__header">{t('pages.usersList.header')}</h1>

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
                <th> {t('pages.usersList.id')}</th>
                <th> {t('pages.usersList.name')}</th>
                <th> {t('pages.usersList.email')}</th>
                <th> {t('pages.usersList.status')}</th>
                <th> {t('pages.usersList.action')}</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <span className="admin">
                        {t('pages.usersList.admin')}
                      </span>
                    ) : (
                      <span className="user">{t('pages.usersList.user')}</span>
                    )}
                  </td>
                  <td className="buttons-td">
                    <Button
                      className="delete-button"
                      type="button"
                      variant="light"
                      disabled={user.isAdmin}
                      onClick={() => deleteHandler(user)}
                    >
                      {t('pages.usersList.deleteButton')}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {users.length === 0 && !pages && (
            <div className="no-order">
              <MessageBox variant="info">
                {t('pages.usersList.noUser')}
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
                  <Link className="page-link" to={`/admin/users?page=${x + 1}`}>
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
