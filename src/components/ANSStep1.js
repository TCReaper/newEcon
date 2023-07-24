import styles from "./ANSStep1.module.css";
const ANSStep1 = ({ onClose }) => {
  return (
    <div className={styles.ansStep1}>
      <div className={styles.contents}>
        <div className={styles.productList}>
          <div className={styles.code}>Code</div>
          <div className={styles.name}>Name</div>
          <div className={styles.productListChild} />
          <div className={styles.productListItem} />
          <div className={styles.productListInner} />
          <div className={styles.tickbox} />
        </div>
        <div className={styles.input}>
          <div className={styles.new}>+ New</div>
        </div>
        <div className={styles.input1} />
        <div className={styles.supplierName}>Supplier Name</div>
        <div className={styles.input2} />
        <div className={styles.input3} />
        <div className={styles.input4} />
        <div className={styles.input5} />
        <div className={styles.supplierAddress}>Supplier Address</div>
        <div className={styles.salesmanName}>Salesman Name</div>
        <div className={styles.contactNumber}>Contact Number</div>
        <div className={styles.email}>Email</div>
        <div className={styles.products}>Products</div>
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
    </div>
  );
};

export default ANSStep1;
