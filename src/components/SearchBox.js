import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function SearchBox() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  return (
    <Form id="search-form" className="" onSubmit={submitHandler}>
      <InputGroup id="InputGroupSearchBox">
        <FormControl
          type="text"
          size="sm"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('navbar.search')}
          aria-label={t('navbar.search')}
          aria-describedby="button-search"
          className="mb-1"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fas fa-search search-icon"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
