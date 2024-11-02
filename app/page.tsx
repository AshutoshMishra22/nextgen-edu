import { Card, Carousel, Divider, Flex } from "antd";
import {
  Announcment,
  CCard,
  Footer,
  HomePanel,
  Message,
  NavigationHeader,
} from "./component";
import styles from "./page.module.scss";
import { hero_banner_list, mockNotification } from "./utils/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <Carousel arrows className={styles.carousel_image_container}>
        {hero_banner_list.map((img, index) => (
          <Image
            src={img}
            alt={`banner-${index}`}
            className={styles.carousel_image}
            priority
            key={index}
          />
        ))}
      </Carousel>
      <Announcment />
      <section className={styles.page_children_container}>
        <CCard />
        <HomePanel notificationList={mockNotification} />
        <Divider style={{ borderColor: styles.gradientPrimary }}>
          <h2>Important Message</h2>
        </Divider>
        <Message />
      </section>
    </main>
  );
}
