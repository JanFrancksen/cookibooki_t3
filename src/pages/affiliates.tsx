import Link from "next/link";
import React from "react";
import AffiliatesCard from "../components/affiliates/affiliatesCard";

const Affiliates = () => {
  const AffiliateList = [
    {
      id: 1,
      title: "Too Good To Go",
      link: "https://toogoodtogo.de/de/",
      beschreibung:
        "Jede mit Too Good To Go gerettete Portion hilft, eine Veränderung herbeizuführen. Denn ein Planet ohne Lebensmittelverschwendung ist ein besserer Ort für alle. Gemeinsam können wir das schaffen!",
      image: "/images/affiliates/TooGoodToGo_5383.jpeg",
    },
    {
      id: 3,
      title: "y Food",
      link: "https://www.yfood.eu",
      beschreibung:
        "Schmeckt lecker, macht satt und ist ausgewogen. Probier's selbst mal. Kein Mittagstief mehr. Vollwertige Mahlzeit. Vegane Optionen. Ungekühlt lange haltbar.",
      image: "/images/affiliates/yfood.jpg",
    },
    {
      id: 4,
      title: "Koro",
      link: "/blog",
      beschreibung: "",
      image: "/images/affiliates/KoRo_nut butters.jpg",
    },
    {
      id: 5,
      title: "Motatos",
      link: "/blog",
      beschreibung: "",
      image: "/images/affiliates/motatos.jpeg",
    },
    {
      id: 6,
      title: "Löwenanteil",
      link: "/blog",
      beschreibung: "",
      image: "/images/affiliates/BestsellerBox_1000x.webp",
    },
    {
      id: 7,
      title: "Reishunger",
      link: "/blog",
      beschreibung: "",
      image: "/images/food.jpg",
    },
  ];

  const AffiliateItems = AffiliateList.map((item) => {
    return (
      <AffiliatesCard
        key={item.id}
        title={item.title}
        link={item.link}
        beschreibung={item.beschreibung}
        image={item.image}
      />
    );
  });

  return (
    <div className="mx-auto my-60 w-3/4">
      <div className="my-20">
        <h1 className="header text-center h1">Affiliates</h1>
        <h2 className="header text-center h2 normal-case mt-4  w-2/3 mx-auto">
          Dinge, die wir persönlich toll finden. Diese vertreten unter Anderem
          schöne Geesten zur Umwelt, Tierschutz oder modernen Lösungen für
          Probleme beitragen.
        </h2>
        <p className="text-center py-4 w-1/2 mx-auto">
          Bitte beachtet, dass einige der unten stehen Links Affiliate-Links
          sind, für welche wir bei einkäufen einen Teil des Geldes abbekommen.
          Damit könnt ihr uns super unterstützen und habt keinerlei Mehrkosten.
          Danke!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">{AffiliateItems}</div>
    </div>
  );
};

export default Affiliates;
