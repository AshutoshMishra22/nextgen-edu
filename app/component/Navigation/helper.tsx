import { MenuProps } from "antd";

const Admission_list = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const navigationControlList: Required<MenuProps>["items"][number][] = [
  {
    label: "Home",
    key: "homepage",
    disabled: false,
  },
  {
    label: "About us",
    key: "about-us",
  },
  {
    label: "Admission",
    key: "admission",
    disabled: false,
    children: [
      { key: "11", label: "Option 1" },
      { key: "12", label: "Option 2" },
      { key: "13", label: "Option 3" },
      { key: "14", label: "Option 4" },
    ],
  },

  {
    label: "Contact us",
    key: "contact-us",
  },
];

export { navigationControlList };
