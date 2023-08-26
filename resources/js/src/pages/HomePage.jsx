import React from 'react'
import Carousel from '../components/carousel/carousel'

export default function HomePage() {
  const carouselData = [
    {url: 'https://images.unsplash.com/photo-1525973132219-a04334a76080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1570&q=80'},
    {url: 'https://images.unsplash.com/photo-1575452871897-97303e7bf288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'},
    {url: 'https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'},
    {url: 'https://images.unsplash.com/photo-1574907060871-4555aa8aca75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'},
  ]
  return (
    <div>
        <Carousel data={carouselData}/>
    </div>
  )
}
