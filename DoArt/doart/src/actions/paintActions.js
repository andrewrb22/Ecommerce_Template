import axios from 'axios';
import { PAINT_LIST_REQUEST, PAINT_LIST_SUCCESS, PAINT_LIST_FAIL, PAINT_DETAILS_REQUEST, PAINT_DETAILS_SUCCESS, PAINT_DETAILS_FAIL } from '../constants/paintConstants'


const listPaintings = () => async (dispatch) => {
    try {
        dispatch({ type: PAINT_LIST_REQUEST });
        const { data } = await axios.get("/api/paint");
        dispatch({ type: PAINT_LIST_SUCCESS, payload: data })

    }
    catch (error) {
        dispatch({ type: PAINT_LIST_FAIL, payload: error.message })
    }


}

const detailsPaint = (paintId) => async (dispatch) => {
    try {
        dispatch({ type: PAINT_DETAILS_REQUEST, payload: paintId });
        const { data } = await axios.get('/api/paint/' + paintId);
        dispatch({ type: PAINT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PAINT_DETAILS_FAIL, payload: error.message })
    }
}

export { listPaintings, detailsPaint } 