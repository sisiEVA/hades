// 配置
// api: 接口地址
// interval: 数据刷新时间间隔 ms
// animationInterval: 动画重载间隔 ms
window.MOBIKE_PUBLIC_OPINION = window.MOBIKE_PUBLIC_OPINION || {
    count: {
        //api: '/static/eyesight/mock/public-opinion/count.json',
        api: 'count.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    type: {
        //api: '/static/eyesight/mock/public-opinion/type.json',
        api: 'type.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    primary: {
        //api: '/static/eyesight/mock/public-opinion/primary.json',
        api: 'primary.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    trend: {
        //api: '/static/eyesight/mock/public-opinion/trend.json',
        api: 'trend.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    channel: {
        //api: '/static/eyesight/mock/public-opinion/channel.json',
        api: 'channel.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    hot: {
        //api: '/static/eyesight/mock/public-opinion/hot.json',
        api: 'hot.do/',
        interval: 10000
    },
    news: {
        //api: '/static/eyesight/mock/public-opinion/news.json',
        api: 'news.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    }
};

// ready
$(document).ready(function () {
    // 接口、图标配置
    var config = {
        trend: {
            option: {
                grid: {
                    top: '10%',
                    left: '2%',
                    right: '3%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        show: true,
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2e86a4'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#0f3c60',
                                opacity: 0.5
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2e87a5'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    }
                ],
                series: [
                    {
                        type: 'line',
                        data: [],
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                color: '#01b4c8',
                                width: 1
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#01b4c8'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(1, 180, 200, 0.8)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(1, 180, 200, 0)'
                                    }],
                                }
                            }
                        }
                    },
                    {
                        type: 'line',
                        data: [],
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                color: '#178df4',
                                width: 1
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#178df4'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(23, 141, 244, 0.8)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(23, 141, 244, 0)'
                                    }],
                                }
                            }
                        }
                    }
                ]
            }
        },
        hot: {
            settings: {
                entries: [],
                width: '100%',
                height: '100%',
                radius: '90%',
                radiusMin: 75,
                bgDraw: false,
                opacityOver: 1.00,
                opacityOut: 0.2,
                opacitySpeed: 6,
                fov: 800,
                speed: 0.2,
                fontSize: '14',
                fontColor: '#01b4c8'
            }
        }
    };

    // view
    var _view = {
        $countCirclePositiveBg: null,
        $countCircleNegativeBg: null,
        $countPositiveBar: null,
        $countNegativeBar: null,
        $countPositiveChange: null,
        $countNegativeChange: null,
        $primary: null,
        $type: null,
        trend: null,
        $channelName: null,
        $channelSum: null,
        hotCloud: null,
        $hotBox: null,
        $newsList: null,
        newsTimer: null,

        // 初始化
        init: function () {
            _view.update();
        },

        // update
        update: function () {
            _view.updateCount();
            _view.updatePrimary();
            _view.updateType();
            _view.updateTrend();
            _view.updateChannel();
            _view.updateHot();
            _view.updateNews();
        },

        // 舆情数量
        updateCount: function () {
            var self = this;
            var resData = {};
            var reloadInterval = null;
            var sumCountUp = null;
            var newsCountUp = null;
            var keywordCountUp = null;
            var countUpOptions = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: ''
            };

            this.$countCirclePositiveBg = this.$countCirclePositiveBg || $('#j-circle-positive-bg');
            this.$countCircleNegativeBg = this.$countCircleNegativeBg || $('#j-circle-negative-bg');
            this.$countPositiveBar = this.$countPositiveBar || $('#j-circle-positive-bar');
            this.$countNegativeBar = this.$countNegativeBar || $('#j-circle-negative-bar');
            this.$countPositiveChange = this.$countPositiveChange || $('#j-count-positive-change');
            this.$countNegativeChange = this.$countNegativeChange || $('#j-count-negative-change');

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.count.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                // 计数
                var sumCountOpts = $.extend({}, countUpOptions, {
                    separator: '',
                    // 9位数
                    prefix: '000000000'.substr(('' + resData.sum).length)
                });

                sumCountUp = new CountUp('j-count-sum', 0, 0, 0, 1, sumCountOpts);
                newsCountUp = new CountUp('j-count-news', 0, 0, 0, 1, countUpOptions);
                keywordCountUp = new CountUp('j-count-keyword', 0, 0, 0, 1, countUpOptions);

                if (!sumCountUp.error) {
                    sumCountUp.start();
                    sumCountUp.update(+resData.sum);
                }

                if (!newsCountUp.error) {
                    newsCountUp.start();
                    newsCountUp.update(+resData.news);
                }

                if (!keywordCountUp.error) {
                    keywordCountUp.start();
                    keywordCountUp.update(+resData.keyword);
                }

                // 变化百分比
                self.$countPositiveChange.html(resData.positiveChange);
                self.$countNegativeChange.html(resData.negativeChange);

                _updateAnimation();
            }

            function _updateAnimation () {
                // 饼图
                self.$countPositiveBar.attr('stroke-dasharray', resData.positive / 100 * 160 + ' 1069');
                self.$countNegativeBar.attr('stroke-dasharray', resData.negative / 100 * 160 + ' 1069');

                // 圈内背景
                self.$countCirclePositiveBg.css('top', (100 - resData.positive) + '%');
                self.$countCircleNegativeBg.css('top', (100 - resData.negative) + '%');
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateCount();
            }, window.MOBIKE_PUBLIC_OPINION.trend.interval);

            reloadInterval = setInterval(function () {
                self.$countPositiveBar.attr('stroke-dasharray', '0 1069');
                self.$countNegativeBar.attr('stroke-dasharray', '0 1069');
                self.$countCirclePositiveBg.css('top', '100%');
                self.$countCircleNegativeBg.css('top', '100%');
                setTimeout(function () {
                    _updateAnimation();
                }, 1000);

                sumCountUp.reset();
                newsCountUp.reset();
                keywordCountUp.reset();
                sumCountUp.update(+resData.sum);
                newsCountUp.update(+resData.news);
                keywordCountUp.update(+resData.keyword);
            }, window.MOBIKE_PUBLIC_OPINION.trend.animationInterval);
        },

        // TOP10
        updatePrimary: function () {
            var self = this;
            var reloadInterval = null;
            var resData = [];
            this.$primary = this.$primary || $('#j-primary');

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.primary.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                var htmlArr = [];
                var i, positiveWidth, negativeWidth;
                for (i = 0; i < Math.min(resData.length, 10); i++) {
                    // 总数长度需要越来越短，但每个正反面是按比例，故在算出比例基础上，以第一个sum为基准，乘以因子
                    // positiveWidth = (+resData[i].positive / +resData[i].sum * 100) * (resData[i].sum / resData[0].sum);
                    // negativeWidth = (+resData[i].negative / +resData[i].sum * 100) * (resData[i].sum / resData[0].sum);
                    positiveWidth = (+resData[i].positive / +resData[i].sum * 100) * (1 - 0.05 * i);
                    negativeWidth = (+resData[i].negative / +resData[i].sum * 100) * (1 - 0.05 * i);
                    if (positiveWidth < 15 && positiveWidth > 0) {
                       negativeWidth = 100 * (1 - 0.05 * i) - 15;
                       positiveWidth = 15;
                    }
                    if (negativeWidth < 15 && negativeWidth > 0) {
                       positiveWidth = 100 * (1 - 0.05 * i) - 15;
                       negativeWidth = 15;
                    }
                    console.log(i, positiveWidth);
                    console.log(i, negativeWidth);
                    htmlArr.push('<div class="primary-i">');
                    htmlArr.push('<div class="primary-media">' + resData[i].media + '</div>');
                    htmlArr.push('<div class="primary-bar">');
                    htmlArr.push('<div class="primary-positive animated j-change-width" data-width="' + positiveWidth + '%">' + resData[i].positive + '</div>');
                    htmlArr.push('<div class="primary-negative animated j-change-width" data-width="' + negativeWidth + '%">' + resData[i].negative + '</div>');
                    htmlArr.push('</div></div>');
                }

                self.$primary.html(htmlArr.join(''));

                setTimeout(function () {
                    $('.j-change-width').each(function () {
                        var $this = $(this);
                        $this.css('width', $this.data('width'));
                    });
                }, 10);
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updatePrimary();
            }, window.MOBIKE_PUBLIC_OPINION.primary.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_PUBLIC_OPINION.primary.animationInterval);
        },

        // 舆情类型分布
        updateType: function () {
            var self = this;
            var reloadInterval = null;
            var resData = [];
            this.$type = this.$type || $('#j-type');

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.type.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                var htmlArr = [];
                var i = 0;
                for (; i < Math.min(resData.length, 5); i++) {
                    htmlArr.push('<div class="type-i">');
                    htmlArr.push('<div class="type-bubble animated">');
                    htmlArr.push('<span>' + resData[i].sum + '</span>' + resData[i].trend);
                    htmlArr.push('</div>');
                    htmlArr.push('<div class="type-name">' + resData[i].type + '</div>');
                    htmlArr.push('</div>');
                }

                self.$type.html(htmlArr.join(''));
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateType();
            }, window.MOBIKE_PUBLIC_OPINION.type.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_PUBLIC_OPINION.type.animationInterval);
        },

        // 趋势
        updateTrend: function () {
            var self = this;
            var reloadInterval = null;

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.trend.api, function (data) {
                config.trend.option.xAxis[0].data = data.x;
                config.trend.option.series[0].data = data.y.positive;
                config.trend.option.series[1].data = data.y.negative;
                // paint
                self.trend = self.trend || echarts.init(document.getElementById('j-trend'));
                self.trend.setOption(config.trend.option);
            });

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateTrend();
            }, window.MOBIKE_PUBLIC_OPINION.trend.interval);

            reloadInterval = setInterval(function () {
                var trendOption = self.trend.getOption();
                self.trend.clear();
                self.trend.setOption(trendOption);
            }, window.MOBIKE_PUBLIC_OPINION.trend.animationInterval);
        },

        // 渠道
        updateChannel: function () {
            var self = this;
            var resData = [];
            var reloadInterval = null;
            this.$channelName = this.$channelName || $('.j-channel-name');
            this.$channelSum = this.$channelSum || $('.j-channel-sum');

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.channel.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                resData.forEach(function (item, index) {
                    // 最多渲染3个
                    if (index > 2) {
                        return false
                    }
                    self.$channelName[index].innerHTML = item.channel || '';
                    self.$channelSum[index].innerHTML = item.sum || 0;
                });
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateChannel();
            }, window.MOBIKE_PUBLIC_OPINION.channel.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_PUBLIC_OPINION.channel.animationInterval);
        },

        // 热词
        updateHot: function () {
            var self = this;
            this.$hotBox = this.$hotBox || $('#j-hot-box');

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.hot.api, function (data) {
                config.hot.settings.entries = data;
                self.$hotBox.html('');
                self.hotCloud = new SVG3DTagCloud(document.getElementById('j-hot-box'), config.hot.settings);
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateHot();
            }, window.MOBIKE_PUBLIC_OPINION.hot.interval);
        },

        // 新闻
        updateNews: function () {
            this.$newsList = this.$newsList || $('#j-news-ls');
            var self = this;
            var htmlArr = [];
            if (this.newsTimer) {
                clearTimeout(this.newsTimer);
            }

            _data.fetchData(window.MOBIKE_PUBLIC_OPINION.news.api, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var href = data[i].url || 'javascript:';
                    htmlArr.push('<a class="news-i flex" href="' + href + '" target="_blank">');
                    htmlArr.push('<div class="news-title flex-item">' + data[i].title + '</div>');
                    htmlArr.push('<div class="news-date">' + data[i].date + '</div>');
                    htmlArr.push('</a>');
                }
                self.$newsList.html(htmlArr.join(''));

                // 滚动
                if (data.length > 13) {
                    _view.scrollView('j-news-ls', 60);
                }
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateNews();
            }, window.MOBIKE_PUBLIC_OPINION.news.interval);
        },

        // 滚动
        scrollView: function (id, interval, direction) {
            var self = this;
            var box = document.getElementById(id);
            var itemHeight = box.children[0].offsetHeight;
            var can = true;
            interval = interval || 1500;
            direction = direction === -1 ? -1 : 1;
            // 两份dom
            box.innerHTML += box.innerHTML;
            box.onmouseover = function () {
                can = false;
            };
            box.onmouseout = function () {
                can = true;
            };
            var max = parseInt(box.scrollHeight / 2);
            (function () {
                var stop = box.scrollTop % itemHeight === 0 && !can;
                if (!stop) {
                    var set = direction > 0 ? [max, 0] : [0, max];
                    box.scrollTop === set[0] ? (box.scrollTop = set[1]) : (box.scrollTop += direction);
                }
                self.newsTimer = setTimeout(arguments.callee, interval);
            }());
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

    // util
    var _util = {
        random: function (lt) {
            return Math.floor(Math.random() * lt);
        }
    };

    // init
    _view.init();

    // resize
    $(window).on('resize', function () {
        _view.init();
    });

    // reload page
    setTimeout(function () {
        window.location.reload();
    }, 6 * 60 * 60 * 1000);
});
