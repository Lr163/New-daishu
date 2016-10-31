function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    $urlRouterProvider.otherwise('/start');
    $stateProvider
            .state('start',{
              url: '/start',
              templateUrl:'src/main.html'
            })
            .state('shenqing',{
              url: '/shenqing',
              templateUrl:'src/shouye/shenqing.html'
            })
            .state('wsshenqing',{
              url: '/wsshenqing',
              templateUrl:'src/shouye/wsshenqing.html'
            })
            .state('bcziliao',{
              url: '/bcziliao',
              templateUrl:'src/shouye/bcziliao.html'
            })
            .state('qrchanpin',{
              url: '/qrchanpin',
              templateUrl:'src/shouye/qrchanpin.html'
            })
            .state('sqchenggong',{
              url: '/sqchenggong',
              templateUrl:'src/shouye/sqchenggong.html'
            })
            //我的借款
            .state('wdjiekuan',{
              url: '/wdjiekuan',
              templateUrl:'src/wdjiekuan.html'
            })
            .state('wdjiekuan.w1',{
              url: '/w1',
              templateUrl:'src/w1.html'
            })
            .state('wdjiekuan.w2',{
              url: '/w2',
              templateUrl:'src/w2.html'
            })
            .state('wdjiekuan.w3',{
              url: '/w3',
              templateUrl:'src/w3.html'
            })
            //我的账户
            .state('wdzhanghu',{
              url: '/wdzhanghu',
              templateUrl:'src/wdzhanghu.html'
            })
            .state('tixian',{
              url: '/tixian',
              templateUrl:'src/tixian.html'
            })
            .state('jjlianxiren',{
              url: '/jjlianxiren',
              templateUrl:'src/jjlianxiren.html'
            })
            //更多
            .state('gengduo',{
              url: '/gengduo',
              templateUrl:'src/gengduo.html'
            })
            .state('grxx',{
              url: '/grxx',
              templateUrl:'src/gengduo/grxinxi.html'
            })
            .state('gywm',{
              url: '/gywm',
              templateUrl:'src/gengduo/gywomen.html'
            })
            //登录
            .state('denglu',{
              url: '/denglu',
              templateUrl:'src/denglu.html'
            })
            //注册
            .state('zhuce',{
              url: '/zhuce',
              templateUrl:'src/zhuce.html',
              controller:"myCtrl",
            })
            //计算器
            .state('jisuanqi',{
              url: '/jisuanqi',
              templateUrl:'src/jisuanqi.html'
            })
            .state('jssuccess',{
              url: '/jssuccess',
              templateUrl:'src/jssuccess.html'
            })
            //借款产品
            .state('jk1',{
              url: '/jk1',
              templateUrl:'src/jk/jk1.html'
            })
            .state('jk2',{
              url: '/jk2',
              templateUrl:'src/jk/jk2.html'
            })
            .state('jk3',{
              url: '/jk3',
              templateUrl:'src/jk/jk3.html'
            })
            .state('jk4',{
              url: '/jk4',
              templateUrl:'src/jk/jk4.html'
            })
            .state('jk5',{
              url: '/jk5',
              templateUrl:'src/jk/jk5.html'
            })
            .state('jk6',{
              url: '/jk6',
              templateUrl:'src/jk/jk6.html'
            })
            .state('jk7',{
              url: '/jk7',
              templateUrl:'src/jk/jk7.html'
            })
            .state('jk8',{
              url: '/jk8',
              templateUrl:'src/jk/jk8.html'
            })
            .state('jk9',{
              url: '/jk9',
              templateUrl:'src/jk/jk9.html'
            })
            //常见问题
            .state('cjwenti',{
              url: '/cjwenti',
              templateUrl:'src/cjwenti.html'
            })
}
angular.module('myapp')
       .config(config) 