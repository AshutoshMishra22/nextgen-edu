import React, { FC } from "react";
import { PropTypes } from "./propTypes";
import { Flex, Space } from "antd";
import styles from "./index.module.scss";
import CDropdown from "../CDropdown";
import { navigationControlList } from "./helper";

const NavigationHeader: FC = ({}: PropTypes) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className={styles.navigation_container}
    >
      <span> ICON </span>
      <Flex gap={16} className={styles.navigation_control}>
        {navigationControlList.map((obj) => {
          if (obj.menuItem) {
            return (
              <CDropdown items={obj.menuItem} key={obj.label}>
                {obj.label}
              </CDropdown>
            );
          }
          return <Space key={obj.label}>{obj.label}</Space>;
        })}
      </Flex>
    </Flex>
  );
};
export default NavigationHeader;
