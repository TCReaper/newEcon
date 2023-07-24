import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Records.module.css";
const Records = () => {
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.records}>
      <div className={styles.background}>
        <div className={styles.pastRecords}>Past Records</div>
        <div className={styles.filter}>Filter</div>
        <div className={styles.search}>
          <div className={styles.date}>Date</div>
        </div>
        <div className={styles.search1}>
          <div className={styles.date}>Supplier</div>
        </div>
        <div className={styles.search2}>
          <div className={styles.entryType}>Entry Type</div>
        </div>
        <div className={styles.productList}>
          <div className={styles.no}>No.</div>
          <div className={styles.date1}>Date</div>
          <div className={styles.type}>Type</div>
          <div className={styles.supplier1}>Supplier</div>
          <div className={styles.amount}>Amount</div>
          <div className={styles.productListChild} />
          <div className={styles.productListItem} />
          <div className={styles.productListInner} />
          <div className={styles.lineDiv} />
          <div className={styles.productListChild1} />
          <div className={styles.tickbox} />
          <div className={styles.description}>Description</div>
          <div className={styles.productListChild2} />
          <div className={styles.productListChild3} />
        </div>
      </div>
      <div className={styles.goBack} onClick={onGoBackTextClick}>
        <span className={styles.span}>{`<`}</span>
        <span> Go Back</span>
      </div>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.search3}>
        <div className={styles.search4}>Search...</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
      <div className={styles.blackBar}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.logout}>
          <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
          <div className={styles.logOut}>Log Out</div>
        </div>
        <div className={styles.home}>
          <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
          <div className={styles.home1}>Home</div>
        </div>
        <div className={styles.profile}>
          <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
          <div className={styles.profile1}>Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Records;
