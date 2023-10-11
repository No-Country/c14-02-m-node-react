import React from "react";

function SuggestionFooter() {
  return (
    <div className=" w-[600px] h-[300px] mx-auto mt-8 rounded-x1 bg-hexFooter-color">
        <h1>Inspiracion para tus futuras escapadas</h1>
        <div>horizontal select: render somethings categories
          <ul className="flex">
            <li className="mr-8">Las mas buscadas</li>
            <li className="mr-8">arte y cultura</li>
            <li className="mr-8">ak aire kibre</li>
            <li className="mr-8">montañas</li>
          </ul>
          
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <div className="col-span-1 row-span-1 bg-blue-200">1result suggestion grid</div>
          <div className="col-span-1 row-span-2 bg-blue-200">2</div>
          <div className="col-span-1 row-span-3 bg-blue-200">3</div>
          <div className="col-span-1 row-span-4 bg-blue-200">4</div>
        </div>
    </div>
  );
}

export default SuggestionFooter;
