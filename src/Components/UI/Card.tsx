import { ReactNode } from 'react';
import './Card.css';

type CardPropsType = {
  className: string;
  children: ReactNode;
};

const Card = ({ className, children }: CardPropsType) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
