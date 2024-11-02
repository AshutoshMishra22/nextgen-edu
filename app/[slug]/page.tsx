"use client";
import React, { FC, ReactNode } from "react";
import { PropType } from "./propType";
import styles from "./page.module.scss";
import { notFound, useParams } from "next/navigation";
import { ROUTE_PATH } from "../utils/constant";
import { Gallery as GalleryComponent } from "../container";

const Gallery: FC = (props: PropType) => {
  const { slug } = useParams();
  const { GALLERY, FEESTRUCTURE, FORMS, BOOKLIST, SYLLABUS } = ROUTE_PATH;
  const componentMapping: Record<string, ReactNode> = {
    [GALLERY]: <GalleryComponent />,
    [FEESTRUCTURE]: <>FEE</>,
    [FORMS]: <>FORM</>,
    [BOOKLIST]: <>BOOKLIST</>,
    [SYLLABUS]: <>SYLLABUS</>,
  };
  // Check if slug matches one of the route paths in componentMapping
  let RenderComponent: ReactNode = componentMapping[slug as string];
  if (!RenderComponent) {
    notFound(); // If slug does not match any path, show 404
  }
  return (
    <section className={styles.container}>
      <h2 className={styles.page_title}>{slug}</h2>
      {RenderComponent}
    </section>
  );
};

export default Gallery;
