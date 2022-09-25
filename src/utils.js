import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const zip = (...arr) => {
  const zipped = [];
  arr.forEach((element, ind) => {
    element.forEach((el, index) => {
      if (!zipped[index]) {
        zipped[index] = [];
      }
      if (!zipped[index][ind]) {
        zipped[index][ind] = [];
      }
      zipped[index][ind] = el || '';
    });
  });
  return zipped;
};

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
