import React, { FC } from "react";
import { Proptypes } from "./propTypes";
import { Avatar, Card, Flex, Timeline } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import styles from "./index.module.scss";
import {
  faArchway,
  faPersonChalkboard,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";
import { AntDesignOutlined } from "@ant-design/icons";
import { faultyList, labList } from "@/app/utils/constant";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Discover: FC<Proptypes> = (props: Proptypes) => {
  return (
    <Flex vertical className={styles.discover_container}>
      <h2>
        <FontAwesomeIcon icon={faCompass} className={styles.heading_icon} />
        Discover
      </h2>
      <Flex gap={32} className={styles.discover_card_group} wrap>
        <Card
          className={styles.discover_card}
          hoverable
          extra={<a href="#">Know More</a>}
          title={
            <>
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className={styles.list_icon}
              />
              Faculty & Staff
            </>
          }
        >
          <Flex
            vertical
            justify="space-between"
            gap={16}
            className={styles.list_item_container}
          >
            {faultyList.slice(0, 5).map((faculty) => (
              <Flex
                gap={12}
                align="center"
                key={faculty.id}
                className={styles.list_item}
              >
                <Avatar
                  size={{ xs: 16, sm: 22, md: 25, lg: 30, xl: 40, xxl: 100 }}
                  icon={<AntDesignOutlined />}
                />
                <Flex vertical>
                  <div className={styles.card_title}>{faculty.name}</div>
                  <div className={styles.card_details}>{faculty.details}</div>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Card>
        <Card
          className={styles.discover_card}
          hoverable
          extra={<a href="#">Learn More</a>}
          title={
            <>
              <FontAwesomeIcon
                icon={faVialVirus}
                className={styles.list_icon}
              />
              Labs & Classes
            </>
          }
        >
          <Flex
            vertical
            justify="space-between"
            gap={16}
            className={styles.list_item_container}
          >
            {labList.slice(0, 5).map((lab) => (
              <Flex
                gap={12}
                align="center"
                key={lab.id}
                className={styles.list_item}
              >
                <FontAwesomeIcon
                  className={styles.list_item_icon}
                  icon={lab.icon as IconProp}
                />
                <Flex vertical>
                  <div className={styles.card_title}>{lab.name}</div>
                  <div className={styles.card_details}>{lab.details}</div>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Discover;
