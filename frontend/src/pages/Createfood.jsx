import React, { useState } from "react";
import { useRef } from "react";

import axios from "axios";

export default function CreateFood() {
  const [videoPreview, setVideoPreview] = useState(null);
  const videoRef=useRef(null)
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    } else {
      setVideoPreview(null);
    }
  };

  const handleRemoveVideo = () => {
    setVideoPreview(null);
    if(videoRef.current){
        videoRef.current.value="" //clears video input also
    }
    // console.log(vidtag.);
    
  };

  const handleFormSubmit=async (e)=>{
    e.preventDefault()
    // const vidFile=e.target.files
    // console.log(e.target.files[0]);
    const videofile=videoRef.current.files[0]
    // console.log(videofile);
    // console.log({name,description});
    try {
        const formdata=new FormData()
        formdata.append("name",name)
        formdata.append("description",description)
        formdata.append("video",videofile)

        const response=await axios.post("http://localhost:5555/api/food/",formdata,{withCredentials:true})
        console.log(response);
        

        
    } catch (error) {
        console.log(error);

        
        
    }
    
    
    

  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md border border-slate-200 p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Create Food
        </h1>

        {/* Video Preview */}
        {videoPreview && (
          <div className="mb-6  rounded-xl overflow-hidden border border-slate-200 shadow">
            <video
              src={videoPreview}
              controls
              className="w-full h-64 object-cover"
            />
            <div className="flex justify-center mt-1 mb-1">
              <button
                type="button"
                onClick={handleRemoveVideo}
                className="rounded-lg bg-red-600 px-4 py-2 text-white font-semibold shadow hover:bg-red-700 transition"
              >
                Remove Video
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Food Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e)=> setname(e.target.value)}
              placeholder="Enter food name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
            value={description}
            onChange={(e)=> setdescription(e.target.value)}
              placeholder="Write a short description..."
              rows="4"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Video Upload */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload Video
            </label>
            <input
                id="vid"
              type="file"
              accept="video/*"
              ref={videoRef}
              onChange={handleVideoChange}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-700 
              file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white 
              hover:file:bg-indigo-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-semibold shadow hover:bg-indigo-700 transition"
          >
            Create Food
          </button>
        </form>
      </div>
    </div>
  );
}
