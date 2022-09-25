import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import SearchBox from '../components/SearchBox';

function NotFoundScreen() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('pages.notFound.helmet')}</title>
      </Helmet>

      <div className="container-fluid not-found-bg">
        <div className="outter-div col-12">
          <div className="col-10 col-md-8 col-lg-8 not-found-inner-div">
            <div className="not-found-title">
              <h1 className="not-found-title-header">
                {t('pages.notFound.title')}
              </h1>
            </div>

            <span className="not-found-span">
              {t('pages.notFound.subTitle')}
            </span>
            <div className="not-found-search-box">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFoundScreen;
