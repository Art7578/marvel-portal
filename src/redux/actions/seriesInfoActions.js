import { getSeriesInfo } from "../../service";

export const GET_SERIES_INFO_REQUEST = 'GET_SERIES_INFO_REQUEST';
export const GET_SERIES_INFO_SUCCESS = 'GET_SERIES_INFO_SUCCESS';
export const GET_SERIES_INFO_FAILURE = 'GET_SERIES_INFO_FAILURE';

const getSeriesInfoRequest = () => ({
  type: GET_SERIES_INFO_REQUEST,
});

const getSeriesInfoSuccess = (seriesInfo) => ({
  type: GET_SERIES_INFO_SUCCESS,
  payload: seriesInfo,
});

const getSeriesInfoFailure = (error) => ({
  type: GET_SERIES_INFO_FAILURE,
  payload: error,
});

export const fetchSeriesInfo = (seriesId) => {
  return async (dispatch) => {
    dispatch(getSeriesInfoRequest());
    try {
      const seriesInfo = await getSeriesInfo(seriesId);
      dispatch(getSeriesInfoSuccess(seriesInfo));
    } catch (error) {
      dispatch(getSeriesInfoFailure(error));
    }
  };
};