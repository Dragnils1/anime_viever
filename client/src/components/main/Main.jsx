import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import Card from "../general/Card";
import "../../App.css";
import { TheosPlayer } from "@aka_theos/react-hls-player";
import AnimeList from "../general/AnimeList";
import GenreList from "./GenreList";

export default function Main() {
  const [cards, setcards] = useState([
    {
      title: "no9",
      rating: "5",
      anime_img_src: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
      link_to_anime: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
      img_src: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
      genre: "travel",
      voice_acting: "AniDub",
      status: "ongoing",
      age_limit: "18",
    },
    {
      title: "Сад теней",
      rating: "4.2",
      a:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
      img_src: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
      link_to_anime: "/anime/sad_teney",
      genre: "Сверхестественное",
      voice_acting: "AniDub",
      status: "вышел",
      age_limit: "16",
    },
  ]);
  const [filter, setFilter] = useState("all"); // добавляем состояние фильтра

  const onFilterChange = (event) => {
    setFilter(event.target.value); // изменяем состояние фильтра при выборе нового значения
  };

  const filteredCards =
    filter === "all" ? cards : cards.filter((card) => card.genre === filter); // фильтруем карточки на основе выбранного фильтра

  const Item = ({ index, style }) => {
    const el = filteredCards[index]; // Получаем элемент, находящийся на этой позиции списка
    return (
      /* Рендерим карточку */
      // <div style={style}> 
        <Card {...el} /> 
      // </div>
    );
  };

  return (
    <div>
      <TheosPlayer
        src="https://mangavost.org/content/stream/boevoj_kontinent_2_neprevzojdyonnyj_klan_tan/001_25423/hls/index.m3u8"
        autoPlay={false}
      />
      <AnimeList />
      <GenreList />
      {/* <div className="flex justify-center items-center h-screen">
      <TooltipIcon text={'dsadasd'} />
    </div> */}
      <div className="mb-4">
        <label>Filter by genre:</label>
        <select value={filter} onChange={onFilterChange}>
          <option value="all">All</option>
          <option value="travel">Travel</option>
          <option value="Сверхестественное">Сверхестественное</option>
          {/* добавьте дополнительные опции по мере необходимости */}
        </select>
      </div>

      {/* обрабатываем отфильтрованные карточки вместо всех карточек */}
      <List
        height={500} // Устанавливаем высоту списка. Замените эту цифру на то, что вам подходит
        width="100%" // Занимают всю возможную ширину
        itemSize={120} // Устанавливаем примерный размер наших карточек. Измените эту цифру на размер вашей карточки
        itemCount={filteredCards.length} // Количество элементов равно количеству карточек после фильтрации
      >
        {Item}
      </List>
    </div>
  );
}
