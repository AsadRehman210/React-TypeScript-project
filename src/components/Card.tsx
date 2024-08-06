import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardProps } from '../Types/Types';

const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <div className="flex flex-col bg-white xs:mx-4 mx-auto text-capitalize shadow-lg rounded-md p-6 place-self-start h-full" style={{ maxWidth: '18rem' }}>
      <h3 className="capitalize text-xl font-semibold">{title}</h3>
      <p className="capitalize py-4 text-base text-justify flex-grow">{body}</p>
      <NavLink to={`/home/${id}`} className="italic mt-auto text-blue-700 font-semibold w-max">More Detail</NavLink>
    </div>
  );
}

export default Card;
