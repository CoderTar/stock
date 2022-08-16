
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/money/money","pages/business/business","pages/home/home","pages/other/realName/realName","pages/other/bindingCard/bindingCard","pages/other/updatePwd/updatePwd","pages/other/withDrawal/withDrawal","pages/other/register/register","pages/other/recharge/recharge","pages/other/addMoney/addMoney","pages/other/aboutUs/aboutUs","pages/other/useLogin/useLogin","pages/other/sharesDetail/sharesDetail","components/sellOut/sellOut","components/pullOrder/pullOrder","pages/other/assetsDetail/assetsDetail","pages/other/strategyMoney/strategyMoney","pages/other/InterRotation/InterRotation","pages/other/legalDescription/legalDescription","pages/other/userHelp/userHelp","pages/other/onlineCustome/onlineCustome"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#d81e06","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#d81e06","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabar/index.png","selectedIconPath":"static/tabar/index_a.png","text":"首页"},{"pagePath":"pages/money/money","iconPath":"static/tabar/money.png","selectedIconPath":"static/tabar/money_a.png","text":"行情"},{"pagePath":"pages/business/business","iconPath":"static/tabar/business.png","selectedIconPath":"static/tabar/business_a.png","text":"交易"},{"pagePath":"pages/home/home","iconPath":"static/tabar/home.png","selectedIconPath":"static/tabar/home_a.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"fakePlate","compilerVersion":"3.4.15","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationStyle":"custom","titleView":false}},{"path":"/pages/money/money","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","titleView":false}},{"path":"/pages/business/business","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"交易","enablePullDownRefresh":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/other/realName/realName","meta":{},"window":{"navigationBarTitleText":"身份绑定","enablePullDownRefresh":false}},{"path":"/pages/other/bindingCard/bindingCard","meta":{},"window":{"navigationBarTitleText":"银行卡","enablePullDownRefresh":false}},{"path":"/pages/other/updatePwd/updatePwd","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false}},{"path":"/pages/other/withDrawal/withDrawal","meta":{},"window":{"navigationBarTitleText":"提现","enablePullDownRefresh":false}},{"path":"/pages/other/register/register","meta":{},"window":{"navigationBarTitleText":"注册页面","enablePullDownRefresh":false}},{"path":"/pages/other/recharge/recharge","meta":{},"window":{"navigationBarTitleText":"入金","enablePullDownRefresh":false}},{"path":"/pages/other/addMoney/addMoney","meta":{},"window":{"navigationBarTitleText":"充值","enablePullDownRefresh":false}},{"path":"/pages/other/aboutUs/aboutUs","meta":{},"window":{"navigationBarTitleText":"关于我们","enablePullDownRefresh":false}},{"path":"/pages/other/useLogin/useLogin","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/other/sharesDetail/sharesDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/sellOut/sellOut","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/pullOrder/pullOrder","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/other/assetsDetail/assetsDetail","meta":{},"window":{"navigationBarTitleText":"我的资产","enablePullDownRefresh":false}},{"path":"/pages/other/strategyMoney/strategyMoney","meta":{},"window":{"navigationBarTitleText":"我的策略金","enablePullDownRefresh":false}},{"path":"/pages/other/InterRotation/InterRotation","meta":{},"window":{"navigationBarTitleText":"资金转账","enablePullDownRefresh":false}},{"path":"/pages/other/legalDescription/legalDescription","meta":{},"window":{"navigationBarTitleText":"法律申明","enablePullDownRefresh":false}},{"path":"/pages/other/userHelp/userHelp","meta":{},"window":{"navigationBarTitleText":"新手帮助","enablePullDownRefresh":false}},{"path":"/pages/other/onlineCustome/onlineCustome","meta":{},"window":{"navigationBarTitleText":"在线客服","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
