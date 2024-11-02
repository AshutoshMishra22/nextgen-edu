"use client";
import React, { FC } from "react";
import { PropTypes } from "./propTypes";
import { Flex, Menu } from "antd";
import styles from "./index.module.scss";
import {
  NAVIGATION_ROUTE_PATH,
  navigationControlList,
} from "@/app/utils/constant";
import { redirect, useRouter } from "next/navigation";

const NavigationHeader: FC = ({}: PropTypes) => {
  const router = useRouter();
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
        onClick={({ key }) => {
          console.log(">>> ", key);
          router.replace(key);
        }}
      />
    </Flex>
  );
};
export default NavigationHeader;
