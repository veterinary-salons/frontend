import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { utcToZonedTime } from 'date-fns-tz';
// import classNames from 'classnames';
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
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import Button from '../../ui/buttons/originButton/Button';

const dayOfWeekMappings = {
  Mon: 'Пн',
  Tue: 'Вт',
  Wed: 'Ср',
  Thu: 'Чт',
  Fri: 'Пт',
  Sat: 'Сб',
  Sun: 'Вс',
};

const generateTimeIntervals = (startTime, endTime, interval) => {
  const timeIntervals = [];
  const [startHour, startMinute] = startTime.split('-').map(Number);
  const [endHour, endMinute] = endTime.split('-').map(Number);

  let currentHour = startHour;
  let currentMinute = startMinute;

  while (
    currentHour < endHour ||
    (currentHour === endHour && currentMinute <= endMinute)
  ) {
    const formattedHour = currentHour.toString().padStart(2, '0');
    const formattedMinute = currentMinute.toString().padStart(2, '0');
    timeIntervals.push(`${formattedHour}-${formattedMinute}`);

    // Увеличиваем текущее время на указанный интервал (в минутах)
    currentMinute += interval;
    if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute %= 60;
    }
  }

  return timeIntervals;
};

const BookingService = () => {
  // временная переменная интервала времени

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
  const [visibleTimeSlots, setVisibleTimeSlots] = useState(initialVisibleDates);
  const [activeDateIndex, setActiveDateIndex] = useState(null); // Индекс активной даты
  const [activeTimeIndex, setActiveTimeIndex] = useState(null); // Индекс активной даты

  const handleDateButtonClick = (index) => {
    setActiveDateIndex(index);
  };

  const handleTimeButtonClick = (index) => {
    setActiveTimeIndex(index);
  };

  const timeSlots = generateTimeIntervals('10-00', '19-30', 15);

  return (
    <form id="booking-service" className={classes['booking-form']}>
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
          <div
            className={`${classes['advert-card__options-buttons']} ${
              visibleDates > dateRange.length
                ? classes['advert-card__options-buttons_align-bottom']
                : ''
            }`}
          >
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
        <div className={classes['advert-card']}>
          <ul className={classes['advert-card__schedule-day']}>
            {timeSlots.slice(0, visibleTimeSlots).map((time, index) => (
              <li key={time}>
                <ScheduleButton
                  variant="time"
                  time={time}
                  active={activeTimeIndex === index} // Подсветка активной даты
                  onClick={() => handleTimeButtonClick(index)}
                />
              </li>
            ))}
          </ul>
          <div
            className={`${classes['advert-card__options-buttons']} ${
              visibleTimeSlots > timeSlots.length
                ? classes['advert-card__options-buttons_align-bottom']
                : ''
            }`}
          >
            {visibleTimeSlots < timeSlots.length && ( // Показываем кнопку "Open" только если есть еще даты для отображения
              <ScheduleButton
                variant="openMore"
                onClick={() => setVisibleTimeSlots(visibleTimeSlots + 14)}
              />
            )}
            {visibleTimeSlots > 14 && ( // Показываем кнопку "Close" только если видимых строк больше 14
              <ScheduleButton
                variant="close"
                onClick={() => setVisibleTimeSlots(visibleTimeSlots - 14)}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <SectionSubtitle title="Где хотите получить услугу" />
        <div className={classes['appointment-type']}>
          <Checkbox
            checked={false}
            htmlType="checkbox"
            value="me-to-spec"
            name="appointmentType"
            // getCheckbox={handleFormChange}
          >
            Я приеду к специалисту
          </Checkbox>
          <Checkbox
            checked={false}
            htmlType="checkbox"
            value="spec-to-me"
            name="appointmentType"
            // getCheckbox={handleFormChange}
          >
            Специалист приедет ко мне
          </Checkbox>
        </div>
      </div>
      <Button size="medium">Забронировать</Button>
    </form>
  );
};

export default BookingService;
