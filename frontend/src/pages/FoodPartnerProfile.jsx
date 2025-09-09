import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function FoodPartnerProfile() {

    const {id}=useParams()

    const [profile, setprofile] = useState("")
    const [videos,setvideos]=useState([])

    
    useEffect(() => {
      axios.get(`http://localhost:5555/api/foodpartner/id/${id}`).then((data)=>{
        // setprofile(data.partner)
        // console.log(data.data.partner);
        setprofile(data.data.partner)
        
      })

      axios.get(`http://localhost:5555/api/foodpartner/${id}`).then((data)=>{
        // console.log(data.data.data);
        let tmp=data.data.data
        tmp.reverse()
        setvideos(tmp)
        
        
        // tmpvid.reverse()
        // setvideos(tmpvid)
        
        
        
      })
    
      
    }, [id])
    

  const partner = {
    name: "test-food-partner",
    address: "001 test street, test city , test",
    totalMeals: 1200,
    customersServed: 450,
    videos: [
      { id: 1, url: "video1.mp4" },
      { id: 2, url: "video2.mp4" },
      { id: 3, url: "video3.mp4" },
      { id: 4, url: "video4.mp4" },
      { id: 5, url: "video5.mp4" },
      { id: 6, url: "video6.mp4" },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-4">
      {/* Card Header */}
      <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-200">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-500">
            {/* Placeholder circle */}
            <span>Img</span>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-semibold text-lg bg-slate-200 rounded-lg px-2 py-1 inline-block">
              {profile.name}
            </h2>
            <p className="mt-2 text-sm bg-slate-200 rounded-lg px-2 py-1 max-w-xs truncate">
              {profile.address}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex-1 text-center">
            <p className="font-medium">{videos.length}</p>
            <p className="text-slate-500">total meals</p>
          </div>
          <div className="flex-1 text-center">
            <p className="font-medium">{profile.customersServed}</p>
            <p className="text-slate-500">customer served</p>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {videos.length === 0 && (
          <h1 className='text-3xl font-semibold'>No videos found</h1>
        )}
        {videos.length > 0 &&  videos.map((vid) => (
          <div
            key={vid._id || vid.id}
            className="aspect-square bg-white rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm"
          >
            <video
              src={vid.video || vid.url} // Use the correct property based on your API
              className="h-full w-full object-cover"
              controls
              autoPlay={false}
              muted
            />
          </div>
        ))}
      </div>
    </div>
  );
}
