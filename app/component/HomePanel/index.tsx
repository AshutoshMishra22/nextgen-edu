import { Flex } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";
import {
  BankOutlined,
  EditOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { schoolMessage } from "@/app/utils/constant";
import { HomePanelProptype } from "./proptypes";
const dataList = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Jade",
      last: "Gill",
    },
    email: "jade.gill@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/66.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Zvezdan",
      last: "Vujičić",
    },
    email: "zvezdan.vujicic@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/40.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
    },
    nat: "RS",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Ross",
      last: "Peters",
    },
    email: "ross.peters@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
    },
    nat: "AU",
  },
];
const HomePanel: FC<HomePanelProptype> = (props) => {
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
          <BankOutlined />
          <span className={styles.greet_school}>Welcome to School</span>
        </h2>
        <p className={styles.school_message}>{schoolMessage}</p>
        <h3>
          <ReconciliationOutlined />
          <span className={styles.greet_school}>Welcome to School</span>
        </h3>
        <p className={styles.school_message}>{schoolMessage}</p>
      </Flex>
      <section className={styles.right_container}>
        <h2 className={styles.notification_heading}>Notification</h2>
        <section className={styles.list_wrapper}>
          <ul className={styles.notification_list_container}>
            {props.notificationList?.map((notification) => (
              <li key={notification.title}>
                <div className={styles.notification_title}>
                  {notification.title}
                </div>
                <div className={styles.notification_details}>
                  {notification.details}
                </div>
                <div className={styles.notification_dateTime}>
                  {notification.dateTime}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Flex>
  );
};
export default HomePanel;
