import {
  reqCategoryData,
  reqHomeData,
  reqShiWu
} from '../api'

import {
  GETCATEGORYDATA,
  GETHOMEDATA,
  GETSHIWUDATA
} from './mutation-types'

export default {
  async getHomeData({commit},cb){
    const result = await reqHomeData();
    if (result.code===0){
      const home_data = result.data;
      commit(GETHOMEDATA,{home_data})
      typeof cb === 'function' && cb()
    }
  },
  async getShiwuData({commit},cb){
    const result = await reqShiWu();
    if (result.code ===0) {
      const shiwu_data = result.data
      commit (GETSHIWUDATA,{shiwu_data})
      typeof cb === 'function' && cb()
    }
  },
  async getCategoryData({commit},cb){
    const result = await reqCategoryData();
    if (result.code ===0) {
      const category_data = result.data
      commit (GETCATEGORYDATA,{category_data})
      typeof cb === 'function' && cb()
    }
  },

}
