import PropTypes from 'prop-types';
import Header from "../../components/Header";
import ErrorPageMessage from "../../components/ErrorPageMessage";

function ErrorBoundary({errorType404}) {
  return (
    <>
      <Header onlyLogo />
      {errorType404 ?
        <ErrorPageMessage
          title='Ошибка 404'
          message='Такой страницы не&nbsp;существует
          Зато&nbsp;существуют&nbsp;другие &#40;:'
          error404
        />
      :
        <ErrorPageMessage
          title='Не удаётся подключиться'
          message='Браузер не&nbsp;может отобразить веб-страницу, потому что компьютер не&nbsp;подключен к&nbsp;Интернету'
        />
      }
    </>
  )
};

ErrorBoundary.propTypes = {
  errorType404: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
  errorType404: false,
}

export default ErrorBoundary;
