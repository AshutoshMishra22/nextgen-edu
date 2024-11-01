import React, { FC } from "react";
import { Proptypes } from "./propTypes";
import { Card, Flex, Timeline } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import styles from "./index.module.scss";
import {
  faArchway,
  faPersonChalkboard,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";

const Discover: FC<Proptypes> = (props: Proptypes) => {
  return (
    <Flex vertical className={styles.discover_container}>
      <h2>
        <FontAwesomeIcon icon={faCompass} className={styles.heading_icon} />
        Discover
      </h2>
      <Timeline
        className={styles.discover_list}
        items={[
          {
            children: (
              <Card
                hoverable
                title={
                  <>
                    <FontAwesomeIcon
                      icon={faVialVirus}
                      className={styles.list_icon}
                    />
                    Lab
                  </>
                }
              >
                <div className={styles.card_title}>Science</div>
              </Card>
            ),
          },
          {
            color: "green",
            children: (
              <Card
                hoverable
                title={
                  <>
                    <FontAwesomeIcon
                      icon={faPersonChalkboard}
                      className={styles.list_icon}
                    />
                    Faculty
                  </>
                }
              >
                <div className={styles.card_title}>Faculty</div>
              </Card>
            ),
          },
          {
            color: "red",
            children: (
              <Card
                hoverable
                title={
                  <>
                    <FontAwesomeIcon
                      icon={faArchway}
                      className={styles.list_icon}
                    />
                    Scholarly Voyage
                  </>
                }
              >
                <div className={styles.card_title}>Faculty</div>
              </Card>
            ),
          },
        ]}
      />
    </Flex>
  );
};

export default Discover;
