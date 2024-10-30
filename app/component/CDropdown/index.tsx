import { Dropdown, Space } from "antd";
import React, { FC } from "react";
import { CDropdownProptype } from "./propTypes";

const CDropdown: FC<CDropdownProptype> = (props: CDropdownProptype) => {
  const { items, id = "dropdown-element", children, className } = props;
  return (
    <Dropdown
      menu={{ items }}
      key={id ?? "dropdown-element"}
      className={className}
      placement="bottom"
    >
      <Space>{children}</Space>
    </Dropdown>
  );
};
export default CDropdown;
