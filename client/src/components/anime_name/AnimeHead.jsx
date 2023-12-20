import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const filledStars = Math.round(rating / 2); // Количество заполненных звезд

  return (
    <div className="flex items-center">
      {/* Звезды рейтинга */}
      <div className="mr-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-yellow-500 ${
              index < filledStars ? 'fill-current' : 'fill-transparent'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      {/* Количество просмотров */}
      <div className="flex items-center">
        <FontAwesomeIcon icon={faEye} fade className="mr-2" /> {rating}
      </div>
    </div>
  );
};

const AnimeHead = () => {
  const rating = 8; // Пример рейтинга

  return (
    <div className="w-full h-50 bg-gray-200 flex items-center justify-between p-4">
      <h1 className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sit, pariatur quod sunt fuga similique, quos ea vero repellat aliquid ullam architecto vel minus aut odio veniam qui praesentium possimus!</h1>
      <Rating rating={rating} />
    </div>
  );
};

export default AnimeHead;
