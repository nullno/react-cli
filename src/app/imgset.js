/*
 *图片管理 Imgset
 */


const Imgset = {};

const requireComponent = require.context(
  '@/skin/img/',
  true,
  /\.png|jpg|jpeg|gif|svg$/
)

requireComponent.keys().forEach((fileName) => {

   const componentConfig = requireComponent(fileName);

   const strFileName = fileName.replace(/(.*\/)*([^.]+).*/ig,"$2");
   const strFileExt =  fileName.replace(/.+\./,'');
   Imgset[strFileName+'_'+strFileExt] = componentConfig.default;
})


console.log('图片地址',Imgset)


export default Imgset