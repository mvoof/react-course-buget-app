import { ReactNode } from 'react';
import './Card.css';

type CardProps = {
  className: string;
  children: ReactNode;
};

function Card({ className, children }: CardProps) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Card;
