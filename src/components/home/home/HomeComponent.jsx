import React from "react";
import styles from "@/components/home/home/Home.module.css";
import ProfileSideComponent from "../profileSide/ProfileSideComponent";
import PostSideComponent from "../postSide/PostSideComponent";
import RightSideComponent from "../rightSide/RightSideComponent";

const HomeComponent = () => {
  return (
    <section className="relative grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <ProfileSideComponent />
      </div>
      <div className="col-span-6">
        <PostSideComponent />
      </div>
      <div className="col-span-3">
        <RightSideComponent />
      </div>
    </section>
  );
};

export default HomeComponent;
