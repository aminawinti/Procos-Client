import { useTranslation, Trans } from 'react-i18next';

function Rating(props) {
  const { rating, numReviews, caption, productRating, clientRating } = props;
  const { t, i18n } = useTranslation();

  return (
    <div
      className={
        productRating
          ? 'product__rating'
          : clientRating
          ? 'client__rating'
          : 'rating'
      }
    >
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>{' '}
      {caption ? (
        <span>{caption}</span>
      ) : productRating ? (
        <span className="rating-label">
          {numReviews > 1 && numReviews + ' ' + t('pages.rating.ratings')}
          {numReviews === 1 && numReviews + ' ' + t('pages.rating.rating')}
        </span>
      ) : (
        <span className="rating-label">{' (' + numReviews + ')'}</span>
      )}
    </div>
  );
}
export default Rating;
