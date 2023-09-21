import classes from '../AdForm/style.module.scss';
import InputText from '../../../ui/forms/inputs/inputText/InputText';
import AdForm from '../AdForm';

const AdTitle = () => (
  <AdForm
   title="Как назвать ваше объявление?" 
   step={
    'step-three/groomer' ||
    'step-three/dog-handler' ||
    'step-three/vet' ||
    'step-three/pet-sitter'
    }>
    <div className={classes['af__input-container']}>
      <InputText 
      type='text'
      placeholder="Ветеринар-хирург"
      name='input'
      maxLength={20}
      minLength={2}
      required
      autoComplete='off'
      />
    </div>
  </AdForm>
);

export default AdTitle;
