import React from 'react'
import Card from './Card'

function CardBox(){
    const imagesList = [
        {
          id: 1,
          src: "Images/image 1.png",
          alt: "Tree 1",
        },
        {
          id: 2,
          src: "Images/image 2.png",
          alt: "Tree 2",
        },
        {
          id: 3,
          src: "Images/image 3.png",
          alt: "Tree 3",
        },
        {
          id: 4,
          src: "Images/image 4.png",
          alt: "Tree 4",
        },
        {
          id: 5,
          src: "Images/image 5.png",
          alt: "Plant 1",
        },
        {
          id: 6,
          src: "Images/image 6.png",
          alt: "Plant 2",
        },
        {
          id: 7,
          src: "Images/image 7.png",
          alt: "Plant 3",
        },
        {
          id: 8,
          src: "Images/image 8.png",
          alt: "Plant 4",
        },
        {
          id: 9,
          src: "Images/image 9.png",
          alt: "Tray",
        },
        {
          id: 10,
          src: "Images/image 10.png",
          alt: "Soil",
        },
        {
          id: 11,
          src: "Images/image 11.png",
          alt: "Soil 2",
        },
        {
          id: 12,
          src: "Images/image 12.png",
          alt: "Spade",
        },
        {
          id: 13,
          src: "Images/image 13.png",
          alt: "Duck 1",
        },
        {
          id: 14,
          src: "Images/image 14-1.png",
          alt: "Duck 2",
        },
        {
          id: 15,
          src: "Images/image 14.png",
          alt: "Duck 3",
        },
        {
          id: 16,
          src: "Images/image 15.png",
          alt: "Duck 4",
        },
        {
          id: 17,
          src: "Images/image 16.png",
          alt: "Pot 1",
        },
        {
          id: 18,
          src: "Images/image 17.png",
          alt: "Pot 2",
        },
        {
          id: 19,
          src: "Images/image 18.png",
          alt: "Pot 3",
        },
        {
          id: 20,
          src: "Images/image 19.png",
          alt: "Pot 4",
        },
      ];

    return(
    <div style={{"backgroundColor":"#F2EADD"}} className="grid grid-cols-4 p-2 gap-2 flex mx-4 my-4">
        {imagesList.map((image)=>(
            <Card key={image.id} id={image.id} src={image.src} alt={image.alt}/>
        ))}
    </div>
    )
}

export default CardBox