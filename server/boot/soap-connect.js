/**
 * @author qianqing
 * @create by 16-3-1
 * @description
 */
module.exports = function (app) {
  app.datasources.ShoppingSoap.once('connected', function () {
    console.log('Shopping interface is connected');
    app.datasources.ShoppingSoap.createModel('Shopping', {});
  });
  app.datasources.MKTSoap.once('connected', function () {
    console.log('MTK interface is connected');
    app.datasources.MKTSoap.createModel('MKT', {});
  });
};
