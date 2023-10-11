import React, { useEffect, useState } from "react";

function IvpCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();

  return (
    <>
      <div className="flex border-b">
        <div className="md:p-16 md:pb-12 p-5bg-white rounded-t">
          <div className="text-center mb-4">
            <h2>4 noches en 墨田区</h2>
            <p>8 de oct. de 2023</p>
          </div>
          <div className="px-4">
            <div className="flex text-gray-800 items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <h1 className="text-xl mx-8 justify-center font-semibold text-gray-800">
                October 2020
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Lu.
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Ma.
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Mi.
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Ju.
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Vi.
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Sa.
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="font-medium text-center text-gray-800">
                        Do.
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-6">
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                  </td>
                  <td className="pt-6">
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                  </td>
                  <td className="pt-6">
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">1</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">2</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">3</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">4</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">5</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">6</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">7</p>
                    </div>
                  </td>
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <p className="w-14 h-14 flex items-center justify-center font-medium text-white bg-stone-950 rounded-full">
                          8
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">9</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">10</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">11</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">12</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">13</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">14</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">15</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">16</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">17</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">18</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">19</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">20</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">21</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">22</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">23</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">24</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500">25</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">26</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">27</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">28</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">29</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">30</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default IvpCalendar;
