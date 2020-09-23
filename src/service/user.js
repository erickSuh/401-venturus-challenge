import Api from './api';

const user = {
  getUser: async (id) => {
    try {
      const resp = await Api.get(`/users/${id}`);
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
  patchUser: async (id, data) => {
    try {
      const resp = await Api.patch(`/users/${id}`, data);
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

export default user;
