import { DropDownProps, MenuProps } from "antd";

interface CDropdownProptype extends Omit<DropDownProps, "children"> {
  id?: string;
  children: React.ReactNode | string;
  items: MenuProps["items"];
}
export type { CDropdownProptype };
