import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { utcToZonedTime } from 'date-fns-tz';
import {
  format,
  addMonths,
  startOfWeek,
  eachDayOfInterval,
  endOfDay,
} from 'date-fns';
import classes from './style.module.scss';
import { professionals } from '../../assets/constants/temporaryData';
import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';
import SectionSubtitle from '../../components/SectionSubtitle';
import ScheduleButton from '../../ui/buttons/scheduleButton';

const dayOfWeekMappings = {
  Mon: 'Пн',
  Tue: 'Вт',
  Wed: 'Ср',
  Thu: 'Чт',
  Fri: 'Пт',
  Sat: 'Сб',
  Sun: 'Вс',
};

const BookingService = () => {
  const { id } = useParams();
  const specialistInfo = professionals.find((item) => item.id === id);

  const currentDate = utcToZonedTime(new Date(), 'Europe/Moscow');
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });

  const futureDate = addMonths(startOfCurrentWeek, 2);

  const dateRange = eachDayOfInterval({
    start: startOfCurrentWeek,
    end: futureDate,
  });

  const initialVisibleDates = 14; // Изначально видимы две строки с датами
  const [visibleDates, setVisibleDates] = useState(initialVisibleDates);
  const [activeDateIndex, setActiveDateIndex] = useState(null); // Индекс активной даты

  const handleDateButtonClick = (index) => {
    setActiveDateIndex(index);
  };
  return (
    <>
      <SpecialistAdvertCardServices SpecialistData={specialistInfo} isBooking />
      <div>
        <SectionSubtitle title="Выберите дату" />
        <div className={classes['advert-card']}>
          <ul className={classes['advert-card__schedule-day']}>
            {dateRange.slice(0, visibleDates).map((date, index) => (
              <li key={format(date, 'dd.MM.yyyy')}>
                <ScheduleButton
                  variant="dayMonth"
                  dayWeek={dayOfWeekMappings[format(date, 'EEE')]}
                  dayMonth={format(date, 'dd.MM')}
                  disabled={currentDate >= endOfDay(date)}
                  active={activeDateIndex === index} // Подсветка активной даты
                  onClick={() => handleDateButtonClick(index)}
                  
                />
              </li>
            ))}
          </ul>
          <div className={`${classes['advert-card__options-buttons']} ${
              visibleDates > dateRange.length
                ? classes['advert-card__options-buttons_align-bottom']
                : ''
            }`}>
            {visibleDates < dateRange.length && ( // Показываем кнопку "Open" только если есть еще даты для отображения
              <ScheduleButton
                variant="openMore"
                onClick={() => setVisibleDates(visibleDates + 14)}
              />
            )}
            {visibleDates > 14 && ( // Показываем кнопку "Close" только если видимых строк больше 14
              <ScheduleButton
                variant="close"
                onClick={() => setVisibleDates(visibleDates - 14)}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <SectionSubtitle title="Выберите время" />
      </div>
    </>
  );
};

export default BookingService;
