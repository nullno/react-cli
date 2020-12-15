const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const UglifyJsPlugin  = require('uglifyjs-webpack-plugin')

const { CleanWebpackPlugin  } = require('clean-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const autoprefixer = require('autoprefixer');



const cleanWebpack = new CleanWebpackPlugin()


const definePlugin = new webpack.DefinePlugin({
    ENV_PRODUCTION:JSON.stringify(process.env.ENV_PRODUCTION)
})

const uglifyJs = new UglifyJsPlugin();

/*output html*/
const htmlPlugin =  new htmlWebpackPlugin({
       title:'react_test',
       template:path.resolve(__dirname,'./src/index.html'),
    })

/*output css*/
const  MiniCssExtract   =   new MiniCssExtractPlugin({
            filename: './assets/css/[name]-[hash:6].css',
            chunkFilename: '[id].css'
        })

/*output 配置*/
const outputOption = {
        filename: './assets/js/[name]-[hash:6].js',
        path: path.resolve(__dirname, './dist/release-'+process.env.ENV_PRODUCTION)
       }

const webpackConfig  = {
   mode: 'production',
   entry: {
     app: './src/main.js',  //提供约定大于配置，默认./src/index.js 不用配置入口  打包输出文件是‘dist‘
   },
   output: outputOption,
 
   resolve:{
    extensions:['.js','.jsx','.json'],
    alias:{
     //设置别名
     '@':path.join(__dirname,'./src')
     }
   }, 
   optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin()]
    },
   plugins:[
      definePlugin,
      cleanWebpack,
      uglifyJs,
      htmlPlugin,
      MiniCssExtract
   ],
   // 第三方模块配置规则 'style-loader',
   module: {
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/},
            
            {test:/\.ttf|woff|woff2|eot|svg|png|gif|jpg|jpeg$/,use:{
                                                                      loader: 'file-loader',
                                                                      options: {
                                                                        name: '[name]-[hash:6].[ext]',
                                                                        outputPath:'./assets/img/',
                                                                        publicPath:'http://192.168.11.251/2021/react_test/dist/release-beta/assets/img/', // 和设置静态资源cdn路径
                                                                      }
                                                                      }
                                                        },
            
            {test:/\.css$/,use:[
                                // 'style-loader',
                                 MiniCssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader'
                               
                                ]},
            {test:/\.less$/,use:[
                                    // 'style-loader',
                                    MiniCssExtractPlugin.loader,
                                    {loader:'css-loader',
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