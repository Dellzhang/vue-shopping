
export const state = ()=> ({
  imgList: ['http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg','http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg','http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'] ,
  menu: [],
  all: {},
  Hotlist: [],
  Cominglist: [],
  Recommend: {},
  Cheap:{},
  Nav: {},
  city: '郑州',
  bol: false,
})

export  const mutations = {
  setMenu (state,val){
    state.menu = val
  },
  setShow (state,val){
    state.all = val
  },
  setHotFilms (state,val){
    let hot = val.hot
    state.Hotlist.push(hot.slice(0,5)),
    state.Hotlist.push( hot.slice(5))
  },
  setComingFilms( state,val){
    let hot = val.coming
    state.Cominglist.push(hot.slice(0,5)),
    state.Cominglist.push( hot.slice(5))
  },
  setRecommend (state,val){
    state.Recommend = val
  },
  setCheap (state,val) {
    state.Cheap = val
  },
  setNav(state,val) {
    state.Nav = val
  },
  changeCity(state,val){
    state.city = val;
    try {
      localStorage.city = val
    } catch(e){}
  },
  // 显示地图
  showMap (state,val) {
    state.bol = val;
  },
  // 关闭地图
  closeMap (state,val){
    state.bol = val
  }
}

export const actions = {
  setMenu ({commit},menu){
    commit('setMenu',menu)
  },
  setShow ({commit},all){
    commit('setShow',all)
  },
  setHotFilms ({commit},HotFilms){
    commit('setHotFilms',HotFilms)
  },
  setComingFilms ({commit},ComingFilms){
    commit('setComingFilms',ComingFilms)
  },
  setRecommend ({commit},Recommend) {
    commit('setRecommend',Recommend)
  },
  setCheap ({commit},Cheap){
    commit('setCheap',Cheap)
  },
  setNav ({commit},Nav) {
    commit('setNav',Nav)
  },
}
