import style from './ServiceCardList.module.scss';
import ServiceCard from '../serviceCard/ServiceCard';
import toysImg from '../../../assets/images/images/services-card/toys.png';
import foodImg from '../../../assets/images/images/services-card/food.png';
import treatsImg from '../../../assets/images/images/services-card/treats.png';
import pillsImg from '../../../assets/images/images/services-card/pills.png';

const SpecialistCardList = () => (
    <ul className={style.cards}>
        <ServiceCard
            color='blue'
            title='Игрушки'
            img={toysImg}
        />
        <ServiceCard
            title='Корм'
            color='violet'
            img={foodImg}
        />
        <ServiceCard
            color='green'
            title='Вкусняшки'
            img={treatsImg}
        />
        <ServiceCard
            color='yellow'
            title='Лекарства'
            img={pillsImg}
        />
    </ul>
);

export default SpecialistCardList;