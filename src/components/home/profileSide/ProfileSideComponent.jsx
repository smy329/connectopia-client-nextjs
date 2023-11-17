import React from "react";
import styles from "@/components/home/profileSide/ProfileSide.module.css";
import LogoSearch from "../logoSearch/LogoSearch";

const ProfileSideComponent = () => {
  return (
    <section className={styles.profileSide}>
      <LogoSearch />
    </section>
  );
};

export default ProfileSideComponent;
