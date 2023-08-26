import React from "react";
import Footer from "../../components/footer/Footer";
import { Input, Typography } from "antd";
import CourtItem from "../../components/courts/CourtItem";
import * as Bi from 'react-icons/bi'

export default function CourtPage() {
  const courtData = [
    {
      id: 1,
      courtName: "Skyhook Stadium",
      courtAddress: "123 Slam Dunk Street, Jakarta, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      courtName: "Hoops Haven",
      courtAddress: "456 Alley Oop Avenue, Bandung, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1801&q=80",
    },
    {
      id: 3,
      courtName: "Swish Court",
      courtAddress: "789 Three-Pointer Lane, Surabaya, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1574907060871-4555aa8aca75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 4,
      courtName: "Courtside Oasis",
      courtAddress: "101 Dunk Drive, Medan, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1563506644863-444710df1e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    },
    {
      id: 5,
      courtName: "Slam Jam Court",
      courtAddress: "555 Slam Street, Yogyakarta, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    },
    {
      id: 6,
      courtName: "Alley Hoop Arena",
      courtAddress: "222 Bounce Road, Semarang, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1551714494-2b38050e79b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 7,
      courtName: "Dunk Dynasty Place",
      courtAddress: "777 Dunking Lane, Bali, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1555688695-bd7b47dd8a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80",
    },
    {
      id: 8,
      courtName: "Triple Threat Court",
      courtAddress: "888 Triple Street, Makassar, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1575452871897-97303e7bf288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 9,
      courtName: "Rim Ruler Park",
      courtAddress: "333 Post Move Avenue, Palembang, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1525973132219-a04334a76080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1570&q=80",
    },
    {
      id: 10,
      courtName: "Net Swish Place",
      courtAddress: "444 Net Street, Lombok, Indonesia",
      imageLink: "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
  ];

  return (
    <div className="content-container">
      <Typography.Title className="content-header" level={3}>BASKETBALL COURTS</Typography.Title>
      <Input placeholder="Search Courts" suffix={<Bi.BiSearch/>}/>

      {courtData.map((data) => (
        <CourtItem
          key={data.id}
          courtName={data.courtName}
          courtAddress={data.courtAddress}
          images={data.imageLink}
        />
      ))}
    </div>
  );
}
