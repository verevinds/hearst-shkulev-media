import * as React from 'react';
import './Preview.scss';

export interface IPreview {
  contents: TContent[];
}

export type TContent = { title?: string; urlImg: any; text: string };

const Preview: React.FC<IPreview> = ({ contents }) => {
  return (
    <section className='content'>
      {contents.map((content: TContent, index: number) => {
        if (!index) {
          return (
            <article className='content__big' key={Math.random()}>
              <figure className='content__big__figure'>
                {content.title ? (
                  <figcaption className='content__big__title'>{content.title}</figcaption>
                ) : undefined}
                <img src={content.urlImg} alt={content.title} className='content__big__img' />
              </figure>
              <aside className='content__big__text'>{content.text}</aside>
            </article>
          );
        }

        return (
          <article className='content__small' key={Math.random()}>
            <figure className='content__small__figure'>
              {content.title ? (
                <figcaption className='content__small__title'>{content.title}</figcaption>
              ) : undefined}
              <img src={content.urlImg} alt={content.title} className='content__small__img' />
            </figure>
            <aside className='content__small__text'>{content.text}</aside>
          </article>
        );
      })}
    </section>
  );
};

export default React.memo(Preview);
