// 引入dotenv,它将环境变量从文件加载到 process.env,需要在根目录创建.env文件来配置，变量名字：变量值
const DotEnv = require('dotenv')
DotEnv.config()

module.exports = process.env
