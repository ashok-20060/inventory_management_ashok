// Constants
import ACTION_TYPES from '../../actions/vehicleInventory.actionTypes';

export const fetchListData = (dispatch, setIsLoading) => {
  fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((listData) => {
      dispatch({
        type: ACTION_TYPES.SAVE_LIST,
        payload: {
          listData,
        },
      });
      setIsLoading(false);
    })
    .catch((error) => alert(error));
};
