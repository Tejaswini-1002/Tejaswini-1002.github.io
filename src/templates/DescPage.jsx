import React from 'react'
import { useParams } from 'react-router'

const imagesList = [
    {
      id: 1,
      src: "../Images/image 1.png",
      alt: "Tree 1",
    },
    {
      id: 2,
      src: "../Images/image 2.png",
      alt: "Tree 2",
    },
    {
      id: 3,
      src: "../Images/image 3.png",
      alt: "Tree 3",
    },
    {
      id: 4,
      src: "../Images/image 4.png",
      alt: "Tree 4",
    },
    {
      id: 5,
      src: "../Images/image 5.png",
      alt: "Plant 1",
    },
    {
      id: 6,
      src: "../Images/image 6.png",
      alt: "Plant 2",
    },
    {
      id: 7,
      src: "../Images/image 7.png",
      alt: "Plant 3",
    },
    {
      id: 8,
      src: "../Images/image 8.png",
      alt: "Plant 4",
    },
    {
      id: 9,
      src: "../Images/image 9.png",
      alt: "Tray",
    },
    {
      id: 10,
      src: "../Images/image 10.png",
      alt: "Soil",
    },
    {
      id: 11,
      src: "../Images/image 11.png",
      alt: "Soil 2",
    },
    {
      id: 12,
      src: "../Images/image 12.png",
      alt: "Spade",
    },
    {
      id: 13,
      src: "../Images/image 13.png",
      alt: "Duck 1",
    },
    {
      id: 14,
      src: "../Images/image 14-1.png",
      alt: "Duck 2",
    },
    {
      id: 15,
      src: "../Images/image 14.png",
      alt: "Duck 3",
    },
    {
      id: 16,
      src: "../Images/image 15.png",
      alt: "Duck 4",
    },
    {
      id: 17,
      src: "../Images/image 16.png",
      alt: "Pot 1",
    },
    {
      id: 18,
      src: "../Images/image 17.png",
      alt: "Pot 2",
    },
    {
      id: 19,
      src: "../Images/image 18.png",
      alt: "Pot 3",
    },
    {
      id: 20,
      src: "../Images/image 19.png",
      alt: "Pot 4",
    },
  ];

function DescPage(props){
    const { id } = useParams();
    return(
    <div style={{"backgroundColor":"#FFF9F0"}} className='h-screen'>
        <div className='m-auto flex justify-between p-2'>
            <h2 className='text-2xl font-medium m-auto'>B.planet</h2>
            <button className="border-2 border-black rounded-2xl px-2 mr-2 hover:bg-black hover:text-white">
                <Link to="https://tejaswini-1002.github.io/b-planet/contact/">Contact us</Link>
            </button>
        </div>
        <div className='flex'>
        <div className='px-6'>
            <h3 className='text-xl font-medium my-2'>{imagesList[id-1].alt}</h3>
            <p>Three Leaf Clover, symbolizes good luck and fortune in many cultures. </p>
            <h3 className='text-xl font-medium my-3'>Plant Care Guide</h3>
            <hr className='h-0.5 bg-black w-1/2'/>
            <div className='w-1/2'>
            <div className='flex justify-between'>
                <p> Water</p>
                <p className='text-wrap w-1/2'>Allow the soil to dry out completely before watering.</p>
            </div>
            <hr className='h-0.5 bg-black'/>
            <div className='flex justify-between'>
                <p> Light</p>
                <p className='text-wrap w-1/2'>Bright indirect light environments. </p>
            </div>
            <hr className='h-0.5 bg-black'/>
            <div className='flex justify-between mb-8'>
                <p> Tips</p>
                <p className='text-wrap w-1/2'>Gently insert a toothpick into the soil to determine if your
                plant needs watering. </p>
            </div>
            <p className='text-xl font-medium my-3'>Description</p>
            <hr className='h-0.5 bg-black'/>
            <p>A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold 
              up in pairs during the evening. Keep away from children and pets.
              Plants images depicted are solely for illustration purposes only.
            </p>
            </div>
        </div>

        <div className='w-1/4'>
          <img src={imagesList[id-1].src} alt='Tree' className='w-full' />
        </div>
        </div>
    </div>
    )
}

export default DescPage