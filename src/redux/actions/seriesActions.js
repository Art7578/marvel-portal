import { getAllSeries } from "../../service";

// Действия для запроса серий
export const GET_ALL_SERIES_REQUEST = 'GET_ALL_SERIES_REQUEST';
export const GET_ALL_SERIES_SUCCESS = 'GET_ALL_SERIES_SUCCESS';
export const GET_ALL_SERIES_FAILURE = 'GET_ALL_SERIES_FAILURE';

export const getAllSeriesRequest = () => ({
  type: GET_ALL_SERIES_REQUEST,
});

export const getAllSeriesSuccess = (series) => ({
  type: GET_ALL_SERIES_SUCCESS,
  payload: series,
});

export const getAllSeriesFailure = (error) => ({
  type: GET_ALL_SERIES_FAILURE,
  payload: error,
});

// Асинхронное действие для получения всех серий
export const fetchAllSeries = (offset) => {
  return async (dispatch) => {
    dispatch(getAllSeriesRequest());
    try {
      const series = await getAllSeries(offset);
      dispatch(getAllSeriesSuccess(series));
    } catch (error) {
      dispatch(getAllSeriesFailure(error));
    }
  };
};