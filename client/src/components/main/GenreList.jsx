import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  selectedGenres: [],
  filter: "title", // "views", "rating", "popularity"
  order: "asc", // "desc"
};

function reducer(state, action) {
  switch (action.type) {
    case "select": {
      if (state.selectedGenres.includes(action.payload)) {
        return {
          ...state,
          selectedGenres: state.selectedGenres.filter(
            (id) => id !== action.payload
          ),
        };
      } else {
        return {
          ...state,
          selectedGenres: [...state.selectedGenres, action.payload],
        };
      }
    }
    case "setFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "setOrder": {
      return {
        ...state,
        order: action.payload,
      };
    }
    default:
      return state;
  }
}

// В этом коде я добавил два меню выбора (<select>),
// которые меняют выбранный фильтр и порядок сортировки.
// sortAnime() затем используется для сортировки списка аниме в выбранном жанре.
// Имейте в виду, что если у вас нет поля popularity в данных аниме,
// этот код не будет работать корректно.
// Вместо этого вам нужно будет заменить это неким другим полем или изменить логику сортировки.
const AnimeList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const animeGenres = [
    {
      id: 1,
      title: "Action",
      anime: [
        {
          title: "Anime Action 1",
          rating: 4.8,
          views: 2000,
          image: "action1.jpg",
        },
        {
          title: "Anime Action 2",
          rating: 4.3,
          views: 1500,
          image: "action2.jpg",
        },
        /* ...more anime */
      ],
    },
    {
      id: 2,
      title: "Adventure",
      anime: [
        {
          title: "Anime Adventure 1",
          rating: 3.9,
          views: 2400,
          image: "adventure1.jpg",
        },
        {
          title: "Anime Adventure 2",
          rating: 4.1,
          views: 2300,
          image: "adventure2.jpg",
        },
        /* ...more anime */
      ],
    },
    /* ...more genres */
  ];

  const handleClickGenre = (id) => {
    dispatch({ type: "select", payload: id });
  };

  const sortAnime = (animeList) => {
    return [...animeList].sort((a, b) => {
      if (state.order === "asc") {
        if (a[state.filter] < b[state.filter]) return -1;
        if (a[state.filter] > b[state.filter]) return 1;
      } else {
        if (a[state.filter] > b[state.filter]) return -1;
        if (a[state.filter] < b[state.filter]) return 1;
      }
      return 0;
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">
        <a href="/genres">Жанры аниме</a>
      </h2>
      <select
        onChange={(e) =>
          dispatch({ type: "setFilter", payload: e.target.value })
        }
        value={state.filter}
      >
        <option value="title">Title</option>
        <option value="views">Views</option>
        <option value="rating">Rating</option>
        <option value="popularity">Popularity</option>
      </select>
      <select
        onChange={(e) =>
          dispatch({ type: "setOrder", payload: e.target.value })
        }
        value={state.order}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <div className="w-full flex flex-col">
        {animeGenres.map((genre) => (
          <div key={genre.id} className="w-full p-2 border rounded mb-2 ">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleClickGenre(genre.id)}
            >
              <span>{genre.title}</span>
              <FontAwesomeIcon
                icon={
                  state.selectedGenres.includes(genre.id)
                    ? faChevronUp
                    : faChevronDown
                }
              />
            </div>
            {state.selectedGenres.includes(genre.id) &&
              sortAnime(genre.anime).map((anime) => (
                <div className="my-4" key={anime.title}>
                  <a
                    href={`/genres#${genre.id}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    {anime.title}
                  </a>
                  <div className="flex items-center mt-2">
                    <div className="w-12 h-12 mr-4 rounded-full bg-gray-200">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{anime.title}</span>
                      <div className="flex items-center mt-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-500 mr-1"
                        />
                        <span>{anime.rating}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-gray-500 mr-1"
                        />
                        <span>{anime.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
