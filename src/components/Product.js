import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { useTranslation, Trans } from 'react-i18next';
import { toast } from 'react-toastify';

function Product(props) {
  const { t, i18n } = useTranslation();

  const { product, searchView } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `https://procos.herokuapp.com/api/products/${item._id}`
    );
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card id={searchView === 'true' ? 'search__product-card' : 'product-card'}>
      {product.businessUse !== '0g' ? (
        <div className="label-business">
          <span className="business-use">
            {t('pages.home.businessUse')} {product.businessUse}
          </span>
        </div>
      ) : (
        <div className="label-no-business"></div>
      )}

      <Link to={`/product/${product.slug}`}>
        <img
          loading="lazy"
          src={product.image}
          className="card-img-top product-img-styling"
          alt={product.name}
        />
      </Link>

      <Card.Body
        className={searchView === 'true' ? 'search__product-card-body' : ''}
      >
        <Link to={`/product/${product.slug}`}>
          <Card.Text className="search__product-category-tag">
            {product.category}
          </Card.Text>
          <Card.Title
            className={
              searchView === 'true'
                ? 'search__product-name-content'
                : 'product-name-content'
            }
          >
            {product.name}
          </Card.Title>
          <Card.Text className="product-volume">{product.volume}</Card.Text>
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </Link>
        <Button
          className={
            searchView === 'true' && product.countInStock
              ? 'search__add-to-cart'
              : searchView !== 'true' && product.countInStock
              ? 'add-to-cart'
              : searchView === 'true' && !product.countInStock
              ? 'search__product-out-of-stock'
              : 'product-out-of-stock'
          }
          disabled={!product.countInStock}
          onClick={() => addToCartHandler(product)}
        >
          {product.countInStock
            ? t('pages.home.addToCartButton')
            : t('pages.home.outOfStockButton')}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
