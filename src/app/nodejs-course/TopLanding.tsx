import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
export default function TopLanding() {
  return (
    <div className="flex flex-col items-start w-11/12 mx-auto mt-20 gap-5">
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Curso de NodeJS - version 1.0</h1>
          <p>
            ¡Bienvenidos al Curso de NodeJS - Versión 1.0! Mi nombre es Yeffrey Espinoza y soy de Perú. Hoy, me complace compartir con ustedes mi experiencia y conocimientos en el mundo de la
            programación, especialmente en NodeJS. <br />
            puedes ver la presentacion del curso{" "}
            <a className="underline" href="https://drive.google.com/file/d/1ol1aouZGq6ATRJqC49KoUQ0lNg8f7en1/view?usp=sharing" target="_blank">
              Aquí
              <FiExternalLink className="inline-block" />
            </a>
          </p>
        </div>
        <div className="flex-1 grid md:place-items-center">
          <Image src={"https://th.bing.com/th/id/OIP.hv_EzUOseMZeJiHvRn9LEwHaEh?pid=ImgDet&rs=1"} width={300} height={200} alt="nodejs img" />
        </div>
      </div>
      <Link href="/nodejs-course/login" className="bg-black rounded-3xl text-white px-7 py-2">
        Unirme Al Curso
        {/* si esta autenticado mostrar ver curso  */}
      </Link>
    </div>
  );
}
