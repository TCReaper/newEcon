import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewEntry.module.css";
const NewEntry = () => {
  const navigate = useNavigate();

  const onSupplierContainerClick = useCallback(() => {
    navigate("/suppliers");
  }, [navigate]);

  const onRecordsContainerClick = useCallback(() => {
    navigate("/records");
  }, [navigate]);

  const onNewEntryContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onInvoiceContainerClick = useCallback(() => {
    navigate("/new-entry-soa");
  }, [navigate]);

  return (
    <div className={styles.newEntry}>
      <div className={styles.frame}>
        <div className={styles.background} />
        <div className={styles.blackBar}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.frame1}>
            <div className={styles.home}>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
              <div className={styles.home1}>Home</div>
            </div>
            <div className={styles.logout}>
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              <div className={styles.logOut}>Log Out</div>
            </div>
            <div className={styles.profile}>
              <img className={styles.vectorIcon2} alt="" src="/vector6.svg" />
              <div className={styles.profile1}>Profile</div>
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
            <img className={styles.groupIcon} alt="" src="/group1.svg" />
            <div className={styles.suppliers}>Export</div>
          </div>
          <div className={styles.supplier} onClick={onSupplierContainerClick}>
            <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
            <div className={styles.suppliers}>Suppliers</div>
          </div>
          <div className={styles.records} onClick={onRecordsContainerClick}>
            <img className={styles.groupIcon1} alt="" src="/group2.svg" />
            <div className={styles.suppliers}>Records</div>
          </div>
          <div className={styles.newEntry1} onClick={onNewEntryContainerClick}>
            <div className={styles.frame3}>
              <img className={styles.vectorIcon4} alt="" src="/vector10.svg" />
              <div className={styles.creditNote}>
                <div className={styles.creditNote1}>Credit Note</div>
              </div>
            </div>
            <div className={styles.newEntry2}>New Entry</div>
          </div>
          <div className={styles.soa}>
            <div className={styles.statementOfAccount}>
              Statement of Account
            </div>
          </div>
          <div className={styles.invoice} onClick={onInvoiceContainerClick}>
            <div className={styles.invoice1}>Invoice</div>
          </div>
          <div className={styles.receipt}>
            <div className={styles.creditNote1}>Receipt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
