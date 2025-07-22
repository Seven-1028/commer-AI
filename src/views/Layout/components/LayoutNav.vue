<script setup>
const confirmEvent = () => {
  console.log('confirm!')
}
</script>

<template>
    <nav class="topnav">
        <div class="container">
            <ul>
                <template v-if="true">
                    <li>
                        <a href="javascript:"><i class=" iconfont icon-user"></i>滑滑梯</a>
                    </li>
                    <li>
                        <el-popconfirm 
                        confirm-button-text="确认"
                        cancel-button-text="取消"
                        title="确定退出吗？"
                        @confirm="confirmEvent"
                        >
                            <template #reference>
                            <a>退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a>我的订单</a></li>
                    <li><a>会员中心</a></li>
                </template>
                <template v-else>
                    <li><a>请先登录</a></li>
                    <li><a>帮助中心</a></li>
                    <li><a>关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.topnav{
    background-color: #2C2C2C;

    ul{
        //让元素称为弹性容器，其子元素成为弹性项目
        display: flex;
        height: 53px;
        //水平靠右开始
        justify-content: flex-end;
        //垂直居中
        align-items: center;

        li{
            
            a{
                //上下 左右
                padding: 0 15px;
                color: white;

                i{
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover{
                    color: $xtxColor;
                }

            }

            ~li{
                a{
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>