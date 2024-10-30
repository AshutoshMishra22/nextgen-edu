import React, { FC } from "react";
import { PropTypes } from "./propTypes";
import { Dropdown, Flex, Space } from "antd";
import styles from "./index.module.scss";
import CDropdown from "../CDropdown";
import { Admission_list } from "./helper";

const NavigationHeader: FC = ({}: PropTypes) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className={styles.navigation_container}
    >
      <span> ICON </span>
      <Flex>
        <CDropdown items={Admission_list}>Admission</CDropdown>
      </Flex>
    </Flex>
  );
};
export default NavigationHeader;
