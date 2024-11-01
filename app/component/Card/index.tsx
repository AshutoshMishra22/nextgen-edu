"use client";
import React from "react";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
  width: "25%",
  height: "100px",
  textAlign: "center",
};

const CCard: React.FC = () => (
  <Card>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
  </Card>
);

export default CCard;
