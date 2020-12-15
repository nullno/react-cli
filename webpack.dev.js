const path = require('path');
const webpack = require('webpack');


const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin =  new htmlWebpackPlugin({
       title:'react_test',
       template:path.resolve(__dirname,'./src/index.html'),
    })


const definePlugin = new webpack.DefinePlugin({
    ENV_PRODUCTION:JSON.stringify(process.env.ENV_PRODUCTION)
})

const autoprefixer = require('autoprefixer');

const webpackConfig  = {
   mode: 'development',
   entry: {
     app: './src/main.js',  //提供约定大于配置，默认./src/index.js 不用配置入口  打包输出文件是‘dist‘
   },
   output: {
    filename: './assets/js/[name]-[hash:6].js',
    path: path.resolve(__dirname, './dist/release-'+process.env.ENV_PRODUCTION),
   },
   devServer:{  //webpack-dev-server 启动的项目托管到内存中
     host:'127.0.0.1',
   	 disableHostCheck: true,
     https:true,
     compress: true,
     port: 3000,
     open:true,
     proxy: {
     '/test': {
        target: 'https://musicapi.nullno.com',
        changeOrigin: true,
        secure: false,  // 如果是https接口，需要配置这个参数
        pathRewrite: {
            '^/test': ''
        }
       }
     },

   },
   devtool: 'inline-source-map',

   resolve:{
    extensions:['.js','.jsx','.json'],
    alias:{
     //设置别名
     '@':path.join(__dirname,'./src')
     }
   }, 
   plugins:[
      htmlPlugin,
      definePlugin
   ],
   // 第三方模块配置规则 'style-loader',
   module: {
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/},
            
            {test:/\.ttf|woff|woff2|eot|svg|png|gif|jpg|jpeg$/,use:{
                                                                      loader: 'file-loader',
                                                                      options: {
                                                                        name: './assets/img/[name].[ext]',
                                                                      }
                                                                      }
                                                        },
            
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},

            {test:/\.less$/,use:['style-loader',{loader:'css-loader',
                                                       options:{
                                                        importLoaders: 1,
                                                        modules:{
                                                          localIdentName:'[name]-[local]-[hash:5]'
                                                        
                                                        }
                                                        
                                                       }
                                                     },
                                                     'postcss-loader',
                                                     'less-loader',
                                                     ],
                                                     }
        ],
    }
  
};


module.exports = webpackConfig;