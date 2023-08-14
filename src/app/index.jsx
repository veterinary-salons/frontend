// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <h1>Здесь фронтенд сервиса заказа услуг и товаров для животных</h1>
    </Provider>
  );
}

export default App;
