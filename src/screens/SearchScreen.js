import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Form from 'react-bootstrap/Form';
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
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },

  {
    name: '3stars & up',
    rating: 3,
  },

  {
    name: '2stars & up',
    rating: 2,
  },

  {
    name: '1star & up',
    rating: 1,
  },
];

export default function SearchScreen() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const rating = sp.get('rating') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}&category=${category}&rating=${rating}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, query, rating]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    return `/search?category=${filterCategory}&query=${filterQuery}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };

  return (
    <div className="search__container">
      <Helmet>
        <title>{t('pages.search.helmet')}</title>
      </Helmet>

      {/* aside section - filters */}
      <div className="search__wrapper">
        <Col xs={12} sm={10} md={3} className="search__section1">
          <div className="search-option-container">
            <h3 className="search-option-header">
              {t('pages.search.category')}
            </h3>
            <ul className="list list-unstyled">
              <li className="search__category-listitem">
                <Link
                  className={
                    'all' === category ? 'list-active-link' : 'list-link'
                  }
                  to={getFilterUrl({ category: 'all' })}
                >
                  {t('pages.search.allProducts')}
                </Link>
                {'all' === category ? (
                  <span className="products-badge">
                    {countProducts === 0 ? 'No' : countProducts}
                  </span>
                ) : (
                  <></>
                )}
              </li>
              {categories.map((c) => (
                <li key={c} className="search__category-listitem">
                  <Link
                    className={
                      c === category ? 'list-active-link' : 'list-link'
                    }
                    to={getFilterUrl({ category: c })}
                  >
                    {c}
                  </Link>
                  {c === category ? (
                    <span className="products-badge">
                      {countProducts === 0 ? 'No' : countProducts}
                    </span>
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="search-option-container">
            <h3 className="search-option-header">
              {t('pages.search.minRating')}
            </h3>
            <ul className="list list-unstyled">
              {ratings.map((r) => (
                <li key={r.name} className="search__category-listitem">
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={
                      `${r.rating}` === `${rating}`
                        ? 'rating-active-link'
                        : 'rating-link'
                    }
                  >
                    <Rating
                      caption={t('pages.search.andUp')}
                      rating={r.rating}
                    ></Rating>
                  </Link>
                </li>
              ))}
              <li className="search__category-listitem">
                <Link
                  to={getFilterUrl({ rating: 'all' })}
                  className={
                    rating === 'all' ? 'rating-active-link' : 'rating-link'
                  }
                >
                  <Rating caption={t('pages.search.andUp')} rating={0}></Rating>
                </Link>
              </li>
            </ul>
          </div>
        </Col>

        {/* main section */}
        <Col xs={12} sm={12} md={9} className="search__main-container">
          {loading ? (
            <div className="loading-box">
              <LoadingBox></LoadingBox>
            </div>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {/* filters results  */}
              <div className="search__section2">
                <Col xs={12} sm={9} md={9}>
                  <div className="search__results-container">
                    <span className="span1">
                      {countProducts === 0 ? 'No' : countProducts}{' '}
                      {t('pages.search.resultsFound')}
                    </span>
                    <span className="span2">
                      {query !== 'all' && (
                        <span className="search-tag">#{query}</span>
                      )}
                      {category !== 'all' && (
                        <span className="search-tag">#{category}</span>
                      )}
                      {rating !== 'all' && (
                        <span className="search-tag">
                          #
                          {rating === '1'
                            ? rating + ' ' + t('pages.search.star')
                            : rating + ' ' + t('pages.search.stars')}
                        </span>
                      )}
                      {query !== 'all' ||
                      category !== 'all' ||
                      rating !== 'all' ? (
                        <Link className="search__close-button" to={'/search'}>
                          <i className="fas fa-times-circle"></i>
                        </Link>
                      ) : null}
                    </span>
                  </div>
                </Col>
                <Col xs={12} sm={3} className="text-end">
                  <Form.Select
                    size="sm"
                    value={order}
                    className="font-size-option"
                    onChange={(e) => {
                      navigate(getFilterUrl({ order: e.target.value }));
                    }}
                  >
                    <option value="newest">
                      {t('pages.search.newArrivals')}
                    </option>
                    <option value="toprated">
                      {t('pages.search.customerRating')}
                    </option>
                  </Form.Select>
                </Col>
              </div>

              {products.length === 0 && !pages && (
                <div className="no-product-msg">
                  <MessageBox>{t('pages.search.noProduct')}</MessageBox>
                </div>
              )}

              {/* products section  */}
              <Row className="search__products-section">
                {products.map((product) => (
                  <Col
                    xs={6}
                    sm={4}
                    lg={3}
                    className="search__product-card"
                    key={product._id}
                  >
                    <Product searchView="true" product={product}></Product>
                  </Col>
                ))}
              </Row>

              <div className="pagination-spacing">
                <ul className="pagination justify-content-center">
                  {[...Array(pages).keys()].map((x) => (
                    <li
                      key={x + 1}
                      className={
                        x + 1 === Number(page)
                          ? 'page-item active'
                          : 'page-item'
                      }
                    >
                      <Link
                        className="page-link"
                        to={getFilterUrl({ page: x + 1 })}
                      >
                        {x + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Col>
      </div>
    </div>
  );
}
