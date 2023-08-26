import React from "react";
import { Input, Typography } from "antd";
import * as Bi from "react-icons/bi";
import CommunityItem from "../../components/community/communityItem";

export default function CommunityPage() {
  const communityData = [
    {
      name: "Baller's Haven",
      description:
        "A thriving community of basketball enthusiasts who share their passion for the game, discuss strategies, and connect with fellow players.",
      imageLink:
        "https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Hoops Connect",
      description:
        "Join us to connect with basketball lovers from around the world. Whether you're a player, coach, or fan, this is the place to be!",
        imageLink: "https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "SlamNation Society",
      description:
        "Embrace the adrenaline of slam dunks and fast breaks in our tight-knit community. Share your favorite moments and engage in lively discussions.",
        imageLink:
        "https://images.unsplash.com/photo-1525973132219-a04334a76080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1570&q=80",
    },
    {
      name: "Crossover Corner",
      description:
        "Welcome to Crossover Corner, where we break down the art of crossovers and ankle-breaking moves. Join us to refine your skills!",
        imageLink:
        "https://images.unsplash.com/photo-1575452871897-97303e7bf288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      name: "Rebound Rivals",
      description:
        "If grabbing boards and dominating the paint is your thing, you've found your home. Share tips on rebounding and post play here!",
        imageLink:
        "https://images.unsplash.com/photo-1525973132219-a04334a76080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1570&q=80",
    },
    {
      name: "Swish Squad Hub",
      description:
        "Calling all sharpshooters! This community is dedicated to perfecting your shooting technique and discussing the pure joy of sinking shots.",
        imageLink:
        "https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Dunks & Discussions",
      description:
        "From epic dunks to in-depth game analysis, we cover it all. Join the conversation with fellow basketball fanatics!",
        imageLink:
        "https://images.unsplash.com/photo-1551714494-2b38050e79b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Fast Break Friends",
      description:
        "Are you all about fast-paced, up-tempo basketball? Join us to share your favorite fast break moments and strategies.",
        imageLink:
        "https://images.unsplash.com/photo-1551714494-2b38050e79b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Alley-Oop Alley",
      description:
        "This community is dedicated to the art of the perfect alley-oop. Share highlights, tips, and celebrate those high-flying connections!",
        imageLink:
        "https://images.unsplash.com/photo-1563506644863-444710df1e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    },
    {
      name: "Courtside Chatter",
      description:
        "Pull up a virtual seat courtside and engage in lively basketball discussions. From current games to historical moments, it's all here.",
        imageLink:
        "https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <div className="content-container">
      <Typography.Title className="content-header" level={3}>
        BASKETBALL COMMUNITY
      </Typography.Title>
      <Input placeholder="Search Community" suffix={<Bi.BiSearch />} />

      {communityData.map((data) => (
        <CommunityItem
          key={data.id}
          name={data.name}
          description={data.description}
          images={data.imageLink}
        />
      ))}
    </div>
  );
}
