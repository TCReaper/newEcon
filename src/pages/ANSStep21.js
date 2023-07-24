import styles from "./ANSStep21.module.css";
const ANSStep21 = () => {
  return (
    <div className={styles.ansStep21}>
      <div className={styles.uploadAStatement}>
        Upload a Statement of Account Sample Document
      </div>
      <div className={styles.nextButton}>
        <div className={styles.greenButton}>
          <div className={styles.next}>Next</div>
        </div>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressChild} />
        <div className={styles.progressItem} />
        <div className={styles.progressInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.progressChild1} />
        <div className={styles.details}>Details</div>
        <div className={styles.statementOfAccountMappingContainer}>
          <p className={styles.statementOfAccount}>Statement of Account</p>
          <p className={styles.statementOfAccount}>Mapping</p>
        </div>
        <div className={styles.invoiceMapping}>
          <p className={styles.statementOfAccount}>Invoice</p>
          <p className={styles.statementOfAccount}>Mapping</p>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.addNewSupplier}>Add New Supplier</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.photo}>
        <div className={styles.clickHereTo}>Click here to attach a photo</div>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default ANSStep21;
