import React, { useState } from "react";
import Avatar1 from "./avatars/Asset 1.svg";
import Avatar2 from "./avatars/Asset 2.svg";
import Avatar3 from "./avatars/Asset 3.svg";
import Avatar4 from "./avatars/Asset 4.svg";
import Avatar5 from "./avatars/Asset 5.svg";
import Avatar6 from "./avatars/Asset 6.svg";
import EditIcon from "./edit-icon.svg";

const AvatarDropdown = () => {
  const [avatar, setAvatar] = useState(Avatar1);

  const handleChange = (e) => {
    setAvatar(e.target.src);
  };

  const [display, setDisplay] = useState("dropdown");

  const dropDown = () => {
    if (display === "dropdown") {
      setDisplay("dropdown_active");
    } else {
      setDisplay("dropdown");
    }
  };

  return (
    <>
      <div className="user_img">
        <img className="avatar_img" src={avatar} alt="User Avatar" />
        <button className="edit_icon" onClick={dropDown}>
          <img src={EditIcon} onClick={dropDown} alt="" />
        </button>
      </div>
      <div className={display}>
        <img
          className="avatar_img_dd"
          value="{Avatar1}"
          src={Avatar1}
          alt="User Avatar"
          onClick={handleChange}
        />
        <img
          className="avatar_img_dd"
          value={Avatar2}
          src={Avatar3}
          alt="User Avatar"
          onClick={handleChange}
        />
        <img
          className="avatar_img_dd"
          value={Avatar3}
          src={Avatar2}
          alt="User Avatar"
          onClick={handleChange}
        />
        <img
          className="avatar_img_dd"
          value={Avatar4}
          src={Avatar4}
          alt="User Avatar"
          onClick={handleChange}
        />
        <img
          className="avatar_img_dd"
          value={Avatar5}
          src={Avatar5}
          alt="User Avatar"
          onClick={handleChange}
        />
        <img
          className="avatar_img_dd"
          value={Avatar6}
          src={Avatar6}
          alt="User Avatar"
          onClick={handleChange}
        />
      </div>
    </>
  );
};

export default AvatarDropdown;
