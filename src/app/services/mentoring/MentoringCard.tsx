import Link from "next/link";
const MentoringCard = ({ title, price, description, link }: { title: string; price: string; description: string; link: string }) => {
  return (
    <div className="flex mx-auto flex-col border border-gray-600 rounded-lg text-white gap-2 w-11/12 md:max-w-[380px] p-3 shadow-md shadow-gray-700">
      <h2 className="text-center text-lg font-semibold">{title}</h2>
      <p className="text-center text-3xl font-bold">{price}</p>
      <p>{description}</p>
      <Link href={link} className="border border-gray-600 font-semibold text-center bg-gray-900 w-11/12 mx-auto py-2 px-7 ">
        Iniciar
      </Link>
    </div>
  );
};

export default MentoringCard;
