import { Flex } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";

const Announcement: FC = () => {
  return (
    <Flex gap={8} className={styles.announcement_bar} align="center">
      <strong>Attention: </strong>
      <Flex className={styles.message}>
        <p>Admission are closed</p>
      </Flex>
    </Flex>
  );
};
export default Announcement;
