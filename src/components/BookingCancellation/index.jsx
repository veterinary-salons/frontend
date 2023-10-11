import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';
import Portal from '../Portal';
import BookingCancellationPopup from '../BookingCancellationPopup';
import BookingDataCard from '../BookingDataCard';

const BookingCancellation = ({ dataBooking }) => {
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleSuccessRevoke = () => {
    navigate('../canceled');
    setIsOpenPopup(false);
  };

  return (
    <>
      <BookingDataCard dataBooking={dataBooking} />
      <div className={classes['button-wrapper']}>
        <Button onClick={handleOpenPopup} size="medium" variant="outlined">
          Отменить бронирование
        </Button>
      </div>
      <Portal isOpened={isOpenPopup}>
        <BookingCancellationPopup
          isOpen={isOpenPopup}
          onClose={handleClosePopup}
          onSubmit={handleSuccessRevoke}
        />
      </Portal>
    </>
  );
};

BookingCancellation.propTypes = {
  dataBooking: PropTypes.shape({
    specialist: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
    date: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    pet: PropTypes.string.isRequired,
    wishes: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookingCancellation;
