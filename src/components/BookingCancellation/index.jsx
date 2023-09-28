import PropTypes from 'prop-types';
import { useState } from 'react';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';
import Portal from '../Portal';
import BookingCancellationPopup from '../BookingCancellationPopup';
import BookingDataCard from '../BookingDataCard';

const BookingCancellation = ({ dataBooking }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleSuccessRevoke = () => {
    console.log('Отменен');
    setIsOpenPopup(false);
  };
  
  return (
    <>
     <BookingDataCard dataBooking={dataBooking}/>
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
  dataBooking: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookingCancellation;
