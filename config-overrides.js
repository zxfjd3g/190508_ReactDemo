const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 配置babel-plugin-import: 
  fixBabelImports('import', {
    libraryName: 'antd', // 针对antd进行按需打包
    libraryDirectory: 'es', // 去es文件夹对应的组件进行打包
    // style: 'css',  // 自动打包组件对应的css样式
    style: true,  // 加载less进行重新编译打包
  }),

  // 添加less的配置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }, // 指定主体颜色为绿色
  }),
);