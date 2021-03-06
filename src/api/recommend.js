import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 394287122,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    loginUin: 394287122,
    hostUin: '0',
    sin: '0',
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  // qq音乐对 referer 进行校验，要使用代理
  const url = '/api/getCdInfo'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
  // const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
  //
  // const data = Object.assign({}, commonParams, {
  //   g_tk: '244721204',
  //   disstid: dissid,
  //   type: 1,
  //   json: 1,
  //   utf8: 1,
  //   onlysong: '0',
  //   platform: 'yqq',
  //   loginUin: '394287122',
  //   needNewCode: '0',
  //   hostUin: '0'
  // });
  //
  // return jsonp(url, data, options);
}
