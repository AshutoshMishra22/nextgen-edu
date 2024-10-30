import { Carousel } from "antd";
import { NavigationHeader } from "./component";
import styles from "./page.module.scss";
import { hero_banner_list } from "./utils/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavigationHeader />
      <Carousel arrows>
        {hero_banner_list.map((img, index) => (
          <Image
            src={img}
            alt={`banner-${index}`}
            className={styles.carousel_image}
          />
        ))}
      </Carousel>
      <section className={styles.page_children_container}></section>
    </main>
  );
}
