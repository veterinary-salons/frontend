import ErrorPageMessage from "../../components/ErrorPageMessage";

function ErrorBoundary() {
  return (
    <>
      <ErrorPageMessage
        title='Не удаётся подключиться'
        msg='Браузер не&nbsp;может отобразить веб-страницу, потому что компьютер не&nbsp;подключен к&nbsp;Интернету'
      />
      <ErrorPageMessage
        width='350px'
        title='Ошибка 404'
        msg='Такой страницы не&nbsp;существует
        Зато существуют другие &#40;:'
        error404
      />
    </>
  )
}

export default ErrorBoundary;
