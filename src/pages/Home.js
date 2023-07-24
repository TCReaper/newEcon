import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const onSupplierContainerClick = useCallback(() => {
    navigate("/suppliers");
  }, [navigate]);

  const onRecordsContainerClick = useCallback(() => {
    navigate("/records");
  }, [navigate]);

  const onNewEntryContainerClick = useCallback(() => {
    navigate("/new-entry");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.frame}>
        <div className={styles.background} />
        <div className={styles.blackBar}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.frame1}>
            <div className={styles.home1}>
              <div className={styles.home2}>Home</div>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            </div>
            <div className={styles.logout}>
              <div className={styles.logOut}>Log Out</div>
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
            </div>
            <div className={styles.profile}>
              <div className={styles.profile1}>Profile</div>
              <img className={styles.vectorIcon2} alt="" src="/vector6.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainScrollable}>
        <div className={styles.statsContent} />
        <div className={styles.statistics}>Statistics</div>
        <div className={styles.clickOnAny}>
          Click on any actions to get started.
        </div>
        <div className={styles.welcomeKelvin}>Welcome, Kelvin</div>
        <div className={styles.frame2}>
          <div className={styles.export}>
            <div className={styles.suppliers}>Export</div>
            <img className={styles.groupIcon} alt="" src="/group3.svg" />
          </div>
          <div className={styles.supplier} onClick={onSupplierContainerClick}>
            <div className={styles.suppliers}>Suppliers</div>
            <img className={styles.vectorIcon3} alt="" src="/vector12.svg" />
          </div>
          <div className={styles.records} onClick={onRecordsContainerClick}>
            <div className={styles.suppliers}>Records</div>
            <img className={styles.groupIcon1} alt="" src="/group4.svg" />
          </div>
          <div className={styles.newEntry} onClick={onNewEntryContainerClick}>
            <div className={styles.suppliers}>New Entry</div>
            <img className={styles.vectorIcon4} alt="" src="/vector13.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
