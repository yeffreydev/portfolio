import Link from "next/link";
function ServicesPage() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-5">
        <h1 className="text-xl font-bold">¡Destaca en la Web con Nuestrass Plantillas Exclusivas! </h1>
      </div>
      <div className="mt-3">
        <p className="w-11/12 md:w-8/12 lg:w-6/12">
          Explora nuestras soluciones de diseño web y promoción de productos. Ofrecemos una amplia variedad de plantillas web versátiles para tu proyecto en línea. Además, destacamos la plantilla
          "Catálogo de Productos" para resaltar tus productos de manera atractiva. Simplifica tu presencia en línea y promoción de productos con nuestros servicios. ¡Inicia tu proyecto hoy mismo y
          destaca en la web!
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-3 gap-3">
        <div className="bg-gray-500 flex flex-col gap-2 text-white max-w-[230px] p-3 rounded-xl">
          <div className="flex-1">
            <h2 className="font-bold text-lg">Templates</h2>
            <p>Explora y elige entre una variedad de plantillas web versátiles para tu proyecto en línea. Destaca en la web con un diseño atractivo y profesional. ¡Inicia hoy!</p>
          </div>

          <Link href={"/services/templates"} className="w-11/12 mx-auto text-center bg-slate-800 text-white px-3 py-0.5 rounded-lg font-semibold">
            Ver Templates
          </Link>
        </div>
        <div className="bg-gray-500 flex flex-col gap-2 text-white max-w-[230px] p-3 rounded-xl">
          <div className="flex-1">
            <h2 className="font-bold text-lg">Catalago</h2>
            <p>Destaca tus productos en línea de manera efectiva con nuestro diseño de catálogo atractivo y eficiente. ¡Impulsa tus ventas!</p>
          </div>
          <Link href={"/services/catalog"} className="w-11/12 mx-auto text-center bg-slate-800 text-white px-3 py-0.5 rounded-lg font-semibold">
            Ver Catalogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
