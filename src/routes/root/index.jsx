import Input from '../../ui/Input/Input';

function Root() {
  return (
    <>
      <h1>Здесь фронтенд сервиса заказа услуг и товаров для животных</h1>
      <Input
        type="number"
        placeholder="Text"
        name="pos"
        maxLength={30}
        minLength={10}
        required
        disabled={false}
      />
    </>
  );
}

export default Root;
