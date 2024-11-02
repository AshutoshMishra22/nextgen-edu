import { Flex } from "antd";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { ourPromise, schoolMessage } from "@/app/utils/constant";
import { HomePanelProptype } from "./proptypes";
import { Discover } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faLandmarkDome,
} from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faLandmarkDome} />
            <span className={styles.text_heading}>Welcome to School</span>
          </h2>
          <p className={styles.school_message}>{schoolMessage}</p>
        </Flex>
        <Discover />
      </Flex>
      <Flex vertical gap={18} className={styles.right_container}>
        <section className={styles.notification_panel}>
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
        <Flex vertical>
          <h2>
            <FontAwesomeIcon icon={faHandshakeAngle} />
            <span className={styles.text_heading}>Our Promise</span>
          </h2>
          <p className={styles.school_message}>{ourPromise}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HomePanel;
