import { Card, Carousel, Flex } from "antd";
import { Announcment, CCard, HomePanel, NavigationHeader } from "./component";
import styles from "./page.module.scss";
import { hero_banner_list, mockNotification } from "./utils/constant";
import Image from "next/image";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

export default function Home() {
  return (
    <main className={styles.container}>
      <NavigationHeader />
      <Carousel arrows className={styles.carousel_image_container}>
        {hero_banner_list.map((img, index) => (
          <Image
            src={img}
            alt={`banner-${index}`}
            className={styles.carousel_image}
            priority
          />
        ))}
      </Carousel>
      <Announcment />
      <section className={styles.page_children_container}>
        <CCard />
        <HomePanel notificationList={mockNotification} />
      </section>
    </main>
  );
}
