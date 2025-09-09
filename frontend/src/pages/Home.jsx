import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function Home() {
  // Sample video data
    const handleButton=async ()=>{
        console.log('btn clicked');
        
    }

    const [allvideos, setallvideos] = useState([])
    
    useEffect(() => {
        const getVideos=async ()=>{
            try {
                const res=await axios.get("http://localhost:5555/api/food/")
                // console.log(res);
                setallvideos(res.data.data)
                
            } catch (error) {
                console.log(error);
                
                
            }
            
    
        }
        getVideos()

      
    
      
    }, [])
    

  const videos = [
    {
      id: 1,
      url: "https://ik.imagekit.io/l09dh7jeg/75652d2e-be0a-4cb2-81fd-8d45c61b5a34_DVQK4BTkXk",
      description:
        "Delicious handcrafted burgers with fresh ingredients. Order now and taste the difference!",
    },
    {
      id: 2,
      url: "https://ik.imagekit.io/l09dh7jeg/75652d2e-be0a-4cb2-81fd-8d45c61b5a34_DVQK4BTkXk",
      description:
        "Refreshing beverages to keep you cool and energized throughout the day. Grab yours today!",
    },
    {
      id: 3,
      url: "https://ik.imagekit.io/l09dh7jeg/ee83157c-f0a6-47ff-8e61-3fa79e019416_NODIPi6IC",
      description:
        "Authentic pizzas baked to perfection with love and care. Try our special deals!",
    },
  ];

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-black">
      {allvideos.map((video) => (
        <div
          key={video._id}
          className="relative h-screen w-full snap-start flex items-center justify-center"
        >
          {/* Video */}
          <video
            src={video.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />

          {/* Overlay content */}
          <div className="absolute bottom-12 left-0 right-0 px-4 text-center">
            {/* Description (truncate to 2 lines) */}
            <p className="mb-3 text-white text-sm font-medium line-clamp-2">
              {video.description}
            </p>

            {/* Button */}
            <Link to={"/foodpartner/" + video.foodpartner}>
            <button onClick={handleButton} className="w-full max-w-xs mx-auto rounded-xl bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-white cursor-pointer">
              Visit Store
            </button>
            </Link>
          </div>

          {/* Dark gradient overlay for better readability */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
