import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import { useTranslation, Trans } from 'react-i18next';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};
export default function ProductEditScreen() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [volume, setVolume] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [details, setDetails] = useState('');
  const [usage, setUsage] = useState('');
  const [businessUse, setBusinessUse] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `https://procos.herokuapp.com/api/products/${productId}`
        );
        setName(data.name);
        setSlug(data.slug);
        setImage(data.image);
        setImages(data.images);
        setCategory(data.category);
        setVolume(data.volume);
        setCountInStock(data.countInStock);
        setIngredients(data.Ingredients);
        setDetails(data.details);
        setUsage(data.usage);
        setBusinessUse(data.businessUse);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `https://procos.herokuapp.com/api/products/categories`
        );
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `https://procos.herokuapp.com/api/products/${productId}`,
        {
          _id: productId,
          name,
          slug,
          image,
          images,
          category,
          volume,
          Ingredients,
          details,
          usage,
          businessUse,
          countInStock,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Product updated successfully');
      navigate('/admin/products');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };

  return (
    <Container className="small-container register__container">
      <Helmet>
        <title>{t('pages.editProduct.helmet')}</title>
      </Helmet>

      <h1 className="page__header">{t('pages.editProduct.header')}</h1>

      {loading ? (
        <div className="loading-box">
          <LoadingBox></LoadingBox>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>{t('pages.editProduct.name')}</Form.Label>
            <Form.Control
              className="edit_form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="slug">
            <Form.Label>{t('pages.editProduct.slug')}</Form.Label>
            <Form.Control
              className="edit_form-control"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>{t('pages.editProduct.imgFile')}</Form.Label>
            <Form.Control
              className="edit_form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="categories">
            <Form.Label>{t('pages.editProduct.category')}</Form.Label>
            <div className="edit_categories-control">
              {categories.map((c) => (
                <label key={c} className="radio">
                  <input
                    type="radio"
                    name="category"
                    value={c}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    checked={category === c}
                    defaultChecked={c === categories[0] ? true : false}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </Form.Group>
          <Form.Group controlId="volume">
            <Form.Label>{t('pages.editProduct.volume')}</Form.Label>
            <Form.Control
              className="edit_form-control"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="businessUse">
            <Form.Label>{t('pages.editProduct.businessUse')}</Form.Label>
            <Form.Control
              className="edit_form-control"
              value={businessUse}
              onChange={(e) => setBusinessUse(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="countInStock">
            <Form.Label>{t('pages.editProduct.countInStock')}</Form.Label>
            <Form.Control
              className="edit_form-control"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="Ingredients">
            <Form.Label className="form-label">
              {t('pages.editProduct.Ingredients')}
            </Form.Label>
            <Form.Control
              className="edit_form-control"
              value={Ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="details">
            <Form.Label className="form-label">
              {t('pages.editProduct.details')}
            </Form.Label>
            <Form.Control
              className="edit_form-control"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="usage">
            <Form.Label className="form-label">
              {t('pages.editProduct.usage')}
            </Form.Label>
            <Form.Control
              className="edit_form-control"
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              required
            />
          </Form.Group>
          <div className="register__submit">
            <Button
              className="register__submit-button"
              disabled={loadingUpdate}
              type="submit"
            >
              {t('pages.editProduct.updateButton')}
            </Button>
            {loadingUpdate && (
              <div className="loading-box">
                <LoadingBox></LoadingBox>
              </div>
            )}
          </div>
        </Form>
      )}
    </Container>
  );
}
