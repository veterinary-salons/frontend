import InputPhone from '../../ui/InputPhone/InputPhone';
import InputText from '../../ui/InputText/InputText';

function Root() {
  return (
    <>
      <h1>Здесь фронтенд сервиса заказа услуг и товаров для животных</h1>
      <InputText
        type="email"
        name="email"
        id="email"
        placeholder="email"
        maxLength={18}
        minLength={11}
        required
        disabled={false}
      />
      <InputPhone type="tel" name="tel" />
    </>
  );
}

export default Root;
