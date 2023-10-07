// Страница карточки специалиста
import { useParams } from 'react-router-dom';
import { professionals } from '../../assets/constants/temporaryData';
import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';
// import CheckboxBig from '../../ui/forms/checkboxes/checkboxBig';
import SectionSubtitle from '../../components/SectionSubtitle';

// Страница бронирования услуги специалиста (после нажатия кнопки "Забронировать")
// Здесь размещена инф-ия для бронирования услуги для зарегистрированных пользователей
const BookingService = () => {
  const { id } = useParams();

  const specialistInfo = professionals.find((item) => item.id === id);

  return (<>
      <SpecialistAdvertCardServices SpecialistData={specialistInfo} isBooking/>
      <SectionSubtitle title="Выберите дату" />
      <SectionSubtitle title="Выберите время" />

      </>
  );
};

export default BookingService;
