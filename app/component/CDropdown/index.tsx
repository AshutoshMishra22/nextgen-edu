import { Dropdown, Space } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { CDropdownProptype } from "./propTypes";

const CDropdown: FC<CDropdownProptype> = (props: CDropdownProptype) => {
  const { items, key = "dropdown-element", children, className } = props;
  return (
    <Dropdown
      menu={{ items }}
      key={key ?? "dropdown-element"}
      className={className}
    >
      <Space className={styles.dropdown_item}>{children}</Space>
    </Dropdown>
  );
};
export default CDropdown;
