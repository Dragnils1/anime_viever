import React from 'react';

const Table = () => {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="w-full table-fixed">
        <tbody className="bg-white">
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Эпизоды</td>
            <td className="py-2 px-4">7 / ?</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Статус</td>
            <td className="py-2 px-4">Онгоинг</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Жанр</td>
            <td className="py-2 px-4">Комедия, Сверхъестественное, Сёнэн, Экшен</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Возрастные ограничения</td>
            <td className="py-2 px-4">18+</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Длительность</td>
            <td className="py-2 px-4">23 мин. ~ серия</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Озвучка</td>
            <td className="py-2 px-4">AniDUB, AniLibria, SHIZA Project, Студийная Банда, AnimeVost, AniStar, AniRise, TVShows, Dream Cast</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-bold">Следующий эпизод </td>
            <td className="py-2 px-4">24 нояб. 2023 пт 19:23 ожидается выход 8 серии</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
