import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from '@/store/mutations'
import * as actions from '@/store/actions'

Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({ state, mutations, actions })

export default store
