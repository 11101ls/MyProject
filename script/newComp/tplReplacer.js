/*
 * @Author: ls
 * @Date: 2022-05-31 16:28:32
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 17:12:09
 * @Description: 请填写简介
 */
const fs = require( 'fs-extra' )
const handlebars = require( 'handlebars' )
const { resolve } = require( 'path' )

const getTplFilePath = ( meta ) => ( {
  readme: {
    from: './.template/docs/README.md.tpl',
    to: `../../src/views/demo/cssDemo/packages/${ meta.compName }/docs/README.md`
  },
  demo: {
    from: './.template/docs/demo.vue.tpl',
    to: `../../src/views/demo/cssDemo/packages/${ meta.compName }/docs/demo.vue`
  }
} )
const compFilesTplReplacer = ( meta ) => {
  const filePaths = getTplFilePath( meta )
  Object.keys( filePaths ).forEach( key => {
    console.log( filePaths[ key ].from, "form" );
    const fileTpl = fs.readFileSync( resolve( __dirname, filePaths[ key ].from ), 'utf-8' )
    const fileContent = handlebars.compile( fileTpl )( meta )
    fs.outputFile( resolve( __dirname, filePaths[ key ].to ), fileContent, err => {
      if ( err ) console.log( err )
    } )
  } )
}
// 更新 router.ts
const routerTplReplacer = ( listFileContent ) => {

  const routerFileFrom = './.template/router.ts.tpl'
  const routerFileTo = '../../src/router/modules/cssdemo.ts'
  const routerFileTpl = fs.readFileSync( resolve( __dirname, routerFileFrom ), 'utf-8' )
  const routerMeta = {

    routes: listFileContent.map( comp => {
      return `{
      name: 'css-${ comp.compName }',
      path: '/demo/cssDemo/${ comp.compName }',
      component: () => import('@/views/demo/cssDemo/packages/${ comp.compName }/docs/README.md'),
    }`
    } )
  }
  const routerFileContent = handlebars.compile( routerFileTpl, { noEscape: true } )( routerMeta )
  fs.outputFile( resolve( __dirname, routerFileTo ), routerFileContent, err => {
    if ( err ) console.log( err )
  } )
}
// 读取 list.json 并更新
const listJsonTplReplacer = ( meta ) => {
  const listFilePath = '../../src/views/demo/cssDemo/packages/list.json'
  const listFileTpl = fs.readFileSync( resolve( __dirname, listFilePath ), 'utf-8' )
  const listFileContent = JSON.parse( listFileTpl )
  console.log( listFileContent, "读取文件" );
  let metaTitle = meta.title
  listFileContent[ metaTitle ].push( meta )
  const newListFileContentFile = JSON.stringify( listFileContent, null, 2 )
  fs.writeFile( resolve( __dirname, listFilePath ), newListFileContentFile, err => {
    if ( err ) console.log( err )
  } )
  return listFileContent
}
const formatData = ( data ) => {
  const listFileContent = []
  for ( const key in data ) {
    data[ key ].map( item => {
      listFileContent.push( item )
    } )
  }
  return listFileContent
}
module.exports = ( meta ) => {
  compFilesTplReplacer( meta )
  const routerData = listJsonTplReplacer( meta )
  const listFileContent = formatData( routerData )
  routerTplReplacer( listFileContent )

  console.log( `组件新建完毕，请前往/demo/cssDemo/packages/${ meta.compName } 目录进行开发` );
}