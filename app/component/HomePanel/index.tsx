import { Avatar, Card, Flex, Timeline } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";
import {
  BankOutlined,
  ReconciliationOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { schoolMessage } from "@/app/utils/constant";
import { HomePanelProptype } from "./proptypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Meta from "antd/es/card/Meta";
import { Discover } from "..";
const SubComponent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h2>Discover</h2>
      {/* <Timeline
        items={}
      /> */}
    </div>
  );
};
const HomePanel: FC<HomePanelProptype> = (props) => {
  return (
    <Flex
      align="start"
      gap={32}
      justify="space-between"
      wrap
      className={styles.panel_container}
    >
      <Flex gap={18} vertical className={styles.left_container}>
        <Flex vertical>
          <h2>
            <BankOutlined />
            <span className={styles.greet_school}>Welcome to School</span>
          </h2>
          <p className={styles.school_message}>{schoolMessage}</p>
        </Flex>
        <Discover />
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
