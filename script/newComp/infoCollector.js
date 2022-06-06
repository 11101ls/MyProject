/*
 * @Author: ls
 * @Date: 2022-05-31 16:18:18
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 16:27:16
 * @Description: 请填写简介
 */

const inquirer = require( 'inquirer' )
const fs = require( 'fs' )
const { resolve } = require( 'path' )
const listFilePath = '../../packages/list.json'
module.exports = async () => {
  const meta = await inquirer.prompt( [
    {
      type: 'input',
      message: '请输入路由路径：',
      name: 'compName',
    },
    {
      type: 'input',
      message: '标题名称：',
      name: 'compZhName'
    }, {
      type: 'list',
      name: 'title',
      message: '所属父级标题',
      choices: [ '边框/背景/渐变', '形状', '视觉效果', '用户体验', '结构布局', '动画', '技巧', '其他' ],
    }
  ] )
  return meta
}