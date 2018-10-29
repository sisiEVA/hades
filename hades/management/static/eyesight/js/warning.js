// 配置
// api: 接口地址
// interval: 数据刷新时间间隔 ms
window.MOBIKE_SECURITY_COMMON = window.MOBIKE_SECURITY_COMMON || {
    warning: {
        // api: 'mock/warning.json',
        api: '/warning/info.do/',
        // 30s
        interval: 30 * 1000
    }
};

// ready
$(document).ready(function () {
    // view
    var _view = {
        $warning: null,
        $warningTitle: null,
        $warningContent: null,

        // 初始化
        init: function () {
            _view.update();
        },

        // update
        update: function () {
            _view.updateWarning();
        },

        // warning
        updateWarning: function() {
            var self = this;
            if (!this.$warning) {
                var htmlArr = [
                    '<div id="j-warning-layer" class="warning-layer">',
                    '<div class="warning-box">',
                    '<div class="warning-title" id="j-warning-title"></div>',
                    '<div class="warning-content" id="j-warning-content"></div>',
                    '</div></div>'
                ];
                $('body').append(htmlArr.join(''));
            }
            _data.fetchData(window.MOBIKE_SECURITY_COMMON.warning.api, function (data) {
                self._updateWarningData(data);
            });
        },

        _updateWarningData: function(data) {
            var visibleClass = 'warning-show';
            var self = this;
            this.$warning = this.$warning || $('#j-warning-layer');
            this.$warningTitle = this.$warningTitle || $('#j-warning-title');
            this.$warningContent = this.$warningContent || $('#j-warning-content');
            this.$warningTitle.html(data.title);
            this.$warningContent.html(data.content);

            // show warning
            this.$warning.addClass(visibleClass);

            // 隐藏警告
            setTimeout(function () {
                console.log(self.$warning);
                self.$warning.removeClass(visibleClass);
            }, data.showTime || 60000);

            // 自动更新数据
            setTimeout(function () {
                _view.updateWarning();
            }, window.MOBIKE_SECURITY_COMMON.warning.interval);
        }
    };

    // 获取数据
    var _data = {
        fetchData: function (url, callback) {
            $.get(url).done(function (data) {
                if (typeof callback === 'function' && data.status === 200 && data.data) {
                    callback(data.data);
                }
            });
        }
    };

    // init
    _view.init();
});
