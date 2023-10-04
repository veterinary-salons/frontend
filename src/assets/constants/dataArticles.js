// Covers
import articleImg1 from '../images/images/article-card/1.png';
import articleImg2 from '../images/images/article-card/2.png';
import articleImg3 from '../images/images/article-card/3.png';
import articleImg4 from '../images/images/article-card/4.png';
import articleImg5 from '../images/images/article-card/5.png';
import articleImg6 from '../images/images/article-card/6.png';

// Content
import contentImg1 from '../images/images/articles/cat and dog.png';
import contentImg2 from '../images/images/articles/cat and mouse.png';
import contentImg3 from '../images/images/articles/vaccine.png';
import contentImg4 from '../images/images/articles/doctor and dog.png';
import contentImg5 from '../images/images/articles/dog shower.png';
import contentImg6 from '../images/images/articles/dog paw.png';
import contentImg7 from '../images/images/articles/sad cat.png';
import contentImg8 from '../images/images/articles/street cat.png';
import contentImg9 from '../images/images/articles/parrots.png';
import contentImg10 from '../images/images/articles/soft parrot.png';
import contentImg11 from '../images/images/articles/dog with cake.png';
import contentImg12 from '../images/images/articles/dog with vegetables.png';


const dataArticlePage = [
  {
    id: '1',
    imgCover: articleImg1,
    title: 'Как подружить питомцев?',
    date: '24.09.2023',
    link: 'kp.ru',
    source: 'https://www.kp.ru/family/domashnie-zhivotnye/kak-podruzhit-domashnikh-pitomtsev/',
    imgContent: [contentImg1, contentImg2],
    isLiked: false,
  },
  {
    id: '2',
    imgCover: articleImg2,
    title: 'Как часто прививать домашних животных?',
    date: '24.09.2023',
    link: 'aif.ru',
    source: 'https://aif.ru/society/nature/vakcinaciya_koshek_i_sobak_kak_chasto_privivat_domashnih_zhivotnyh',
    imgContent: [contentImg3, contentImg4],
    isLiked: false,
  },
  {
    id: '3',
    imgCover: articleImg3,
    title: 'Зачем собакам нужен регулярный груминг?',
    date: '24.09.2023',
    link: 'vet.4lapy.ru',
    source: 'https://vet.4lapy.ru/news/zachem-sobakam-nyzhen-regulyarnyi-gruming/',
    imgContent: [contentImg5, contentImg6],
    isLiked: false,
  },
  {
    id: '4',
    imgCover: articleImg4,
    title: 'Глисты у кошек',
    date: '24.09.2023',
    link: 'proplan.ru',
    source: 'https://www.proplan.ru/cat/article/glisty-u-koshki/',
    imgContent: [contentImg7, contentImg8],
    isLiked: false,
  },
  {
    id: '5',
    imgCover: articleImg5,
    title: '7 причин завести попугая',
    date: '24.09.2023',
    link: 'lifehacker.ru',
    source: 'https://lifehacker.ru/7-prichin-zavesti-popugaya/',
    imgContent: [contentImg9, contentImg10],
    isLiked: false,
  },
  {
    id: '6',
    imgCover: articleImg6,
    title: 'Чем опасна «сладкая жизнь»?',
    date: '24.09.2023',
    link: 'lapkins.ru',
    source: 'https://lapkins.ru/p/pochemu-sobakam-nelzya-sladkoe/',
    imgContent: [contentImg11, contentImg12],
    isLiked: false,
  },
];

export default dataArticlePage;
