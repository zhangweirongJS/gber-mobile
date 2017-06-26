/**
 * Created by Administrator on 2017/3/28.
 */
define(['zepto', 'swiper'], function ($, Swiper) {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000,//可选选项，自动滑动
        // 如果需要分页器
        pagination: '.swiper-pagination',
    })

})