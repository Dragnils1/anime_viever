import React from "react";

export default function ImageWithAge() {
  return (
    <div class="relative w-250 h-350">
      <img
        src="https://kartinki.pics/uploads/posts/2022-03/1646442912_1-kartinkin-net-p-krasivie-kartinki-vertikalnie-2.jpg"
        alt="Изображение"
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-0 right-0 bg-black rounded border border-gray-500 text-white p-2">
        <div class="w-0.25">
          <p class="text-white text-center">0+</p>
        </div>
      </div>
    </div>
  );
}
