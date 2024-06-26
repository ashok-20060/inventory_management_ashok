// Icons
import { FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

// Constants
import ACTION_TYPES from '../../../../actions/vehicleInventory.actionTypes';


const Actions = ({
  setModalVisible,
  setProductValues,
  setRowIndex,
  rowData,
  index,
  isUserView,
  isEditDisabled,
}) => {
  const onEditClick = (rowIndex) => {
    setModalVisible(true);
    setProductValues(rowData);
    setRowIndex(rowIndex);
  };

  const dispatch = useDispatch();
  const handleDisableClick = rowIndex => {
    dispatch({
        type: ACTION_TYPES.DISABLE_PRODUCT,
        payload: {
            index: rowIndex,
        }
    })
}

  const handleDeleteClick = rowIndex => {
    dispatch({
        type: ACTION_TYPES.DELETE_PRODUCT,
        payload: {
            index: rowIndex,
        }
    })
  }

  return (
    <>
      <button disabled={isUserView || isEditDisabled} onClick={() => onEditClick(index)}>
        <FaEdit />
      </button>
      <button disabled={isUserView} onClick={() => handleDisableClick(index)}>
        <FaEye />
      </button>
      <button disabled={isUserView} onClick={() => handleDeleteClick(index)}>
        <FaTrashAlt />
      </button>
    </>
  );
};

export default Actions