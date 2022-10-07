import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
// import logger from 'use-reducer-logger';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast } from 'react-toastify';
import { getError, zip } from '../utils';
import Category from '../components/Category';

import section1 from '../assets/section1.jpg';
import section2 from '../assets/section2.jpg';
import section3 from '../assets/section3.jpg';

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { useTranslation, Trans } from 'react-i18next';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productsSliderSettings = {
  slidesToShow: 5,
  slidesToScroll: 5,
  infinite: false,
  swipeToSlide: true,
  autoplay: false,
  speed: 1000,
  dots: false,
  cssEase: 'ease-out',
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true,
      },
    },
  ],
};

function HomeScreen() {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [categoriesDesc, setCategoriesDesc] = useState([]);
  const [categoriesImg, setCategoriesImg] = useState([]);
  const [categoriesPack, setCategoriesPack] = useState([]);

  // const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const [result] = await axios.all([
          axios.get('https://procos.herokuapp.com/api/products'),
          axios.get('https://procos.herokuapp.com/api/products/categories'),
        ]);

        function replacer(key, value) {
          if (
            [
              '_id',
              'name',
              'slug',
              'image',
              'images',
              'volume',
              'Ingredients',
              'details',
              'usage',
              'businessUse',
              'countInStock',
              'rating',
              'numReviews',
              'reviews',
              '__v',
              'createdAt',
              'updatedAt',
            ].indexOf(key) > -1
          ) {
            return undefined;
          }

          return value;
        }

        result.data.forEach((element) => {
          const productStringified = JSON.stringify(element, replacer);
          const productParsed = JSON.parse(productStringified);

          if (productParsed.category !== undefined) {
            categories.push(productParsed.category);
          }
          if (productParsed.categoryDescription !== undefined) {
            categoriesDesc.push(productParsed.categoryDescription);
          }
          if (productParsed.categoryImage !== undefined) {
            categoriesImg.push(productParsed.categoryImage);
          }
        });

        setCategoriesPack(
          zip(
            [...new Set(categories)],
            [...new Set(categoriesDesc)],
            [...new Set(categoriesImg)]
          )
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
        toast.error(getError(err));
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{t('pages.home.helmet')}</title>
      </Helmet>

      {/* <!-- HERO --> */}
      <div className=" container-fluid hero-container">
        <div className="row justify-content-start d-flex">
          <div className="col-6 hidden-md-down hero-content">
            <div className="hero-text">
              <span id="hero-text">{t('hero.header')}</span>
            </div>
            <div className="hero-text-sub">
              <span id="hero-text-sub">{t('hero.subheader')}</span>
            </div>
            <div>
              <HashLink to="/about">
                <button className="hero-button" id="hero-button">
                  <span>{t('hero.button')}</span>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- CATEGORIES --> */}
      <div className="home-wrapper">
        <div className="home-wrapper-block">
          <div className="section-title">
            <div className="section-title-pattern"></div>
            <h1 className="section-title-header">{t('categories.header')}</h1>
          </div>
          <div className="services-section__container">
            <div className="services-section__wrapper">
              {categoriesPack.map((c) => (
                <Col
                  key={c}
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  className="col-container"
                >
                  <div className="category-card-wrapper">
                    <Category
                      className="category-card-content"
                      cat={c[0]}
                      catDesc={c[1]}
                      catImg={c[2]}
                    ></Category>
                  </div>
                </Col>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- PRODUCTS --> */}
      <div className="products">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">{t('products.header')}</h1>
        </div>
        {loading ? (
          <div className="loading-box">
            <LoadingBox />
          </div>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="container container-spacing carousel">
            <Slider {...productsSliderSettings}>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={2}>
                  <Product product={product} searchView="false"></Product>
                </Col>
              ))}
            </Slider>
          </div>
        )}
      </div>

      {/* <!-- CTA --> */}
      <div className="home__cta-container">
        <div className="home__cta-content">
          <h4>{t('cta.sentence1')}</h4>
          <h4>{t('cta.sentence2')}</h4>
          <div>
            <HashLink to="/contact">
              <Button className="home__cta-btn">{t('cta.button')}</Button>
            </HashLink>
          </div>
        </div>
      </div>

      {/* <!-- BOTTOM SECTION --> */}
      <div className="home__cards-container">
        <div className="section-title">
          <div className="section-title-pattern"></div>
          <h1 className="section-title-header">{t('who.header')}</h1>
        </div>
        <CardGroup className="card-group">
          <Card>
            <div className="snip1205 section1-color">
              <Card.Img variant="top" src={section1} />
              <i className="ion-android-exit" title="This inside"></i>
              <HashLink to="/idea" title={t('more.button')}></HashLink>
            </div>
            <Card.Body className="pb-3 card-body-1">
              <Card.Title className="home__bottom-card-title">
                {t('section1.header')}
              </Card.Title>
              <Card.Text className="section-description">
                {t('section1.description')}
              </Card.Text>

              <HashLink to="/idea" className="mobile_home__bottom-section-btn">
                <Button
                  id="card-button"
                  className="w-100 home__bottom-section-btn"
                >
                  {t('more.button')} 🡪
                </Button>
              </HashLink>
            </Card.Body>
          </Card>
          <Card>
            <div className="snip1205 section2-color">
              <Card.Img variant="top" src={section2} />
              <i className="ion-android-exit"></i>
              <HashLink to="/idea" title={t('more.button')}></HashLink>
            </div>

            <Card.Body className="pb-3 card-body-2">
              <Card.Title className="home__bottom-card-title">
                {t('section2.header')}
              </Card.Title>
              <Card.Text className="section-description">
                {t('section2.description')}
              </Card.Text>
              <HashLink to="/idea" className="mobile_home__bottom-section-btn">
                <Button
                  id="card-button"
                  className="w-100 home__bottom-section-btn"
                >
                  {t('more.button')} 🡪
                </Button>
              </HashLink>
            </Card.Body>
          </Card>
          <Card>
            <div className="snip1205 section3-color">
              <Card.Img variant="top" src={section3} />
              <i className="ion-android-exit"></i>
              <HashLink to="/about" title={t('more.button')}></HashLink>
            </div>
            <Card.Body className="pb-3 card-body-3">
              <Card.Title className="home__bottom-card-title">
                {t('section3.header')}
              </Card.Title>
              <Card.Text className="section-description">
                {t('section3.description')}
              </Card.Text>

              <HashLink to="/about" className="mobile_home__bottom-section-btn">
                <Button
                  id="card-button"
                  className="w-100 home__bottom-section-btn"
                >
                  {t('more.button')} 🡪
                </Button>
              </HashLink>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
export default HomeScreen;
