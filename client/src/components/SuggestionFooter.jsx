import React from "react";

function SuggestionFooter() {
  return (
    <>
      <div className=" w-[90%] h-[350px] mx-auto mt-8 rounded-x1 bg-hexFooter-color font-airbnb">
        <h2 className="font-bold m-4">Inspiración para tus futuras escapadas</h2>
          <div className="m-4">horizontal select: render somethings categories
            <ul className="flex">
              <li className="mr-8">Las mas buscadas</li>
              <li className="mr-8">arte y cultura</li>
              <li className="mr-8">al aire libre</li>
              <li className="mr-8">montañas</li>
            </ul>
            
          </div>
          <div className="grid grid-cols-3 grid-rows-4 gap-3 m-4">
            <div className="col-div-1 row-div-1 w-1/1">ejemplo 1 + feature</div>
            <div className="col-div-1 row-div-2 w-1/1">ejemplo2 </div>
            <div className="col-div-1 row-div-3 w-1/1">ejemplo 3</div>

            <div className="col-div-2 row-div-1 w-1/1">ejemplo 4</div>
            <div className="col-div-2 row-div-2 w-1/1">ejemplo 5</div>
            <div className="col-div-2 row-div-3 w-1/1">ejemplo 6</div>

            <div className="col-div-3 row-div-1 w-1/1">ejemplo 7</div>
            <div className="col-div-3 row-div-2 w-1/1">ejemplo 8</div>
            <div className="col-div-3 row-div-3 w-1/1">ejemplo 9</div>

            <div className="col-div-4 row-div-1 w-1/1">ejemplo 10</div>
            <div className="col-div-4 row-div-2 w-1/1">ejemplo 10</div>
            <div className="col-div-4 row-div-3 w-1/1">ejemplo 10</div>

          </div>
      </div>
    </>
  );
}

export default SuggestionFooter;
