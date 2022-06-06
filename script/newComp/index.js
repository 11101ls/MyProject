/*
 * @Author: ls
 * @Date: 2022-05-31 16:17:18
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 17:14:30
 * @Description: 请填写简介
 */
// * 命令行交互创建cssdemo markdown模板
// import { addROute } from 'vue-router'
const infoCollector = require( './infoCollector' )
const tplReplacer = require( './tplReplacer' )
async function run () {
  const meta = await infoCollector()
  tplReplacer( meta )
}

run()