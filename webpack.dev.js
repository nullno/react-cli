const path = require('path');
const webpack = require('webpack');


const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin =  new htmlWebpackPlugin({
       title:'iotm',
       template:path.resolve(__dirname,'./src/index.html'),
    })


const definePlugin = new webpack.DefinePlugin({
    ENV_PRODUCTION:JSON.stringify(process.env.ENV_PRODUCTION)
})

//开启browserHistory
const browserHistory = false;
const publicPath = browserHistory?'/':'';  
const assetsPath = browserHistory?'':'./';        
     

const autoprefixer = require('autoprefixer');
  
const webpackConfig  = {
   mode: 'development',
   entry: {
     app: './src/main.js',  //提供约定大于配置，默认./src/index.js 不用配置入口  打包输出文件是‘dist‘
   },
   output: {
    filename: assetsPath+'assets/js/[name]-[hash:6].js',
    path: path.resolve(__dirname, './dist/release-'+process.env.ENV_PRODUCTION),
    publicPath
   },
   devServer:{  //webpack-dev-server 启动的项目托管到内存中
     host:'0.0.0.0',
   	 disableHostCheck: true,
     historyApiFallback:browserHistory,// 开启BrowserRouter模式
     //https:true,
     compress: true,
     port: 3100,
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
   target:'web',
   resolve:{
    extensions:['.js','.jsx','.json'],
    alias:{
     //设置别名
     '@':path.join(__dirname,'./src')
     }
   }, 
    optimization: {
        splitChunks:{//可以在这里直接设置抽离代码的参数，最后将符合条件的代码打包至一个公共文件
            cacheGroups:{//设置缓存组用来抽取满足不同规则的chunk,下面以生成common、vender为例
                  vendors: { // 基本框架
                     chunks: 'all',
                     test: /node_modules/,
                     priority: 100,
                     name: 'chunk-vendors',
                  },
                  commons: { // 其他同步加载公共包
                    chunks: 'all',
                    minChunks: 2,
                    name: 'commons',
                    priority: 80,
                   },
            }
        }
    },
   plugins:[
      htmlPlugin,
      definePlugin
   ],
   // 第三方模块配置规则 'style-loader',
   module: {
        rules: [
          {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/},
            
          {test:/\.(ttf|woff|woff2|eot)$/,use:{
                                                loader: 'file-loader',
                                                options: {name: assetsPath+'assets/font/[name].[ext]'}
                                                }
                                             },
           
            {test:/\.(svg|png|gif|jpg|jpeg)$/,use:{
                                                    loader: 'file-loader',
                                                    options: { name: assetsPath+'assets/img/[name].[ext]'}
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
    },
  
};


module.exports = webpackConfig;