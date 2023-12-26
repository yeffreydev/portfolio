export const Services = () => {
  return (
    <div className="my-5 flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Servicios</h1>
      <div className="p-5">
        <h2 className="font-semibold text-2xl">Mentor En Programación</h2>
        <div className="flex gap-2 mt-3 min-h-[280px]">
          <div className="flex-1">
            <div className="h-full w-full bg-gray-500"></div>
          </div>
          <div className="flex-1 flex flex-col justify-around">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="border border-white px-10 py-2 w-8/12 ml-auto bg-black text-white font-semibold">Empezar Ahora</button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-semibold text-2xl">Desarrollo Y Plantillas</h2>
        <div className="flex flex-col gap-10 mt-5">
          <div className="flex gap-2 min-h-[250px] border border-gray-600 p-3">
            <div className="flex-1">
              <div className="h-full w-full bg-gray-500"></div>
            </div>
            <div className="flex-1 flex flex-col justify-around">
              <h2 className="font-semibold text-lg">Catalogo de Productos</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="border border-white px-10 py-2 w-8/12 ml-auto bg-black text-white font-semibold">Explorar Plantilla</button>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2 min-h-[250px] border border-gray-600 p-3">
            <div className="flex-1">
              <div className="h-full w-full bg-gray-500"></div>
            </div>
            <div className="flex-1 flex flex-col justify-around">
              <h2 className="font-semibold text-lg">Real State one page. (landing)</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="border border-white px-10 py-2 w-8/12 bg-black text-white font-semibold">Explorar Plantilla</button>
            </div>
          </div>
          <div className="flex gap-2 min-h-[250px] border border-gray-600 p-3">
            <div className="flex-1">
              <div className="h-full w-full bg-gray-500"></div>
            </div>
            <div className="flex-1 flex flex-col justify-around">
              <h2 className="font-semibold text-lg">Hacemos tu Proyecto</h2>
              <p>Mi equipo esta listo para empezar a crear.</p>
              <button className="border border-white px-10 py-2 w-8/12 ml-auto bg-black text-white font-semibold">Saber Más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
