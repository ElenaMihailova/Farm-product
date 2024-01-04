import {Title, TitleSize} from '../title/title';

import './style.css';

function AdvantageCard({title, owner, about, isNegative, image}) {
  return (
    <article className={`feature${isNegative ? ' feature_negative' : ''}`}>
      <header className='feature__header'>
        <img
          className='feature__img'
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`feature__owner${
              isNegative ? ' feature__owner_negative' : ''
            }`}
          >
            {owner}
          </span>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </header>
      <p
        className='feature__text'
        dangerouslySetInnerHTML={{__html: about}}
      ></p>
    </article>
  );
}

export default AdvantageCard;
