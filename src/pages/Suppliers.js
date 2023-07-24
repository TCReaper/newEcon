import { useState, useCallback } from "react";
import ANSStep1 from "../components/ANSStep1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Suppliers.module.css";
const Suppliers = () => {
  const [isANSStep1Open, setANSStep1Open] = useState(false);
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const openANSStep1 = useCallback(() => {
    setANSStep1Open(true);
  }, []);

  const closeANSStep1 = useCallback(() => {
    setANSStep1Open(false);
  }, []);

  return (
    <>
      <div className={styles.suppliers}>
        <div className={styles.background} />
        <div className={styles.goBack} onClick={onGoBackTextClick}>
          <span className={styles.span}>{`<`}</span>
          <span> Go Back</span>
        </div>
        <div className={styles.search}>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <div className={styles.search1}>Search...</div>
        </div>
        <div className={styles.search2} onClick={openANSStep1}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/-icon-library-add.svg"
          />
          <div className={styles.addNewSupplier}>Add New Supplier</div>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
        <div className={styles.productList}>
          <div className={styles.no}>No.</div>
          <div className={styles.name}>Name</div>
          <div className={styles.salesman}>Salesman</div>
          <div className={styles.eMail}>E-mail</div>
          <div className={styles.productListChild} />
          <div className={styles.productListItem} />
          <div className={styles.productListInner} />
          <div className={styles.lineDiv} />
          <div className={styles.tickbox} />
          <div className={styles.contactNo}>Contact No.</div>
          <div className={styles.productListChild1} />
          <div className={styles.productListChild2} />
        </div>
        <div className={styles.suppliers1}>Suppliers</div>
        <div className={styles.blackBar}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.logout}>
            <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
            <div className={styles.logOut}>Log Out</div>
          </div>
          <div className={styles.home}>
            <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
            <div className={styles.home1}>Home</div>
          </div>
          <div className={styles.profile}>
            <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
            <div className={styles.profile1}>Profile</div>
          </div>
        </div>
      </div>
      {isANSStep1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeANSStep1}
        >
          <ANSStep1 onClose={closeANSStep1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Suppliers;
