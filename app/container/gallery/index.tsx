import { Timeline, Image, Flex } from "antd";
import { TimeLineItemProps } from "antd/es/timeline/TimelineItem";
import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

const mockImg = "https://cdn8.dissolve.com/p/D430_35_422/D430_35_422_1200.jpg";
const Gallery: FC = () => {
  const [timeLineItem, setTimeLineItem] = useState<TimeLineItemProps[]>();
  async function fetchGalleryData() {
    const response = await fetch(
      "https://67263b88302d03037e6cd876.mockapi.io/get-photos/gallery"
    );
    const data = await response.json();
    const finalItem = data.map(
      (obj: {
        name: any;
        photo: string | undefined;
        date: string | undefined;
      }) => ({
        children: (
          <>
            <h3>{new Date(obj.date as string).getFullYear()}</h3>
            <Flex gap={8} wrap>
              <Image
                src={mockImg}
                alt={obj.name}
                className={styles.gallery_image}
              />
              <Image
                src={mockImg}
                alt={obj.name}
                className={styles.gallery_image}
              />
              <Image
                src={mockImg}
                alt={obj.name}
                className={styles.gallery_image}
              />
              <Image
                src={mockImg}
                alt={obj.name}
                className={styles.gallery_image}
              />
            </Flex>
          </>
        ),
      })
    );
    setTimeLineItem(finalItem);
  }
  useEffect(() => {
    fetchGalleryData();
  }, []);
  return (
    <div>
      <Timeline items={timeLineItem} />
    </div>
  );
};

export default Gallery;
