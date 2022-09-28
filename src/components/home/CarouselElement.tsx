import Image from "next/image";
import Link from "next/link";

interface RecipeInfo {
  link: string;
  title: string;
  img: string;
  description: string;
}

const CarouselElement = ({ link, title, img, description }: RecipeInfo) => {
  return (
    <div className="basis-72 shrink-0 grow-0 h-auto border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow mb-8">
      <Link href={link}>
        <a>
          <Image src={img} width="320" height="180" objectFit="cover" />
          <div className="text-center py-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CarouselElement;
