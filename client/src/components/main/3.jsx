import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar as faSolidStar, faStar as faRegularStar,
    faEye as faSolidEye, } from '@fortawesome/free-solid-svg-icons';


const AnimeList = () => {
  const [genres, setGenres] = useState([
    {
      id: 1,
      name: 'Action',
      anime: [
        {
          id: 1,
          title: 'Anime Title 1',
          rating: 4.5,
          image: 'path-to-image-1.jpg',
          views: 1000,
        },
        {
          id: 2,
          title: 'Anime Title 2',
          rating: 3.7,
          image: 'path-to-image-2.jpg',
          views: 750,
        },
      ],
    },
    // Добавьте другие жанры аниме и их элементы списка
  ]);

  const [activeGenre, setActiveGenre] = useState(1);
  const [sortOption, setSortOption] = useState('');

  const handleGenreClick = (genreId) => {
    setActiveGenre(genreId);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const sortAnimeByOption = (animeList) => {
    switch (sortOption) {
      case 'popularity':
        return animeList.sort((a, b) => b.views - a.views);
      case 'rating':
        return animeList.sort((a, b) => b.rating - a.rating);
      default:
        return animeList;
    }
  };

  const GenreItem = ({ genre }) => (
    <a
      href={`#${genre.id}`}
      onClick={() => handleGenreClick(genre.id)}
      className={`text-xl py-2 px-3 ${
        activeGenre === genre.id ? 'bg-blue-800 text-white' : ''
      }`}
    >
      {genre.name}
    </a>
  );

  const AnimeItem = ({ anime }) => (
    <div className="flex items-start justify-between py-2 pl-3 pr-2 hover:bg-gray-100 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-3">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <p>{anime.title}</p>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={anime.rating >= index + 1 ? faSolidStar : faRegularStar}
                className="text-yellow-500 text-xs"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          <span className="text-xs mr-1">{anime.views}</span>
          <FontAwesomeIcon
            icon={faSolidEye}
            className="text-red-500 text-xs animate-blink"
          />
        </div>
        <FontAwesomeIcon icon={faEye} className="text-gray-500 text-xs" />
      </div>
    </div>
  );

  const GenreList = ({ genre }) => (
    <div className="mt-4">
      <a href={`#${genre.id}`} className="font-bold text-lg">
        {genre.name}
      </a>
      {genre.anime.map((anime) => (
        <AnimeItem key={anime.id} anime={anime} />
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <a href="/genres" className="font-bold text-xl mb-4">
        Жанры аниме
      </a>
      <div className="flex gap-4">
        <div className="w-1/4">
          {genres.map((genre) => (
            <GenreItem key={genre.id} genre={genre} />
          ))}
        </div>
        <div className="w-3/4">
          <select
            value={sortOption}
            onChange={(e) => handleSortOptionChange(e.target.value)}
            className="mb-4 w-32 py-2 px-3 bg-white"
          >
            <option value="">Сортировать по:</option>
            <option value="popularity">Популярности</option>
            <option value="rating">Рейтингу</option>
          </select>
          {genres.map((genre) =>
            genre.id === activeGenre ? (
              <GenreList key={genre.id} genre={genre} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
