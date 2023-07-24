import styles from "./ANSStep23.module.css";
const ANSStep23 = () => {
  return (
    <div className={styles.ansStep23}>
      <div className={styles.contents}>
        <img className={styles.photoIcon} alt="" src="/photo1.svg" />
        <div className={styles.markOutTheContainer}>
          <span>{`Mark out the `}</span>
          <span className={styles.nameOfSupplier}>Name of Supplier</span>
          <span> by dragging a box over it</span>
        </div>
      </div>
      <div className={styles.nextButton} />
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
      <div className={styles.greenButton}>
        <div className={styles.next}>Next</div>
      </div>
    </div>
  );
};

export default ANSStep23;
