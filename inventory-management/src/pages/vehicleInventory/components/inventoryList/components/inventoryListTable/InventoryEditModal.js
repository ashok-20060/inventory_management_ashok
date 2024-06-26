import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Constants
import ACTION_TYPES from "../../../../actions/vehicleInventory.actionTypes";

// Styles
import styles from "./inventoryEditModal.module.scss";

const EditModal = (props) => {
  const { isModalVisible, setModalVisible, productValues, rowIndex } = props;
  const [formValues, setFormValues] = useState(productValues);
  useEffect(() => {
    setFormValues(productValues);
  }, [productValues]);

  const handleFieldChange = (fieldId, event) => {
    setFormValues((formValues) => ({
      ...formValues,
      [fieldId]: event.target.value,
    }));
  };

  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch({
      type: ACTION_TYPES.EDIT_PRODUCT,
      payload: {
        values: formValues,
        index: rowIndex,
      },
    });
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      title={<div className={styles.title}>Edit Product</div>}
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose
      className={styles.modal}
      okButtonProps={{ className: styles.modalBtn }}
      cancelButtonProps={{ className: styles.modalBtn }}
    >
      <div>
        <div className={styles.name}>{productValues.name}</div>
        <div className={styles.modelRow}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Category</div>
            <input
              value={formValues.category}
              onChange={(e) => handleFieldChange("category", e)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Price</div>
            <input
              value={formValues.price}
              onChange={(e) => handleFieldChange("price", e)}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.modelRow}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Quantity</div>
            <input
              value={formValues.quantity}
              onChange={(e) => handleFieldChange("quantity", e)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Value</div>
        <input
              value={formValues.value}
              onChange={(e) => handleFieldChange("value", e)}
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
