import api from 'apis/index';
import statusCodes from 'constants/statusCodes';

// eslint-disable-next-line consistent-return
export const getQuiz = async (params) => {
  try {
    const response = await api({
      method: 'GET',
      url: 'api.php',
      params,
    });

    const { status, data } = response;
    if (status === statusCodes.OK) {
      return JSON.parse(JSON.stringify(data)).results;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
