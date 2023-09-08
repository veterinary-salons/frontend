import PropTypes from 'prop-types';
import Header from "../../components/Header";
import ErrorPageMessage from "../../components/ErrorPageMessage";

function ErrorBoundary({errorType404}) {
  return (
    <>
      <Header onlyLogo />
      {errorType404 ?
        <ErrorPageMessage
          width='350px'
          title='Ошибка 404'
          msg='Такой страницы не&nbsp;существует
          Зато существуют другие &#40;:'
          error404
        />
      :
        <ErrorPageMessage
          title='Не удаётся подключиться'
          msg='Браузер не&nbsp;может отобразить веб-страницу, потому что компьютер не&nbsp;подключен к&nbsp;Интернету'
        />
      }
    </>
  )
};

ErrorBoundary.propTypes = {
  errorType404: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
  errorType404: true,
}

export default ErrorBoundary;
