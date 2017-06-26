/**
 * Created by Administrator on 2017/3/29.
 */
define(['zepto'], function ($) {

    /*定义主对象*/
    var gber = {};
    /*变量*/
    gber.data = {};
    /*方法*/
    gber.fn = {};

    /*index tab3*/

    /*tablist*/
    gber.data.ix_tab_list3 = $('.ix-layout-3 .ix-tab-list3 li');
    gber.data.ix_tab_dom3 = $('.ix-layout-3 .ix-tab-dom3');

    gber.data.tab = function (tab_e, tab_dom) {
        tab_e.on('click', function () {
            var idx = $(this).index();
            tab_e.removeClass('active');
            $(this).addClass('active');
            tab_dom.removeClass('active');
            tab_dom.eq(idx).addClass('active');
        })
    };

    gber.data.tab(gber.data.ix_tab_list3, gber.data.ix_tab_dom3);


    /*domain_name.html*/
    /*域名点击按钮*/
    gber.data.de_name_btn = $('.search-box .name-btn');
    /*内容显示按钮*/
    gber.data.domain_name_list = $('.domain-name-list');
    /*关闭按钮*/
    gber.data.de_list_close = $('.domain-name-list .de-list-close');

    gber.data.de_show = function (dom_e, dom_close) {

        dom_e.on('click', function () {
            gber.data.domain_name_list.addClass('active')
        });

        dom_close.on('tap', function () {
            gber.data.domain_name_list.removeClass('active')
        });

        gber.data.domain_name_list.find('li').on('click', function () {
            gber.data.de_name_btn.text($(this).text());
            gber.data.domain_name_list.removeClass('active')
        })

        /*域名搜索*/
        gber.data.button_btn = $('.search-box .button-btn');

        gber.data.button_btn.on('click', function () {
            window.location = './domain_name_view.html'
        })

    };
    gber.data.de_show(gber.data.de_name_btn, gber.data.de_list_close);


    /*domain_name_view.html*/
    gber.data.name_list = $('.dw-layout-1 .name-list.active');
    gber.data.foot_domain_name = $('.dw-layout-2.foot-domain-name');
    gber.fn.domain_name_view = function (dom_name_list_ac) {


        dom_name_list_ac.on('click', function () {

            if ($(this).find('.list-radio.active').length == 1) {
                $(this).find('.list-radio').removeClass('active')
            } else {
                $(this).find('.list-radio').addClass('active')
            }

            if (gber.data.name_list.find('.list-radio.active').length > 0) {
                gber.data.foot_domain_name.find('p span').text(gber.data.name_list.find('.list-radio.active').length);
                gber.data.foot_domain_name.show()
            } else {
                gber.data.foot_domain_name.hide()
            }

        });


        gber.data.foot_domain_name.find('button').on('click', function () {
            window.location = './domain_name_holder.html'
        })

    };
    gber.fn.domain_name_view(gber.data.name_list)


    /*domain_name_holder.html*/
    gber.data.dr_foot = $('.dr-foot-domain-name')
    gber.fn.domain_name_holder = function () {

        gber.data.dr_foot.find('button').on('click', function () {
            window.location = './domain_name_order.html'
        })
    };

    gber.fn.domain_name_holder()


    /*domain_name_order.html*/
    gber.data.der_foot = $('.der-footer-view')
    gber.fn.domain_name_order = function () {

        gber.data.der_foot.find('button').on('click', function () {
            window.location = './domain_name_pay.html'
        })
    };

    gber.fn.domain_name_order()


    /*virtual_host.html*/

    gber.data.vt_tab_list1 = $('.vt-layout-1 .vt-tab-list1 li');
    gber.data.vt_tab_dom1 = $('.vt-layout-1 .vt-tab-dom1');
    gber.data.tab(gber.data.vt_tab_list1, gber.data.vt_tab_dom1);

    gber.data.vt_tab_list3 = $('.vt-layout-3 .vt-tab-list3 li');
    gber.data.vt_tab_dom3 = $('.vt-layout-3 .vt-tab-dom3');
    gber.data.tab(gber.data.vt_tab_list3, gber.data.vt_tab_dom3);

    /*q_email.html*/
    gber.data.ql_tab_list3 = $('.ql-layout-3 .ql-tab-list3 li');
    gber.data.ql_tab_dom3 = $('.ql-layout-3 .ql-tab-dom3');
    gber.data.tab(gber.data.ql_tab_list3, gber.data.ql_tab_dom3);
    /*对外输出的方法*/
    return {
        nab_show: gber.fn.nab_show
    }


});