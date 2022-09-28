import React, { useEffect, useRef, useState } from "react";
import CarouselElement from "./CarouselElement";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Loader from "../../components/common/Loader";
import { trpc } from "../../utils/trpc";

const Carousel = () => {
  const { data, isLoading } = trpc.useQuery(["recipe.getNewRecipes"]);

  const scrl = useRef<any>(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

  const slide = (shift: number) => {
    scrl.current!.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion
  };

  const scrollCheck = () => {
    setscrollX(scrl.current!.scrollLeft);
    if (
      Math.floor(scrl.current!.scrollWidth - scrl.current!.scrollLeft) <=
      scrl.current!.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  useEffect(() => {
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  const recipeList = data?.map((recipe) => (
    <CarouselElement
      key={recipe.id}
      img={recipe.img}
      title={recipe.title}
      description={recipe.description}
      link={`rezepte/${recipe.id}`}
    />
  ));

  const loadBlocks = [...Array(4)].map((e, i) => (
    <div className="basis-72 shrink-0 grow-0">
      <div className="bg-gray-400 animate-pulse aspect-square"></div>
      <div className="flex flex-col items-center">
        <div className="h-4 bg-gray-400 animate-pulse m-4 w-40 rounded-full"></div>
        <div className="bg-gray-400 animate-pulse rounded-full h-4 w-20"></div>
      </div>
    </div>
  ));

  return (
    <div className="md:pl-0 pl-8 pt-8">
      <h2 className="md:mt-40 lg:mt-0 h1 md:pl-20 font-bold font-serif">
        Schon probiert?
      </h2>
      <h3 className="md:pl-20 text-lg">unsere neuen Köstlichkeiten</h3>
      <div className="relative my-8">
        {scrollX !== 0 && (
          <>
            <button
              className="absolute left-0 top-1/2 text-cb_white z-10 text-3xl"
              onClick={() => slide(-288)}
            >
              <FaChevronLeft />
            </button>
            <div></div>
          </>
        )}
        <div
          className="flex flex-nowrap gap-x-8 md:pl-20 overflow-x-auto overflow-y-visible relative scroll-smooth"
          ref={scrl}
          onScroll={scrollCheck}
        >
          {isLoading ? loadBlocks : recipeList}
        </div>
        {!scrolEnd && (
          <>
            <button
              className="absolute right-0 top-1/2 text-cb_white z-10 text-3xl"
              onClick={() => slide(288)}
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
