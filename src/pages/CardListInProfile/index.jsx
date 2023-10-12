import { useSelector } from 'react-redux';
import classes from './style.module.scss';
// import PetCardList from '../../modules/petCardList';
import petList from '../../assets/constants/petList';
import PetCard from '../../modules/petCardList/petCard/index';
import ProfileServiceCard from '../../modules/profileServiceCard';

import CreatorCardListInProfile from '../../components/CreatorCardListInProfile';
import NoPet from '../../modules/noPet';

const servicseList = [
  {
    id: '124',
    specialistType: 'Ветеринарный врач',
    petType: ['Кошки', 'Собаки'],
    services: [
      {
        serviceType: 'Консультация',
        price: '2000 ₽/усл.',
      },
      {
        serviceType: 'Вакцинация',
        price: '500 ₽/усл.',
      },
    ],
    schedule: [
      {
        available: true,
        weekDay: 'Пн — Пт',
        workingHours: '9:00 - 14:00',
      },
      {
        available: false,
        weekDay: 'Чт',
        workingHours: 'выходной',
      },
      {
        available: true,
        weekDay: 'Вс',
        workingHours: 'круглосуточно',
      },
    ],
    breakTime: 'Каждый день - перерыв 12:00 - 13:00.',
    description:
      'Благодаря многолетнему опыту работы с домашними животными, глубокому знанию рынка услуг и уровню оказания медицинской помощи, я смог(ла) подняться на новую ступень  в работе с животными. Мой опыт позволил(а) мне разработать собственный подход к диагностике и методам лечения.',
  },
  {
    id: '123',
    specialistType: 'Ветеринарный врач',
    petType: ['Кошки', 'Собаки'],
    services: [
      {
        serviceType: 'Консультация',
        price: '2000 ₽/усл.',
      },
      {
        serviceType: 'Вакцинация',
        price: '500 ₽/усл.',
      },
    ],
    schedule: [
      {
        available: true,
        weekDay: 'Пн — Пт',
        workingHours: '9:00 - 14:00',
      },
      {
        available: false,
        weekDay: 'Чт',
        workingHours: 'выходной',
      },
      {
        available: true,
        weekDay: 'Вс',
        workingHours: 'круглосуточно',
      },
    ],
    breakTime: 'Каждый день - перерыв 12:00 - 13:00.',
    description:
      'Благодаря многолетнему опыту работы с домашними животными, глубокому знанию рынка услуг и уровню оказания медицинской помощи, я смог(ла) подняться на новую ступень  в работе с животными. Мой опыт позволил(а) мне разработать собственный подход к диагностике и методам лечения.',
  },
  {
    id: '1234',
    specialistType: 'Ветеринарный врач',
    petType: ['Кошки', 'Собаки'],
    services: [
      {
        serviceType: 'Консультация',
        price: '2000 ₽/усл.',
      },
      {
        serviceType: 'Вакцинация',
        price: '500 ₽/усл.',
      },
    ],
    schedule: [
      {
        available: true,
        weekDay: 'Пн — Пт',
        workingHours: '9:00 - 14:00',
      },
      {
        available: false,
        weekDay: 'Чт',
        workingHours: 'выходной',
      },
      {
        available: true,
        weekDay: 'Вс',
        workingHours: 'круглосуточно',
      },
    ],
    breakTime: 'Каждый день - перерыв 12:00 - 13:00.',
    description:
      'Благодаря многолетнему опыту работы с домашними животными, глубокому знанию рынка услуг и уровню оказания медицинской помощи, я смог(ла) подняться на новую ступень  в работе с животными. Мой опыт позволил(а) мне разработать собственный подход к диагностике и методам лечения.',
  },
];

const CardListInProfile = () => {
  const profileType = useSelector((state) => state.user.profileType);
  const isCustomer = profileType === 'customer';
  const createPetCard = () =>
    petList || petList?.length === 0 ? (
      <CreatorCardListInProfile list={petList} element={PetCard} />
    ) : (
      <NoPet />
    );

  return (
    <section className={classes.list}>
      <h2 className={classes.list__title}>
        {isCustomer ? 'Мои питомцы' : 'Мои услуги'}
      </h2>
      {isCustomer ? (
        createPetCard()
      ) : (
        <CreatorCardListInProfile
          list={servicseList}
          element={ProfileServiceCard}
        />
      )}
    </section>
  );
};

export default CardListInProfile;
