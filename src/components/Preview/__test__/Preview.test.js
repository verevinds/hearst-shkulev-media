import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import imgTenStars from 'image5.png';
import imgMovieAndReal from 'image4.png';
import imgSevenHabits from 'image3.png';

import Preview from '../Preview';

Enzyme.configure({ adapter: new Adapter() });

describe('<Preview />', () => {
  const contentOne = [
    {
      id: 1,
      title: 'Он и она',
      urlImg: imgTenStars,
      text: '10 звезд, которые любили простых парней, но замуж за них не пошли',
    },
    {
      id: 2,
      urlImg: imgMovieAndReal,
      text: 'Кино и реальность: как бы развивались отношения на самом деле',
    },
    {
      id: 3,
      urlImg: imgSevenHabits,
      text: '7 привычек, которые важно воспитать в себе до замужества',
    },
  ];
  const jsxComponent = <Preview contents={contentOne} />;
  const wrapper = shallow(jsxComponent);

  it('should be defined', () => {
    expect(Preview).toBeDefined();
  });

  it('render success', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
