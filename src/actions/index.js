
import 'babel-polyfill';

export const fetchData = () => async(dispatch) => {
  return Promise.resolve(
    dispatch({
      type: "FETCH_DATA",
      payload: {
        data: {},
        success: true
      }
    })
  );
};
