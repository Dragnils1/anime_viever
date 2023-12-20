import { useState } from 'react';

const AnimeList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const animeData = [
    {
      day: 'Понедельник',
      anime: ['Аниме 1', 'Аниме 2', 'Аниме 3'],
    },
    {
      day: 'Вторник',
      anime: ['Аниме 4', 'Аниме 5'],
    },
    {
      day: 'Среда',
      anime: ['Аниме 6', 'Аниме 7', 'Аниме 8', 'Аниме 9'],
    },
    // Добавьте данные для остальных дней недели
  ];

  return (
    <div className="space-y-4">
      {animeData.map((data, index) => (
        <div key={index}>
          <button
            className="flex items-center justify-between w-full bg-gray-200 px-4 py-2"
            onClick={toggleList}
          >
            <span className="text-xl font-medium">{data.day}</span>
            <span>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transform rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </button>
          {isOpen && (
            <ul className="pl-8 space-y-2">
              {data.anime.map((anime, index) => (
                <li key={index} className="list-disc">{anime}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
