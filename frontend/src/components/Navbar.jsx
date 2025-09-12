import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Globalcontext";
export default function Navbar() {
//   const [user, setuser] = useState(null);
  const {user,setuser}=useContext(AuthContext)
  console.log(user);
  
    

  // ✅ Check if user is logged in
//   useEffect(() => {
//     async function check() {
//       try {
//         const result = await axios.post(
//           "http://localhost:5555/api/auth/user/checksignin",
//           {},
//           { withCredentials: true }
//         );

//         if (result.data?.result) {
//           setuser(result.data.user);
//         //   console.log(result.data.user);
//         // console.log(user);
        
          
//         } else {
//           setuser(null);
//         }
//       } catch (error) {
//         console.log("Error checking user:", error);
//       }
//     }
//     check();
//   }, []);

  // ✅ Sign Out
  const handleSignOut = async () => {
    try {
      await axios.post(
        "http://localhost:5555/api/auth/user/logout",
        {},
        { withCredentials: true }
      );
      setuser(null);
    } catch (error) {
      console.log("Signout error:", error);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-indigo-600">
        🍔 FoodReels
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        <Link to={user!==null ? `/${user.userid}/saved` : `/user/login`}  className="hover:text-indigo-600 transition">
          Saved
        </Link>
        <Link to="/explore" className="hover:text-indigo-600 transition">
          Explore
        </Link>
      </div>

      {/* Auth buttons */}
      <div>
        {user !== null ? (
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/user/login"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Sign In
            </Link>
            <Link
              to="/foodpartner/login"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Partner Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
