import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaEye } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../helper";

const DepartmentEditProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const submitImage = async () => {
    if (!image) {
      toast.error("Please select an image to upload");
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "committees");
    data.append("cloud_name", "merndeveloper");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/merndeveloper/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      if (response.ok) {
        setImageUrl(result.url);
        console.log("Upload successful:");
        toast.success("Image uploaded successfully");
      } else {
        console.error("Upload error:", result);
        toast.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error occurred during image upload:", error);
      toast.error("An error occurred during the upload");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: username,
      Id_number: userId,
      password,
      image_url: imageUrl,
    };
    const userDetails = JSON.stringify(data);
    const url = `${BASE_URL}/api/v1/department/update`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: userDetails,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Profile updated successfully");
      setTimeout(() => {
        navigate("/departments");
      }, 1500);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred while updating the profile");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-xs md:max-w-2xl px-4 py-2 lg:max-w-3xl bg-white rounded-lg flex flex-col md:flex-row items-center sm:mb-[5%] sm:mt-[10%] md:mt-[0%]">
          <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
            <div className="h-fit w-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-system-update_516790-1241.jpg?w=740"
                alt="this is login page logo"
                className="w-[120%] h-[100%] sm:w-[120%] sm:h-[80%] sm:mt-[15%]"
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-center md:pt-10 lg:text-xl md:text-xl sm:text-lg font-semibold text-gray-700 mb-1">
              Edit Profile
            </h2>
            <form onSubmit={handleEdit} className="w-full px-6 pt-1 pb-2">
              <div className="mb-3 w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Student Name
                </label>
                <input
                  value={username}
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="Id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Student Id
                </label>
                <input
                  type="text"
                  id="Id"
                  onChange={(e) => setUserId(e.target.value)}
                  value={userId}
                  placeholder="Enter userId"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="flex justify-between items-center  border border-gray-300 rounded-md">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter New Password"
                    className="w-full px-3 py-2 text-sm outline-none border-none border-[0px]"
                  />
                  <FaEye
                    className="ml-2 text-gray-500 cursor-pointer h-[4vh] mr-2"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <span className="text-red-500 text-[10px]">
                  * Please remember it carefully. You will not have a forgot
                  password option.
                </span>
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="profileImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  id="profileImage"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full px-3 py-2 mt-1 text-sm rounded-md focus:outline-none"
                />
                <button
                  type="button"
                  className="mt-2 w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={submitImage}
                >
                  Upload Image
                </button>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentEditProfile;
