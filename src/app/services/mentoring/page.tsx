import MentoringCard from "./MentoringCard";

const content = [
  {
    title: "Mentor Personal",
    price: "$100 / mes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Mentor Personal",
    price: "$100 / mes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Mentor Personal",
    price: "$100 / mes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Mentor Personal",
    price: "$100 / mes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Mentor Personal",
    price: "$100 / mes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
];
export default function MentoringPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 w-11/12 mx-auto md:w-10/12 lg:w-9/12  gap-5">
      {content.map((item, i) => {
        return <MentoringCard key={i} title={item.title} price={item.price} description={item.description} link={item.link} />;
      })}
    </div>
  );
}
