import { findSubTopicBySlug } from "../courseProvider";
const CourseContentPage = ({ params }: { params: { subtopic: string } }) => {
  const subTopic = findSubTopicBySlug(params.subtopic);
  if (!subTopic) {
    return <div>Not found</div>;
  }
  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">{subTopic?.title}</h1>
      puedes ver el contenido de esta clase en el siguiente enlace: <br />
      <a className="underline" target="_blank" href={subTopic?.link}>
        Ver Clase
      </a>
    </div>
  );
};

export default CourseContentPage;
