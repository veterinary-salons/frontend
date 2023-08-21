import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store/index';
import router from '../routes';
import Buttons from '../ui/buttons/Button';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Buttons
        variant='purple-filled'
        size='small'
        type='button'
        active
        loading={false}
        shape='round'
        isFiltered
      >
        Для кошек
      </Buttons>
    </Provider>
  );
}

export default App;
