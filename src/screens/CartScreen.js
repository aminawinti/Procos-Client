import { useContext, useEffect } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useTranslation, Trans } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';

export default function CartScreen() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(
      `https://procos.herokuapp.com/api/products/${item._id}`
    );
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <div>
      <Container className="place-order-container">
        <Helmet>
          <title>{t('pages.cart.helmet')}</title>
        </Helmet>

        <h1 className="page__header">{t('pages.cart.header')}</h1>

        {cartItems.length === 0 ? (
          <div className="no-order">
            <MessageBox variant="info">
              <span className="cart-empty">{t('pages.cart.noOrder')}</span>
              <br />
              <Link className="cart-continue" to="/">
                {t('pages.cart.continue')} 🡪
              </Link>
            </MessageBox>
          </div>
        ) : (
          <Col>
            <Card className="place-order-card">
              <Card.Body>
                <Table className="place-order__table" responsive="xl">
                  <tbody className="table-body">
                    {cartItems.map((item) => (
                      <tr className="cart__table-body" key={item._id}>
                        <td className="table-td row-container">
                          <div className="img-and-details">
                            <img
                              loading="lazy"
                              src={item.image}
                              alt={t('pages.cart.imgNotFound')}
                              className="img-fluid rounded img-thumbnail"
                            ></img>
                            <div className="product-details">
                              <Link
                                className="cart__product-name"
                                to={`/product/${item.slug}`}
                              >
                                {item.name}
                              </Link>
                              <span className="volume-item">{item.volume}</span>
                            </div>
                          </div>
                          <div className="quantity-counter">
                            <Button
                              className="minus-button"
                              onClick={() =>
                                updateCartHandler(item, item.quantity - 1)
                              }
                              variant="light"
                              disabled={item.quantity === 1}
                            >
                              <i className="fas fa-minus"></i>
                            </Button>{' '}
                            <span className="quantity-label">
                              {item.quantity}
                            </span>{' '}
                            <Button
                              className="plus-button"
                              variant="light"
                              onClick={() =>
                                updateCartHandler(item, item.quantity + 1)
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </Button>
                          </div>
                          <div className="remove-container">
                            <Button
                              className="remove-button"
                              onClick={() => removeItemHandler(item)}
                              variant="light"
                              title={t('pages.cart.remove')}
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <div className="register__submit">
              <Button
                type="button"
                className="register__submit-button"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                {t('pages.cart.checkoutButton')}
              </Button>
            </div>
          </Col>
        )}
      </Container>
    </div>
  );
}
