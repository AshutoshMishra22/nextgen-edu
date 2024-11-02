import { Flex } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import directorPNG from "../../assest/MockDir.png";
import principlePNG from "../../assest/MockPri.png";
import { message_primary, message_secondary } from "@/app/utils/constant";

const Message: FC = () => {
  return (
    <Flex vertical className={styles.message_group} gap={24}>
      <Flex align="center" gap={30}>
        <section className={styles.message_image_main}>
          <div className={styles.image_shape_1} />
          <Image src={directorPNG} alt="Director" />
        </section>
        <p className={styles.message_content}>{message_primary}</p>
      </Flex>
      <Flex align="center" gap={30}>
        <p className={styles.message_content}>{message_secondary}</p>

        <section
          className={`${styles.message_image_main} ${styles.align_right}`}
        >
          <div className={styles.image_shape_2} />
          <Image src={principlePNG} alt="Principle" />
        </section>
      </Flex>
    </Flex>
  );
};

export default Message;
