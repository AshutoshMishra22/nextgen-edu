import React, { FC } from "react";
import styles from "./index.module.scss";
import { Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faClipboardList,
  faHandsPraying,
  faLocationDot,
  faPersonHalfDress,
  faPhone,
  faScaleBalanced,
  faSchool,
  faTrophy,
  faUserNurse,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => {
  return (
    <footer className={styles.footer_body}>
      <Flex className={styles.row} justify="space-around">
        <Flex vertical className={styles.column}>
          <h2>About Us</h2>
          <h4>
            <FontAwesomeIcon icon={faSchool} className={styles.list_icon} />
            Campus
          </h4>
          <h4>
            <FontAwesomeIcon icon={faUserNurse} className={styles.list_icon} />
            Alumni
          </h4>
          <h4>
            <FontAwesomeIcon icon={faTrophy} className={styles.list_icon} />
            Achievment
          </h4>
          <h4>
            <FontAwesomeIcon icon={faUserShield} className={styles.list_icon} />
            Safety & Management
          </h4>
        </Flex>
        <Flex vertical className={styles.column}>
          <h2>Student Zone</h2>
          <h4>
            <FontAwesomeIcon
              icon={faClipboardList}
              className={styles.list_icon}
            />
            School Schedule
          </h4>
          <h4>
            <FontAwesomeIcon
              icon={faHandsPraying}
              className={styles.list_icon}
            />
            Prayer
          </h4>
          <h4>
            <FontAwesomeIcon
              icon={faPersonHalfDress}
              className={styles.list_icon}
            />
            Uniform and dress
          </h4>
          <h4>
            <FontAwesomeIcon
              icon={faScaleBalanced}
              className={styles.list_icon}
            />
            Code of conduct
          </h4>
        </Flex>
        <Flex vertical className={styles.column}>
          <h2>Contact Us</h2>
          <h4>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.list_icon}
            />
            Nagheta Road, Hardoi-241001, Uttar Pradesh, INDIA
          </h4>
          <h4>
            <FontAwesomeIcon icon={faPhone} className={styles.list_icon} />
            +91-1800 1800 45
          </h4>
          <h4>
            <FontAwesomeIcon icon={faAt} className={styles.list_icon} />
            school@school.org
          </h4>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
