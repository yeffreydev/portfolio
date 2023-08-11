interface DetailsI {
  title: string;
  description: string;
}
const DetailsItem = ({ title, description }: DetailsI) => {
  return (
    <div className="gap-2 flex flex-col">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

const detailsData: DetailsI[] = [
  {
    title: "Un poco Sobre Mí.",
    description:
      "Inicié mi travesía en el mundo de la programación en 2019. Sin embargo, fue entre 2020 y 2021, durante la pandemia, cuando experimenté un crecimiento exponencial en mis habilidades. Durante ese tiempo, aprendí a desarrollar páginas web y, poco después, a crear servicios backend con NodeJS. Actualmente, estoy trabajando en un software de diseño de moda que comencé hace 5 meses. Pero más allá de ser un desarrollador, también soy un educador. Dicto clases para compartir todo lo que me hubiera gustado saber en mi camino a convertirme en desarrollador backend. Mi objetivo es crear una comunidad de amantes del software y del emprendimiento.",
  },
  {
    title: "Mi experiencia enseñando.",
    description:
      "Enseñar ha sido un desafío y una bendición. Comencé hace unos meses dando clases privadas de JavaScript a nuevos entusiastas del software. Cada clase ha sido una oportunidad de aprendizaje, no solo para mis estudiantes, sino también para mí. Ahora, al adentrarnos en el mundo de NodeJS, estoy seguro de que todos aprenderemos aún más.",
  },
  {
    title: "¿Por qué NodeJS?",
    description:
      "La elección de NodeJS no es casualidad. Al utilizar JavaScript, podemos lanzar un emprendimiento de manera rápida y eficiente. Esto se debe a que JavaScript no solo nos permite desarrollar el backend, sino que también podemos usarlo en el frontend para diseñar la interfaz de una página web. Además, con herramientas como React Native, es posible desarrollar aplicaciones móviles. Todo esto sin la necesidad de aprender nuevos lenguajes de programación, permitiéndonos enfocarnos en mejorar la calidad y funcionalidad de nuestro software o servicio.",
  },
  {
    title: "Objetivo del curso.",
    description:
      "Este curso está diseñado para brindarte las herramientas y conocimientos necesarios para dominar NodeJS. Juntos, exploraremos sus características, ventajas y cómo puedes utilizarlo para potenciar tus proyectos.",
  },
];
const CourseDetails = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-2xl font-semibold">Más Detalles del Curso</h1>
      <div className="w-11/12 mx-auto mt-5 flex flex-col gap-5">
        {detailsData.map((item, index) => {
          return <DetailsItem key={index} title={item.title} description={item.description} />;
        })}
      </div>
    </div>
  );
};

export default CourseDetails;
