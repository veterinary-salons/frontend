import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classes from './style.module.scss';

import NotificationMessage from '../../components/NotificationMessage';

const SuccessfulSignup = () => {
  const location = useLocation();
  const [messageData, setMessageData] = useState({});

  useEffect(() => {
    if (location.state.userRole === "user") {
      setMessageData({
        imageNumber: '4',
        title: 'Ура! Теперь мы с вами официально друзья',
        text: 'Добавляйте своих питомцев и ищите подходящие услуги',
        to: '/profile',
        buttonText: 'Добавить питомца'
      });
    } else if (location.state.userRole === "specialist") {
      setMessageData({
        imageNumber: '13',
        title: 'Ура! Теперь вы можете разместить вашу услугу',
        text: 'Вы можете оказывать сразу несколько услуг. Для каждой услуги вам необходимо создать новое объявление.',
        to: '/profile',
        buttonText: 'Разместить услугу'
      });
    }
  }, []);
  
    return (
    <section className={classes['successful-message']}>
      <NotificationMessage
        imageNumber={messageData.imageNumber}
        title={messageData.title}
        text={messageData.text}
        to={messageData.to}
        buttonText={messageData.buttonText}
      />      
    </section>
  )
};

export default SuccessfulSignup;
