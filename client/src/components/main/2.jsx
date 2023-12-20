import { useState } from 'react';

const GenreList = () => {
  // Имитация данных с жанрами аниме
  const genres = [
    {
      id: 1,
      name: 'Action',
      anime: [
        {
          id: 1,
          title: 'Anime 1',
          rating: 4.5,
          image: 'https://pics.blokino.org/anime/00/0002/main.jpg',
          views: 5000,
        },
        {
          id: 2,
          title: 'Anime 2',
          rating: 4.2,
          image: 'https://pics.blokino.org/anime/00/0002/main.jpg',
          views: 3000,
        },
        // Здесь продолжается список аниме для жанра "Action"
      ],
    },
    {
      id: 2,
      name: 'Comedy',
      anime: [
        {
          id: 1,
          title: 'Anime 3',
          rating: 4.8,
          image: 'image3.jpg',
          views: 7500,
        },
        {
          id: 2,
          title: 'Anime 4',
          rating: 4.1,
          image: 'image4.jpg',
          views: 4000,
        },
        // Здесь продолжается список аниме для жанра "Comedy"
      ],
    },
    // Здесь продолжается список жанров
  ];

  const [sortOption, setSortOption] = useState('popularity');

  // Функция для изменения сортировки списка
  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  // Функция для отображения звездочек рейтинга
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        <a href="/genres" className="text-blue-500">Жанры аниме</a>
      </h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} className="mb-4">
            <h2 className="text-lg font-bold mb-2">
              <a href={`/genres/${genre.id}`} className="text-blue-500">{genre.name}</a>
            </h2>
            <div className="flex">
              <div className="flex-shrink-0 w-16 h-16 mr-4">
                {/* Можно использовать фото изображения жанра */}
                <img src={"https://pics.blokino.org/anime/00/0002/main.jpg"} alt={genre.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <ul>
                  {genre.anime
                    .sort((a, b) => {
                      if (sortOption === 'popularity') {
                        return b.views - a.views;
                      }
                      if (sortOption === 'rating') {
                        return b.rating - a.rating;
                      }
                      return 0;
                    })
                    .map((anime) => (
                      <li key={anime.id} className="mb-2">
                        <a href={`/anime/${anime.id}`} className="text-blue-500">{anime.title}</a>
                        <div className="flex items-center">
                          <div className="mr-2">
                            {renderRating(anime.rating)}
                          </div>
                          <div>Просмотры: {anime.views}</div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <label className="mr-2">Сортировка:</label>
        <select
          value={sortOption}
          onChange={(e) => handleSortOptionChange(e.target.value)}
          className="border border-gray-300 p-1 rounded"
        >
          <option value="popularity">По популярности</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>
    </div>
  );
}

export default GenreList;
