import imgCalendar from '../../assets/image/icon/calendar/calendar.svg';
import style from './Calendar.module.scss';

const Calendar = () => (
  <img className={style.calendar} src={imgCalendar} alt="календарь" />
);

export default Calendar;
