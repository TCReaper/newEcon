import styles from "./ANSStep22.module.css";
const ANSStep22 = () => {
  return (
    <div className={styles.ansStep22}>
      <div className={styles.contents}>
        <div className={styles.markOutThe}>
          Mark out the edges of the document by dragging the circles to the
          edges
        </div>
        <img className={styles.photoIcon} alt="" src="/photo2.svg" />
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
      <img className={styles.edgeIcon} alt="" src="/edge.svg" />
    </div>
  );
};

export default ANSStep22;
