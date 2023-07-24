import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewEntrySOA.module.css";
const NewEntrySOA = () => {
  const navigate = useNavigate();

  const onPhotoContainerClick = useCallback(() => {
    navigate("/new-entry-soa-filled");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.newEntrySoa}>
      <div className={styles.background} />
      <div className={styles.contentHolder}>
        <div className={styles.contents}>
          <div className={styles.photo} onClick={onPhotoContainerClick}>
            <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
            <div className={styles.clickHereToContainer}>
              <span className={styles.clickHereToContainer1}>
                <p className={styles.clickHereTo}>
                  Click here to attach invoice photo
                </p>
                <p className={styles.fieldsWillAutofill}>
                  Fields will autofill
                </p>
              </span>
            </div>
          </div>
          <div className={styles.input} />
          <div className={styles.supplier}>Supplier</div>
          <div className={styles.productList}>Product List</div>
          <div className={styles.beforeGst}>Before GST</div>
          <div className={styles.totalAmount}>Total Amount</div>
          <div className={styles.div}>$ 0.00</div>
          <div className={styles.div1}>$ 0.00</div>
          <div className={styles.div2}>7%</div>
          <div className={styles.productList1}>
            <div className={styles.no}>No.</div>
            <div className={styles.code}>Code</div>
            <div className={styles.description}>Description</div>
            <div className={styles.qty}>Qty</div>
            <div className={styles.unitCost}>Unit Cost</div>
            <div className={styles.amount}>Amount</div>
            <div className={styles.productListChild} />
            <div className={styles.productListItem} />
            <div className={styles.productListInner} />
            <div className={styles.lineDiv} />
            <div className={styles.productListChild1} />
            <div className={styles.productListChild2} />
          </div>
          <div className={styles.input1} />
          <div className={styles.date}>Date</div>
          <div className={styles.input2}>
            <div className={styles.new}>+ New</div>
          </div>
          <div className={styles.newEntryInvoiceContainer}>
            <p className={styles.fieldsWillAutofill}>New Entry:</p>
            <p className={styles.invoice}>Invoice</p>
          </div>
          <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
          <div className={styles.gst}>GST</div>
          <div className={styles.tickbox} />
          <div className={styles.paid}>Paid?</div>
          <div className={styles.login} onClick={onLoginContainerClick}>
            <div className={styles.greenButton}>
              <div className={styles.save}>Save</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.goBack} onClick={onGoBackTextClick}>
        <span className={styles.span}>{`<`}</span>
        <span> Go Back</span>
      </div>
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
  );
};

export default NewEntrySOA;
