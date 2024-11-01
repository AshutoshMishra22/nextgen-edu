import React from "react";
import { Card, Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { actionHighlight } from "@/app/utils/constant";
import styles from "./index.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SubCard = ({ item }: { item: Record<string, string | IconProp> }) => {
  return (
    <Card hoverable>
      <FontAwesomeIcon
        icon={item.icon as IconProp}
        className={styles.card_icon}
      />
      <div className={styles.card_title}>{item.title as string}</div>
    </Card>
  );
};
const CCard: React.FC = () => (
  <Flex gap={16} className={styles.card_group}>
    {actionHighlight.map((item: Record<string, string | IconProp>) => (
      <SubCard item={item} />
    ))}
  </Flex>
);

export default CCard;
