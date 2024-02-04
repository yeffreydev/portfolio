import Image from "next/image";
import Link from "next/link";
export const Services = () => {
  return (
    <div className="my-5 mx-auto flex flex-col gap-3">
      <h1 className="text-3xl font-bold px-1">Servicios</h1>
      <div className="p-5">
        <h2 className="font-semibold text-2xl">Mentor de Programación.</h2>
        <div className="flex shadow shadow-gray-700 p-3 flex-col md:flex-row gap-2 mt-3 min-h-[280px]">
          <div className="flex-1">
            <div className="min-h-[180px] relative h-full w-full bg-gray-500">
              <Image className="absolute w-full h-full object-cover" width={1024} height={1024} src={"/pro-money.jpeg"} alt="programador mirando a la lluvia" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <p className="">
              Cumple tu objetivo de convertirte en un programador experto, aprende a nunca rendirte y vence toedos tus miedos limitantes, tienes asesorias, cursos, hasta una gran comunidad para que
              este proceso sea algo agradable, satisfactorio, porque aquí celebramos cada logro.
            </p>
            <Link href={"/services/mentoring"} className="border text-center border-gray-600 bg-gray-900 px-10 py-2 w-10/12 md:ml-auto text-white font-semibold">
              Empezar Ahora
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-semibold text-2xl">Desarrollo Y Plantillas</h2>
        <div className="flex flex-col gap-10 mt-5">
          <div className="flex flex-col md:flex-row gap-2 min-h-[250px] p-3 shadow-sm shadow-gray-700">
            <div className="flex-1">
              <div className="min-h-[180px] h-full w-full bg-gray-500"></div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="font-semibold text-lg">Catalogo de Productos</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="border border-gray-600 bg-gray-900 px-10 py-2 w-10/12 text-center md:ml-auto text-white font-semibold">Explorar Plantilla</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-2 min-h-[250px] p-3 shadow-sm shadow-gray-700">
            <div className="flex-1">
              <div className="min-h-[180px] h-full w-full bg-gray-500"></div>
            </div>
            <div className="flex-1 gap-5 flex flex-col">
              <h2 className="font-semibold text-lg">Real State one page. (landing)</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="border border-gray-600 bg-gray-900 px-10 py-2 w-10/12 text-center text-white font-semibold">Explorar Plantilla</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 min-h-[250px] p-3 shadow-sm shadow-gray-700">
            <div className="flex-1">
              <div className="min-h-[180px] h-full w-full bg-gray-500"></div>
            </div>
            <div className="flex-1 gap-5 flex flex-col">
              <h2 className="font-semibold text-lg">Hacemos tu Proyecto</h2>
              <p>Mi equipo esta listo para empezar a crear.</p>
              <button className="border border-gray-600 bg-gray-900 px-10 py-2 w-10/12 text-center md:ml-auto text-white font-semibold">Saber Más</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-3">
            <button className="border border-gray-600 hover:bg-gray-900 px-10 py-2 w-11/12 text-center md:w-8/12 mx-auto text-white font-semibold">Ver Mas plantillas</button>
          </div>
        </div>
      </div>
    </div>
  );
};
