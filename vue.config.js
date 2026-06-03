module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-textellipsis-zzc/" : "/",
  devServer: {
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: false,
    historyApiFallback: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
};