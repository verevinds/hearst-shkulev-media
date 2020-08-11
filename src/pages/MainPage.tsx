import * as React from 'react';
import Preview, { TContent } from '../components/Preview/Preview';
import imgTenStars from '../images/image5.png';
import imgMovieAndReal from '../images/image4.png';
import imgSevenHabits from '../images/image3.png';
import imgTatuAndPiercing from '../images/image5_1.png';
import imgFiveSkills from '../images/image4_1.png';
import imgSevenBadHabits from '../images/image3_1.png';
import imgTabooSocials from '../images/image5_2.png';
import imgRomanticRecord from '../images/image4_2.png';
import imgPresentMan from '../images/image3_2.png';

import './MainPage.scss';

const MainPage: React.FC = () => {
  const contentOne: TContent[] = [
    {
      title: 'Он и она',
      urlImg: imgTenStars,
      text: '10 звезд, которые любили простых парней, но замуж за них не пошли',
    },
    {
      urlImg: imgMovieAndReal,
      text: 'Кино и реальность: как бы развивались отношения на самом деле',
    },
    { urlImg: imgSevenHabits, text: '7 привычек, которые важно воспитать в себе до замужества' },
  ];
  const contentTwo: TContent[] = [
    {
      title: 'Дети',
      urlImg: imgTatuAndPiercing,
      text: 'И тату, и пирсинг: эксперименты со внешностью звездных детей',
    },
    {
      urlImg: imgFiveSkills,
      text: '5 навыков и качеств, которых гаджеты лишили наших детей',
    },
    { urlImg: imgSevenBadHabits, text: '7 привычек, которые важно воспитать в себе до замужества' },
  ];
  const contentThree: TContent[] = [
    {
      title: 'Стиль жизни',
      urlImg: imgTabooSocials,
      text: 'Стоит ли отказываться от социальных сетей на неделю',
    },
    {
      urlImg: imgRomanticRecord,
      text: 'В России установили один из самых романтичных рекордов',
    },
    {
      urlImg: imgPresentMan,
      text: 'Что подарить мужчине, чтобы ему это понравилось: 100+ идей',
    },
  ];

  return (
    <main className='main'>
      <div className='topic'>
        <Preview contents={contentOne} />
        <Preview contents={contentTwo} />
        <Preview contents={contentThree} />
      </div>
    </main>
  );
};

export default React.memo(MainPage);
