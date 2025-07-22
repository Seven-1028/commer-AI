<script setup>
</script>

<template>
<footer class="footer">
    <div class="contact">
        <div class="container">
            <dl>
                <dt>客户服务</dt>
                <dd>在线客服</dd>
                <dd>问题反馈</dd>
            </dl>
            <dl>
                <dt>关注我们</dt>
                <dd>公众号</dd>
                <dd>微博</dd>
            </dl>
            <dl>
                <dt>下载APP</dt>
                <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
                <dd class="download">
                    <span>扫描二维码</span>
                    <span>立即下载APP</span>
                    <a>下载页面</a>
                </dd>
            </dl>
            <dl>
                <dt>服务热线</dt>
                <dd class="hotline">
                    <span>400-0000-000<small>周一至周日 8:00-18:00</small></span>
                </dd>
            </dl>
    </div>
    </div>
    <div class="extra">
        <div class="container">
            <div class="container-top">
                <div>价格亲民</div>
                <div>物流快捷</div>
                <div>品质新鲜</div>
            </div>
            <div class="container-bottom">
                <div class="first">
                    <ul>
                        <li>关于我们</li>
                        <li>帮助中心</li>
                        <li>售后服务</li>
                        <li>配送与验收</li>
                        <li>商务合作</li>
                        <li>搜索推荐</li>
                        <li>友情链接</li>
                    </ul>
                </div>
                <div class="second">
                    <div>CopyRight©小兔鲜儿</div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<style scoped lang="scss">
.footer{
    overflow: hidden;
    padding-top: 20px;

    .contact{
    background-color: white;

        .container{
            //上右下左
            padding: 60px 0 40px 25px;
            display: flex;
            justify-content: space-between;

            dl{
                height: 190px;
                text-align: center;
                padding: 0 72px;
                border-right: 1px solid #f2f2f2;
                color: #999;

                &:first-child {
                    padding-left: 0;
                }

                &:last-child {
                    border-right: 0;
                    padding-right: 0;
                }

                dt{
                    font-size: 18px;
                    line-height: 1;
                }

                dd{
                    margin: 36px 12px 0 0;
                    float: left;
                    width: 92px;
                    height: 92px;
                    padding-top: 10px;
                    border: 1px solid #ededed;

                    span{
                        display: block;

                        small{
                            display: block;
                        }
                    }

                }

                .download{
                    border: 0;

                    a{
                        display: block;
                        line-height: 1;
                        padding: 9px 0;
                        margin-top: 5px;
                        color: #fff;
                        border-radius: 2px;
                        background-color: $xtxColor;
                    }
                }

                .qrcode{
                    width: 92px;
                    height: 92px;
                    padding: 7px;
                    border: 1px solid #ededed;
                }

                .hotline{
                    border: 0;
                    padding-top: 20px;
                    width: 140px;

                    span{
                        font-size: 20px;
                        color: #686868;

                        small{
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }

    .extra{
        background-color: #2C2C2C;

        .container{

            .container-top{
                height: 300px;
                padding: 0 10%;
                color: white;
                font-size: 27px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #747070;
            }

            .container-bottom{

                .first{

                    ul{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        li{
                            margin: 30px 10px 0 0;
                            padding-left: 10px;
                            color: #7A7A7A;
                            border-left: 1px solid ;

                            &:first-child{
                                border: 0;
                            }
                        }

                    }
                }

                .second{
                    margin: 20px 0 0 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    div{
                        color: #7A7A7A;
                    }
                }
            }
        }
    }
}
</style>