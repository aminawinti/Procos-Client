import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { useTranslation, Trans } from 'react-i18next';

export default function RegisterScreen() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(t('pages.register.notMatch'), {
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
      const { data } = await Axios.post('/api/users/register', {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_LOGIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container register__container">
      <Helmet>
        <title>{t('pages.register.helmet')}</title>
      </Helmet>
      <h1 className="page__header">{t('pages.register.header')}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="" controlId="name">
          <Form.Control
            className="register_form-control"
            placeholder={t('pages.register.name')}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="" controlId="email">
          <Form.Control
            className="register_form-control"
            placeholder={t('pages.register.email')}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="" controlId="password">
          <Form.Control
            className="register_form-control"
            placeholder={t('pages.register.password')}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="" controlId="confirmPassword">
          <Form.Control
            className="register_form-control"
            placeholder={t('pages.register.confirm')}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="register__submit">
          <Button className="register__submit-button" type="submit">
            {t('pages.register.button')}
          </Button>
        </div>
        <div className="register__login-redirect">
          {t('pages.register.underButton1')}{' '}
          <Link to={`/login?redirect=${redirect}`}>
            {t('pages.register.underButton2')}
          </Link>
        </div>
      </Form>
    </Container>
  );
}
