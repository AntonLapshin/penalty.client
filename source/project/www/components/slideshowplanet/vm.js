define([
    'ko',
    'text!./view.html',
    'plugins/component',
], function (ko, html, component) {

    var _viewModel = {

        test: function () {
            this.show();
        },

        click: function () {
            var win = window.open('http://slideshowplanet.com/ru/landing', '_blank');
            win.focus();
        },

        show: function (last) {
            this.isVisible(true);
        },

    };

    return component.add(_viewModel, html, 'slideshowplanet');
});