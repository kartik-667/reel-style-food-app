// import { useEffect, useState } from "react";
// import axios from "axios";
// import {Link} from 'react-router-dom'

// export default function Home() {
//   // Sample video data
//     const handleButton=async ()=>{
//         console.log('btn clicked');
        
//     }

//     const [allvideos, setallvideos] = useState([])
    
//     useEffect(() => {
//         const getVideos=async ()=>{
//             try {
//                 const res=await axios.get("http://localhost:5555/api/food/")
//                 // console.log(res);
//                 setallvideos(res.data.data)
                
//             } catch (error) {
//                 console.log(error);
                
                
//             }
            
    
//         }
//         getVideos()

      
    
      
//     }, [])
    

//   const videos = [
//     {
//       id: 1,
//       url: "https://ik.imagekit.io/l09dh7jeg/75652d2e-be0a-4cb2-81fd-8d45c61b5a34_DVQK4BTkXk",
//       description:
//         "Delicious handcrafted burgers with fresh ingredients. Order now and taste the difference!",
//     },
//     {
//       id: 2,
//       url: "https://ik.imagekit.io/l09dh7jeg/75652d2e-be0a-4cb2-81fd-8d45c61b5a34_DVQK4BTkXk",
//       description:
//         "Refreshing beverages to keep you cool and energized throughout the day. Grab yours today!",
//     },
//     {
//       id: 3,
//       url: "https://ik.imagekit.io/l09dh7jeg/ee83157c-f0a6-47ff-8e61-3fa79e019416_NODIPi6IC",
//       description:
//         "Authentic pizzas baked to perfection with love and care. Try our special deals!",
//     },
//   ];

//   return (
//     <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-black">
//       {allvideos.map((video) => (
//         <div
//           key={video._id}
//           className="relative h-screen w-full snap-start flex items-center justify-center"
//         >
//           {/* Video */}
//           <video
//             src={video.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="h-full w-full object-cover"
//           />

//           {/* Overlay content */}
//           <div className="absolute bottom-12 left-0 right-0 px-4 text-center">
//             {/* Description (truncate to 2 lines) */}
//             <p className="mb-3 text-white text-sm font-medium line-clamp-2">
//               {video.description}
//             </p>

//             {/* Button */}
//             <Link to={"/foodpartner/" + video.foodpartner}>
//             <button onClick={handleButton} className="w-full max-w-xs mx-auto rounded-xl bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-white cursor-pointer">
//               Visit Store
//             </button>
//             </Link>
//           </div>

//           {/* Dark gradient overlay for better readability */}
//           <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
//         </div>
//       ))}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { FaHeart, FaRegHeart, FaCommentDots, FaBookmark } from "react-icons/fa";

// export default function Home() {
//   const handleButton = async () => {
//     console.log("btn clicked");
//   };

//   const [allvideos, setallvideos] = useState([]);

//   useEffect(() => {
//     const getVideos = async () => {
//       try {
//         const res = await axios.get("http://localhost:5555/api/food/");
//         setallvideos(res.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getVideos();
//   }, []);

//   return (
//     <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-black">
//       {allvideos.map((video) => (
//         <div
//           key={video._id}
//           className="relative h-screen w-full snap-start flex items-center justify-center"
//         >
//           {/* Video */}
//           <video
//             src={video.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="h-full w-full object-cover"
//           />

//           {/* Overlay content */}
//           <div className="absolute bottom-12 left-0 right-0 px-4 text-center">
//             {/* Description */}
//             <p className="mb-3 text-white text-2xl font-medium line-clamp-2">
//               {video.description}
//             </p>

//             {/* Buttons row */}
//             <div className="flex justify-center gap-6 mb-3">
//               {/* Like button */}
//               <button className="flex flex-col items-center text-white hover:text-red-500 transition">
//                 <FaRegHeart size={24} />
//                 <span className="text-xs">Like</span>
//               </button>

//               {/* Comment button */}
//               <button className="flex flex-col items-center text-white hover:text-blue-400 transition">
//                 <FaCommentDots size={24} />
//                 <span className="text-xs">Comment</span>
//               </button>

//               {/* Save button */}
//               <button className="flex flex-col items-center text-white hover:text-yellow-400 transition">
//                 <FaBookmark size={24} />
//                 <span className="text-xs">Save</span>
//               </button>
//             </div>

//             {/* Store button */}
//             <Link to={"/foodpartner/" + video.foodpartner}>
//               <button
//                 onClick={handleButton}
//                 className="w-full max-w-xs mx-auto rounded-xl bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-white cursor-pointer"
//               >
//                 Visit Store
//               </button>
//             </Link>
//           </div>

//           {/* Gradient overlay */}
//           <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
//         </div>
        

        
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaCommentDots, FaBookmark, FaHome } from "react-icons/fa";

export default function Home() {
  const handleButton = async () => {
    console.log("btn clicked");
  };

  const handleLike=async (video)=>{
    console.log(video);
    

  }

  const [allvideos, setallvideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5555/api/food/");
        setallvideos(res.data.data);
        // console.log(allvideos);
        
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, [allvideos]);

  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-black">
      {/* Video feed */}
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
          <div className="absolute bottom-20 left-0 right-0 px-4 text-center">
            <p className="mb-3 text-white text-2xl font-medium line-clamp-2">
              {video.description}
            </p>

            {/* Buttons row */}
            <div className="flex justify-center gap-6 mb-3">
              <button onClick={()=> handleLike(video)} className="flex flex-col items-center text-white hover:text-red-500 transition">
                <FaRegHeart size={22} />
                <span  className="text-[11px]">Like</span>
              </button>

              <button className="flex flex-col items-center text-white hover:text-blue-400 transition">
                <FaCommentDots size={22} />
                <span className="text-[11px]">Comment</span>
              </button>

              <button className="flex flex-col items-center text-white hover:text-yellow-400 transition">
                <FaBookmark size={22} />
                <span className="text-[11px]">Save</span>
              </button>
            </div>

            {/* Store button */}
            <Link to={"/foodpartner/" + video.foodpartner}>
              <button
                onClick={handleButton}
                className="w-full max-w-xs mx-auto rounded-xl bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-white cursor-pointer"
              >
                Visit Store
              </button>
            </Link>
          </div>

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Bottom navigation bar */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[200px] bg-black/50 backdrop-blur-md text-white flex justify-between items-center rounded-full shadow-lg border border-slate-700/50 px-4 py-2">
        <Link
          to="/"
          className="flex flex-col items-center flex-1 text-center hover:text-indigo-400 border-r border-slate-600"
        >
          <FaHome size={20} />
          <Link to="/">
          <span className="text-[11px]">Home</span>
          </Link>
        </Link>
        <Link
          to="/saved"
          className="flex flex-col items-center flex-1 text-center hover:text-indigo-400"
        >
          <FaBookmark size={20} />
          <span className="text-[11px]">Saved</span>
        </Link>
      </div>
    </div>
  );
}


