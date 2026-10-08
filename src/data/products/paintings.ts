
import templeInRuins from "@/assets/temple-in-ruins-abstract.webp.asset.json";
import secondTempleService from "@/assets/second-temple-service.webp.asset.json";
import calligraphyMuhammadFramed from "@/assets/calligraphy-muhammad-framed.webp.asset.json";
import calligraphyMuhammadRound from "@/assets/calligraphy-muhammad-round.webp.asset.json";
import mountOfRevelation from "@/assets/mount-of-revelation.webp.asset.json";
import divineStormLandscape from "@/assets/divine-storm-landscape.webp.asset.json";
import divineStormMountain from "@/assets/divine-storm-mountain.webp.asset.json";
import elijahChariotOfFire from "@/assets/elijah-chariot-of-fire.png.asset.json";
import goldenMenorahAbstract from "@/assets/golden-menorah-abstract.png.asset.json";
import jerusalemTempleAerial from "@/assets/jerusalem-temple-aerial.png.asset.json";

export interface PaintingProduct {
  id: string;
  title: string;
  price: string;
  image: string;
  brand: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const paintingsProducts: PaintingProduct[] = [
  {
    id: "p1",
    title: "Temple in Ruins — Gilded Abstract",
    price: "$15,500",
    image: templeInRuins.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p2",
    title: "The Second Temple — Priestly Service",
    price: "$15,500",
    image: secondTempleService.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p3",
    title: "Calligraphy in Gold — Ornate Frame",
    price: "$15,500",
    image: calligraphyMuhammadFramed.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p4",
    title: "Calligraphy in Gold — Hagia Sophia",
    price: "$15,500",
    image: calligraphyMuhammadRound.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p5",
    title: "The Mount of Revelation",
    price: "$15,500",
    image: mountOfRevelation.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p6",
    title: "Divine Storm — Landscape Edition",
    price: "$15,500",
    image: divineStormLandscape.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p7",
    title: "Divine Storm — Mountain of Light",
    price: "$15,500",
    image: divineStormMountain.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p8",
    title: "Elijah — Chariot of Fire",
    price: "$15,500",
    image: elijahChariotOfFire.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p9",
    title: "Golden Menorah — Abstract Gilding",
    price: "$15,500",
    image: goldenMenorahAbstract.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  },
  {
    id: "p10",
    title: "Jerusalem — The Golden Temple",
    price: "$15,500",
    image: jerusalemTempleAerial.url,
    brand: "Elijah Light",
    category: "paintings",
    isNew: true
  }
];
