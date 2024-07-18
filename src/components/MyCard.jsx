import { Button, Card } from "flowbite-react";

export default function MyCard({ food }) {
  const { image, name, id, price, description } = food || {};
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h2 className="text-gray-900 dark:text-white font-bold">{name}</h2>
      <p className="text-gray-900 dark:text-white">{description}</p>
      <div className="flex justify-between items-center">
        <h2 className="dark:text-white font-normal">
          <span className="font-bold">{price} </span>
          <span className="font-normal text-sm"> UZS</span>
        </h2>
        <Button size={"sm"}>Qo'shish</Button>
      </div>
    </Card>
  );
}
