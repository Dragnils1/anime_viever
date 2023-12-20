import React from "react";
import { useParams } from "react-router-dom";
import ImageWithAge from "../general/ImageWithAge";
import AnimeHead from "./AnimeHead";
import Dropdown from "./Dropdown";
import Table from "../general/Table";
import BeautifulText from "../general/BeautifulText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { TheosPlayer } from "@aka_theos/react-hls-player";
import WeekScheduleContainer from "../general/WeekDayContainer";
import AnimeList from "../general/AnimeList";

export default function AnimeName() {
  const { anime_name } = useParams();

  return (
    <div className="py-3">
      <div class="px-4">
        <div class="flex">
          <div class="w-1/4 bg-gray-200  p-5">
            <ImageWithAge />
            <Dropdown
              title="Быстро выбрать серию"
              items={[
                "Опенинг",
                "Option 2",
                {
                  title: "первый сезон",
                  items: ["1 серия ", "Sub Option 2", "Sub Option 3"],
                },
                "Option 4",
              ]}
            />
            <Dropdown
              title="Добавить в список"
              items={[
                "смотрю",
                "юуду смотреть",
                {
                  title: "первый сезон",
                  items: ["1 серия ", "Sub Option 2", "Sub Option 3"],
                },
                "Option 4",
              ]}
            />
            <div className="flex flex-col">
              <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded">
                <FontAwesomeIcon icon={faTelegram} beat />
                Наша группа в ВКонтакте
              </button>
              <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded mt-4">
                <FontAwesomeIcon icon={faVk} bounce />
                Наша группа в Telegram
              </button>
            </div>
          </div>
          <div class="w-3/4 bg-gray-300  p-5">
            <AnimeHead />
            <Table />
            <BeautifulText />
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4 bg-gray-200  p-5">
            <AnimeList />
          </div>
          <div class="w-3/4 bg-gray-300  p-5">
            <TheosPlayer
              src="https://mangavost.org/content/stream/boevoj_kontinent_2_neprevzojdyonnyj_klan_tan/001_25423/hls/index.m3u8"
              autoPlay={false}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
