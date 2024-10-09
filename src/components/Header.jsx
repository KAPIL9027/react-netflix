import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const user = useSelector((state)=> state?.user?.payload);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const userData = {
          uuid: user.uid,
          email: user.email,
          accessToken: user.accessToken,
          displayName: user.displayName,
          photoURL: user.photoURL
        }

        dispatch(addUser({payload: userData}))
        
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    
  },[])
  return (
    <div className='w-full absolute bg-transparent flex flex-row justify-between items-center'>
      
      <img
        className="ml-[5vw] w-40 z-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="header-logo"
      />
      
      {
        user &&
        <div className="z-20  flex flex-row gap-[10px]">
          <div>
        <button onClick={()=>{
          navigate('/gptsearch')
        }}className="p-2 bg-purple-600 text-white rounded-md">GPT Search</button>
      </div>
        <div>
        <img
          
          alt="user-logo"
          src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        />
        {user && <div className="text-[12px] text-white">{user.displayName}</div>}
        </div>
       
        
        
        {user && <a className="w-16 text-sm font-bold cursor-pointer text-white" onClick={()=>{
          signOut(auth).then(() => {
            // Sign-out successful.
            console.log("log off");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
        }}>Sign Out</a>}
     
      </div>
      }
      
    </div>
  );
};

export default Header;
