import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { datapPrice } from '../../../assets/constants/constants';
import InputPrice from '../../../ui/forms/inputs/inputPrice';
import Button from '../../../ui/buttons/originButton/Button';

const AdPrice = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [before, setBefor] = useState('');
  const [price, setPrice] = useState({});

  useEffect(() => {
    setPrice({
      ...price,
      from,
      before,
    });
    // eslint-disable-next-line
  }, [from, before]);
  console.log(price);

  return (
    <>
      <h2 className={classes.questionnaire__title}>Стоимость услуг(и)</h2>
      <div className={classes.questionnaire__box}>
        {datapPrice.map((item) => (
          <div className={classes.questionnaire__container} key={item.id}>
            <p className={classes.questionnaire__text}>{item.title}</p>
            <InputPrice getInput={setFrom} />
            <InputPrice prefix="до" getInput={setBefor} />
          </div>
        ))}
      </div>
      <div className={classes['questionnaire__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/back', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button
          size="medium"
          type="button"
          onClick={() => {
            navigate('/next', { replace: true });
          }}
        >
          Далее
        </Button>
      </div>
    </>
  );
};

export default AdPrice;
