import Button from '../../ui/buttons/originButton/Button';
import Header from '../../components/Header/index';

function Root() {
  return (
    <>
      <Header />

      <div style={{ display: 'flex', 'flex-direction': 'column', gap: '10px' }}>
        <Button>Товары</Button>
        <Button loading size="large" variant="purple-filled">
          Товары
        </Button>
        <Button size="large" variant="outlined">
          Товары
        </Button>
        <Button size="medium" variant="purple-filled">
          Далее
        </Button>
        <Button size="medium" variant="outlined">
          Далее
        </Button>
        <Button loading size="medium" variant="outlined">
          Далее
        </Button>
        <Button
          variant="add"
          size="medium"
          type="button"
          active
          loading={false}
          shape="round"
          isChips={false}
        />
        <Button
          variant="add"
          size="medium"
          type="button"
          active
          loading
          shape="round"
          isChips={false}
        />
        <Button size="small" variant="outlined" shape="round">
          Оказываю
        </Button>
        <Button size="small" shape="round">
          Оказываю
        </Button>
        <Button size="small" variant="purple-filled" shape="round" isChips>
          Для кошек
        </Button>
        <Button size="small" variant="outlined" shape="round" isChips>
          Очистить все
        </Button>
      </div>
    </>
  );
}

export default Root;
