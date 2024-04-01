import { useRef, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'

import { app } from '../firebase';

import { useDispatch } from 'react-redux';

import {
  updateUserStart, updateUserSuccess, updateUserFailure,
  deleteUserStart, deleteUserFailure, deleteUserSuccess,
  signOut
} from "../redux/user/userSlice";
import Header from '../components/Header';


export default function Profile() {
  
  const fileRef = useRef(null);

  const { currentUser, isLoading, isError } = useSelector(state => state.user);

  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [isImageError, setIsImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    
    // uploads the image based on storageRef
    const uploadTask = uploadBytesResumable(storageRef, image);
    // keeps track of the uploading progression
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      
      (error) => setIsImageError(true),
      
      () => getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          setFormData((prev) => ({ ...prev, profilePicture: downloadURL }));
        })
    )
  }; // handleFileUpload

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    // prevent the default behaviour that refreshes the page on submit
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const res = await fetch(`/server/user/update/${currentUser._id}`, {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Profile() - data = ", data);

      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }

      // everything is fine
      dispatch(updateUserSuccess(data));
      setIsUpdateSuccess(true);

    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {

    try {
      dispatch(deleteUserStart());

      const res = await fetch(`/server/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }

      // everything is ok
      dispatch(deleteUserSuccess(data));


    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/client/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {/* Header */}
      <Header
        isShowHome={true}
        isShowAbout={true}
        isShowDashboard={true}
      />
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
        <input type="file" ref={fileRef} hidden accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile picture"
          className="w-24 h-24 mt-2 self-center rounded-full cursor-pointer object-cover" // object-cover keeps the aspect ratio
          onClick={() => fileRef.current.click()}
        />
        <p className='text-sm text-center'>
          {isImageError ? (
            <span className='text-red-700 '>Error uploading image</span>
          ) :
            (imagePercent > 0 && imagePercent < 100) ? (
              <span className='text-slate-700'>{`Uploading: ${imagePercent}%`}</span>
            ) : (
              imagePercent === 100 ? (
                <span className='text-green-700'>Image uploaded successfully</span>
              ) : ""
            )
          }
        </p>
        <input type="text" id="username" placeholder="Username" defaultValue={currentUser.username} onChange={handleChange} className="bg-slate-100 rounded-lg p-3"></input>
        <input type="email" id="email" placeholder="Email" defaultValue={currentUser.email} onChange={handleChange} className="bg-slate-100 rounded-lg p-3"></input>
        <input type="password" id="passwords" placeholder="Password" onChange={handleChange} className="bg-slate-100 rounded-lg p-3"></input>
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50"
        >
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteAccount} className="text-red-700 cursor-pointer">Delete Account</span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      <p className='text-red-700 mt-5 text-center'>{isError && "Something went wrong"}</p>
      <p className='text-green-700 mt-5 text-center'>{isUpdateSuccess && "Profile information correctly updated"}</p>
      </div>
      </>
  )
}
