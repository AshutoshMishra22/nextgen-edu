import React from "react";
import { Card, Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionHighlight } from "@/app/utils/constant";
import styles from "./index.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const SubCard = ({ item }: { item: Record<string, string | IconProp> }) => {
  return (
    <Card hoverable className={styles.card_body}>
      <Link href={`/${item.link}`} className={styles.action_link}>
        <FontAwesomeIcon
          icon={item.icon as IconProp}
          className={styles.card_icon}
        />
        <div className={styles.card_title}>{item.title as string}</div>
      </Link>
    </Card>
  );
};
const CCard: React.FC = () => (
  <Flex gap={16} className={styles.card_group}>
    {actionHighlight.map((item: Record<string, string | IconProp>, index) => (
      <SubCard item={item} key={index} />
    ))}
  </Flex>
);

export default CCard;
