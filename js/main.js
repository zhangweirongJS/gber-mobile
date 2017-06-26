/**
 * Created by Administrator on 2017/3/28.
 */
/*主模块文件*/
require.config({
    paths: {
        "zepto": "lib/zepto.min",
        "swiper": "lib/swiper.jquery.min",
        "public": "module/public",
        "public_one": "module/public_one"
    },
    shim: {
        "swiper": {
            deps: ['zepto'],
            exports: "Swiper"
        }
    }
});


require(['public', 'public_one']);
