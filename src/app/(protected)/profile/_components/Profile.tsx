"use client";

import KycComponent from "./KycComponent";
import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <div className="p-2">
      <UserProfile />

      <KycComponent />
    </div>
  );
};

export default Profile;
