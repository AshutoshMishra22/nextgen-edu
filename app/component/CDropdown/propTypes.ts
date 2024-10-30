import { DropDownProps, MenuProps } from "antd";

interface CDropdownProptype extends Omit<DropDownProps, "children"> {
  key?: string;
  children: React.ReactNode | string;
  items: MenuProps["items"];
}
export type { CDropdownProptype };
