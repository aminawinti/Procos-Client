import axios from 'axios';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import { useTranslation, Trans } from 'react-i18next';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PRODUCT':
      return { ...state, product: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreateReview: false };
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const { t, i18n } = useTranslation();
  let reviewsRef = useRef();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(
          `https://procos.herokuapp.com/api/products/slug/${slug}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `https://procos.herokuapp.com/api/products/${product._id}`
    );

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error(t('pages.product.commentAndRating'), {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        newestOnTop: true,
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `https://procos.herokuapp.com/api/products/${product._id}/reviews`,
        { rating, comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: 'CREATE_SUCCESS',
      });
      toast.success('Review submitted successfully');
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      product.rating = data.rating;
      dispatch({ type: 'REFRESH_PRODUCT', payload: product });
      window.scrollTo({
        behavior: 'smooth',
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      toast.error(getError(error));
      dispatch({ type: 'CREATE_FAIL' });
    }
  };
  return loading ? (
    <div className="loading-box">
      <LoadingBox />
    </div>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="product__container">
      <Helmet>
        <title>{t('pages.product.helmet')}</title>
      </Helmet>
      <div className="product__wrapper">
        <Col md={5} className="product-image-container">
          <img
            loading="lazy"
            className="product-img"
            src={product.image}
            alt={t('pages.cart.imgNotFound')}
          ></img>
        </Col>
        <Col md={6} lg={5} className="product-details-container">
          <span className="product__category-tag">{product.category}</span>
          <div className="product-name-container">
            <span className="product-name">{product.name}</span>
            <div className="status-content">
              {product.countInStock > 0 ? (
                <div className="available-container">
                  <span className="available-product">
                    {t('pages.product.available')}
                  </span>
                </div>
              ) : (
                <div className="unavailable-container">
                  <span className="unavailable-product">
                    {t('pages.product.outOfStock')}
                  </span>
                </div>
              )}
            </div>
          </div>

          <HashLink to="#reviews" className="reviews-link">
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
              productRating={true}
            ></Rating>
          </HashLink>

          <span className="product-volume">
            {t('pages.product.volume')} {product.volume}
          </span>

          <span className="product-details-title">
            {t('pages.product.details')}
          </span>
          <span className="product-details-content">{product.details}</span>

          <div className="">
            {product.countInStock > 0 && (
              <Button
                onClick={addToCartHandler}
                className="product-add-to-cart"
              >
                {t('pages.product.addToCartButton')}
              </Button>
            )}
          </div>
          <div className="accordion-container">
            <Accordion flush className="accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  bsPrefix="accordion-h"
                  className="accordion-h"
                >
                  {t('pages.product.ingredients')}
                </Accordion.Header>
                <Accordion.Body>{product.Ingredients}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t('pages.product.usage')}</Accordion.Header>
                <Accordion.Body>{product.usage}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </div>
      <Col md={12}>
        <div className="reviews-container" id="reviews">
          <h2 className="reviews-header" ref={reviewsRef}>
            {t('pages.product.reviewsHeader')}
          </h2>
          <span className="reviews-subheader">
            {t('pages.product.reviewsSubheader')}
            <br />
            <span className="reviews-subheader-name">{product.name}</span>
          </span>

          <div className="mb-3">
            {product.reviews?.length === 0 && (
              <MessageBox variant="warning" className="light">
                {t('pages.product.noReview')}
              </MessageBox>
            )}
          </div>
          <div className="review-cards">
            {product.reviews?.map((review) => (
              <div className="review-card" key={review._id}>
                <div className="client-review-header">
                  <div className="client-review-header-content">
                    <strong className="client-review-header-user">
                      {review.name}
                    </strong>
                    <p className="client-review-date">
                      {review.createdAt.substring(0, 10)}
                    </p>
                  </div>
                  <Rating
                    className="mt-0 pt-0"
                    rating={review.rating}
                    caption=" "
                    clientRating={true}
                  ></Rating>
                </div>
                <p className="comment">{review.comment}</p>
              </div>
            ))}
          </div>
          <div className="review-input-container">
            <span className="input-review-header">
              {t('pages.product.reviewsInputHeader')}
            </span>
            {userInfo ? (
              <form onSubmit={submitHandler}>
                <Form.Group className="my-3" controlId="rating">
                  <Form.Select
                    aria-label="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">
                      {t('pages.product.reviewsInputSelect0')}
                    </option>
                    <option value="1">
                      {t('pages.product.reviewsInputSelect1')}
                    </option>
                    <option value="2">
                      {t('pages.product.reviewsInputSelect2')}
                    </option>
                    <option value="3">
                      {t('pages.product.reviewsInputSelect3')}
                    </option>
                    <option value="4">
                      {t('pages.product.reviewsInputSelect4')}
                    </option>
                    <option value="5">
                      {t('pages.product.reviewsInputSelect5')}
                    </option>
                  </Form.Select>
                </Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label={t('pages.product.reviewsInputComment')}
                  className="mb-3"
                >
                  <Form.Control
                    className="comment-control"
                    as="textarea"
                    placeholder="Leave a comment here"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </FloatingLabel>

                <div className="review-button-container">
                  <Button
                    className="review-button"
                    disabled={loadingCreateReview}
                    type="submit"
                  >
                    {t('pages.product.reviewsInputSubmitButton')}
                  </Button>
                  {loadingCreateReview && (
                    <div className="loading-box">
                      <LoadingBox></LoadingBox>
                    </div>
                  )}
                </div>
              </form>
            ) : (
              <MessageBox>
                {t('pages.product.reviewsInputLogin1')}{' '}
                <Link to={`/login?redirect=/product/${product.slug}`}>
                  {t('pages.product.reviewsInputLogin2')}
                </Link>{' '}
                {t('pages.product.reviewsInputLogin3')}
              </MessageBox>
            )}
          </div>
        </div>
      </Col>
    </div>
  );
}
export default ProductScreen;
