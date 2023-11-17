import React from "react";
import styles from "@/components/home/logoSearch/LogoSearch.module.css";
import Image from "next/image";
import { UilSearch } from "@iconscout/react-unicons";
import logo from "@/assets/img/logo.png";
const LogoSearch = () => {
  return (
    <div className={styles.logoSearch}>
      <Image src={logo} alt="logo" />
      <div className={styles.Search}>
        <input type="text" placeholder="#Explore" />
        <div className={styles.sIcon}>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
