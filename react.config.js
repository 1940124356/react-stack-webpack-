//webpack是基于node.js环境

//引入node.js中的path模块
const path = require('path')
//引入plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    //入口:指定webpack打包活本地服务运行时的程序入口文件
    entry: path.resolve(__dirname,'./src/main.js'), //__dirname指的是webpack所处的当前文件夹的路径,从D盘一层一层往下找
    //出口:打包之后，打包的结果放在哪里 dist
    output:{
        filename:'bundle.js',    //打包成一捆js代码
        path:path.resolve(__dirname,'dist') //打包完成要放在哪个路径，这里path只能写绝对路径
    },
    //plugins:用于扩展功能
    plugins:[
        new HtmlWebpackPlugin({
            //指定你想用哪一个html模板来进行打包
            template:path.resolve(__dirname,'./public/index.html'),
            //动态的来指定最终打包完成之后index这个模板的标题
            title:'我的',
            //index打包完成之后html要不要改名字
            // filename:'demo.html'
        }),
        new CleanWebpackPlugin(),
        //用于热更新功能
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    //loaders:用于对代码中各种文件进行编译转换，目标是转换浏览器能够识别的代码
    module:{
        rules:[
            {test:/\.(css|.scss)/,use:['style-loader','css-loader','sass-loader']},
            { test: /\.js$/, exclude: /node_modules/,  use: ['babel-loader']}
        ]
    },
    devServer:{
        port:'8080',        //指定端口
        open:true,          //自动打开
        contentBase:path.resolve(__dirname,'public'),     //服务器的静态资源目录,这里得使用绝对路径
        hot: true,          //开启热更新功能
    }
}
