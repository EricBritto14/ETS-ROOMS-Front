import React from "react";
import CardEdition from "../../components/card-edition";

export default function EditEvent() {
  return (
    <main className="mt-6">
      {/* CALENDÁRIO E NOME DA SALA */}
      <div className="flex items-center justify-center">
        <div>
          <p className="text-xl my-4 text-center">Ca170 - Lab. Eletrônica</p>
          {/* CALENDÁRIO */}
          <div>
            <header className="flex justify-between bg-[#F6F6F6] p-2 rounded-t-lg border-2 border-[#C1C7CC]">
              <div className="flex ">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <g clip-path="url(#clip0_1189_4145)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.9431 7.05727C21.4638 7.57797 21.4638 8.42219 20.9431 8.94289L13.8859 16.0001L20.9431 23.0573C21.4638 23.578 21.4638 24.4222 20.9431 24.9429C20.4224 25.4636 19.5782 25.4636 19.0575 24.9429L11.0575 16.9429C10.5368 16.4222 10.5368 15.578 11.0575 15.0573L19.0575 7.05727C19.5782 6.53657 20.4224 6.53657 20.9431 7.05727Z"
                      fill="black"
                    />
                    <path
                      d="M20 8L12 16L20 24"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1189_4145">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-xl mx-4">Agosto 2023</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M11.999 8L19.999 16L11.999 24"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex ">
                <p className="text-xl mx-4">Hoje, 30 de Agosto</p>
              </div>
            </header>
            {/* DIAS DO MÊS */}
            <div className="rounded-b-lg border-x-2 border-b-2 border-[#C1C7CC] ">
              {/* DIAS DA SEMANA SEG TER QUA QUI SEX */}
              <div className="flex justify-around text-[#71767C] text-base py-2 font-bold">
                <h1>SEG</h1>
                <h1>TER</h1>
                <h1>QUA</h1>
                <h1>QUI</h1>
                <h1>SEX</h1>
              </div>
              {/* PRIMEIRA SEMANA */}
              <div className="flex justify-around text-center">
                <div className="border-r-2 border-b-2 border-[#C1C7CC] w-full">
                  <p className="text-[#71767C] text-xl">31</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">01</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                    <CardEdition />
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">02</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">03</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">04</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
              </div>
              {/* SEGUNDA SEMANA */}
              <div className="flex justify-around text-center">
                <div className="border-r-2 border-b-2 border-[#C1C7CC] w-full">
                  <p className="text-[#71767C] text-xl">07</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">08</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">09</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">10</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">11</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
              </div>
              {/* TERCEIRA SEMANA */}
              <div className="flex justify-around text-center">
                <div className="border-r-2 border-b-2 border-[#C1C7CC] w-full">
                  <p className="text-[#71767C] text-xl">14</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">15</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">16</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">17</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">18</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
              </div>
              {/* QUARTA SEMANA */}
              <div className="flex justify-around text-center">
                <div className="border-r-2 border-b-2 border-[#C1C7CC] w-full">
                  <p className="text-[#71767C] text-xl">21</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">22</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">23</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                    <CardEdition />
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">24</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">25</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
              </div>
              {/* QUINTA SEMANA */}
              <div className="flex justify-around text-center">
                <div className="border-r-2 border-b-2 border-[#C1C7CC] w-full">
                  <p className="text-[#71767C] text-xl">28</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">29</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl bg-[#007BC0] text-white">30</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                    <CardEdition />
                    <CardEdition />
                  </div>
                </div>
                <div className="border-r-2 border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-xl">31</p>
                  <div className="overflow-x-auto h-28">
                    <CardEdition />
                  </div>
                </div>
                <div className="border-b-2 border-[#C1C7CC] h-36 w-full">
                  <p className="text-[#71767C] text-xl">01</p>
                  <div className="overflow-x-auto h-28">
                    <p className="text-xl text-[#A4ABB3]">Nada programado!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M11.999 8L19.999 16L11.999 24"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </main>
  );
}
