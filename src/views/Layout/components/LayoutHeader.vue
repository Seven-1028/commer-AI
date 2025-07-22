<script setup>
</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="">小兔鲜</RouterLink>
            </h1>
            <ul class="header-nav">
                <li class="hone">首页</li>
                <li>居家</li>
                <li>美食</li>
                <li>服饰</li>
            </ul>
            <div class="search">
                <i></i>
                <input type="text" placeholder="搜一搜">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header{
    background-color: #fff;

    .container{
        display: flex;
        align-items: center;

        .logo{
            width: 200px;
            text-indent: -9999px;

            a{
                display: block;
                height: 132px;
                width: 100%;
                background: url('@/assets/images/logo.png') no-repeat center 18px /contain;
            }
        }

        ul{
            display: flex;

            li{
                font-size: 18px;
                padding-left: 40px;
            }
        }

        .search{
            width: 170px;
            height: 32px;
            position: relative;
            border-bottom: 1px solid #CACACA;
            line-height: 32px;
            margin-left: auto;

            input{
                width: 140px;
                padding-left: 5px;
                color: #666;
            }
        }
    }


}
</style>