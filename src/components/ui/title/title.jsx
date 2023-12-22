import React from 'react';
import './style.css';

export const TitleSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    EXTRA_SMALL: "extra_small"
};

function Title({children, size}) {
  return <h1 className = {`title title${size ? `--${size}`: ""}`}>
        {children}
    </h1>;
}

export default Title;
