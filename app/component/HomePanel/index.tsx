import { Card, Flex } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { EditOutlined } from "@ant-design/icons";
import { schoolMessage } from "@/app/utils/constant";

const HomePanel: FC = () => {
  return (
    <Flex
      align="start"
      gap={8}
      justify="space-between"
      wrap
      className={styles.panel_container}
    >
      <Flex vertical className={styles.left_container}>
        <h2>
          <EditOutlined />
          <span className={styles.greet_school}>Welcome to School</span>
        </h2>
        <p className={styles.school_message}>{schoolMessage}</p>
      </Flex>
      <section className={styles.right_container}></section>
    </Flex>
  );
};
export default HomePanel;
