import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return {
        ...state,
        loadingCreate: false,
      };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, successDelete: false };

    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function ProductListScreen() {
  const { t, i18n } = useTranslation();
  const [
    {
      loading,
      error,
      products,
      pages,
      loadingCreate,
      loadingDelete,
      successDelete,
    },
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
        const { data } = await axios.get(
          `https://procos.herokuapp.com/api/products/admin?page=${page} `,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {}
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const createHandler = async () => {
    if (window.confirm('Are you sure you want to create new product?')) {
      try {
        dispatch({ type: 'CREATE_REQUEST' });
        const { data } = await axios.post(
          '/api/products',
          {},
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        toast.success('product created successfully');
        dispatch({ type: 'CREATE_SUCCESS' });
        navigate(`/admin/product/${data.product._id}`);
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: 'CREATE_FAIL',
        });
      }
    }
  };

  const deleteHandler = async (product) => {
    if (
      window.confirm(
        'Are you sure you want to permanently delete this product?'
      )
    ) {
      try {
        await axios.delete(
          `https://procos.herokuapp.com/api/products/${product._id}`,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        toast.success('product deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
        navigate(`?page=${pages - 1}`);
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
        <title>{t('pages.productsList.helmet')}</title>
      </Helmet>

      <h1 className="page__header">{t('pages.productsList.header')}</h1>

      <div className="d-flex justify-content-end new-product">
        <Button
          className="new-product-button"
          type="button"
          onClick={createHandler}
        >
          <i className="plus-icon fas fa-plus" />
          {t('pages.productsList.newProduct')}
        </Button>
      </div>

      {loadingCreate && (
        <div className="loading-box">
          <LoadingBox></LoadingBox>
        </div>
      )}

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
                <th> {t('pages.productsList.name')}</th>
                <th> {t('pages.productsList.category')}</th>
                <th> {t('pages.productsList.volume')}</th>
                <th> {t('pages.productsList.status')}</th>
                <th> {t('pages.productsList.action')}</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {products.map((product) => (
                <tr key={product._id} className="table-row">
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.volume}</td>
                  <td>
                    {product.countInStock > 0 ? (
                      <span className="in-stock">
                        {t('pages.productsList.inStock')}{' '}
                      </span>
                    ) : (
                      <span className="out-stock">
                        {t('pages.productsList.outStock')}
                      </span>
                    )}
                  </td>
                  <td className="buttons-td">
                    <Button
                      className="edit-button"
                      type="button"
                      variant="light"
                      onClick={() => {
                        navigate(`/admin/product/${product._id}`);
                      }}
                    >
                      {t('pages.productsList.editButton')}
                    </Button>
                    <Button
                      className="delete-button"
                      type="button"
                      variant="light"
                      onClick={() => deleteHandler(product)}
                    >
                      {t('pages.productsList.deleteButton')}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {products.length === 0 && !pages && (
            <div className="no-product">
              <MessageBox variant="info">
                {t('pages.productsList.noProduct')}
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
                    to={`/admin/products?page=${x + 1}`}
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
