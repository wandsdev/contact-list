const state = {
  contact: {},
};

const mutations = {
  SET_CONTACT(_state, payload) {
    _state.contact = payload;
  },
};

const actions = {
  setContact(context, payload) {
    context.commit('SET_CONTACT', payload);
  },
};

const getters = {
  getContact: (_state) => _state.contact,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
