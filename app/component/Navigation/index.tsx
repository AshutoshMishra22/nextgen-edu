import React, { FC } from "react";
import { PropTypes } from "./propTypes";
import { Flex, Menu } from "antd";
import styles from "./index.module.scss";
import { navigationControlList } from "./helper";

const NavigationHeader: FC = ({}: PropTypes) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className={styles.navigation_container}
    >
      <span> ICON </span>
      <Menu
        mode="horizontal"
        items={navigationControlList}
        className={styles.navigation_control}
      />
    </Flex>
  );
};
export default NavigationHeader;
