import { Link } from 'react-router-dom';

function Category(props) {
  const { cat, catDesc, catImg } = props;
  const titleImg = 'Discover ' + cat + ' products';
  return (
    <div className="services-section__item">
      <Link
        className="services-section__item-wrapper"
        to={`/search?&category=${cat}`}
      >
        <div className="services-section__item-image">
          <img
            loading="lazy"
            alt="not found 1"
            title={titleImg}
            src={catImg}
            className="normal-image"
          />
        </div>
        <div className="services-section__item-content">
          <div className="services-section__item-title">{cat}</div>
          <div className="services-section__item-description">{catDesc}</div>
        </div>
      </Link>
    </div>
  );
}
export default Category;
