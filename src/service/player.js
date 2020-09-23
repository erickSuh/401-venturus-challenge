import Api from './api';

const player = {
  getStatistic: async () => {
    try {
      const resp = await Api.get('/player');
      if (resp) {
        return resp.data;
      }
      return [];
    } catch (e) {
      // Implement error state
      console.log(e.message);
      return [];
    }
  },
};

export default player;
