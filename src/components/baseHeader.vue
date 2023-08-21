<script setup>
import { ref } from 'vue'
const Link = ref([
    // {
    //     name: '首页',
    //     to: '/'
    // },
    {
        name: 'Halo C3',
        to: '/'
    },
    {
        name: 'AWS销售平台',
        to: '/AWS'
    },
    {
        name: '数据中心运营平台',
        to: '/DataCenter'
    },
    {
        name: 'TextWiz AIGC创作平台',
        to: '/TextWiz'
    },
])
const isMobile = ref(false)
const showNav = () => {
    isMobile.value = !isMobile.value
    document.body.style.overflow = isMobile.value ? 'hidden' : 'auto';
    document.addEventListener("touchmove", function (e){
        e.preventDefault()
    }, { passive: false });//禁止页面滑动

}
</script>
<template>
    <header>
        <el-icon size="24px" @click="showNav">
            <Fold v-if="!isMobile" />
            <Expand v-else />
        </el-icon>
        <div class="nav-link-box" :class="{
            'mobile-nav': isMobile
        }">
            <a href="/" class="logo">
                LOGO
            </a>
            <RouterLink v-for="item in Link" :to="item.to" class="nav-link-item">{{ item.name }}</RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    border-bottom: 1px solid rgba(151, 151, 151, .3);

    .el-icon {
        display: none;
    }

    .nav-link-box {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            font-size: 32px;
            font-family: MicrosoftYaHei;
            margin-right: 180px;
            color: #fff;
            text-decoration: none;
        }

        .nav-link-item {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            margin: 0 10px;
            color: #fff;
            text-decoration: none;

            &.router-link-exact-active {
                color: #125FF3;
            }
        }
    }
}

@media screen and (max-width:768px) {
    header {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 10px;
        padding-right: 20px;
        text-align: right;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        background-color: var(--background-color);
        .el-icon {
            display: inline-block;

        }

        .nav-link-box {
            display: none;

            .nav-link-item {
                margin: 0;
                margin-bottom: 10px;
            }

            &.mobile-nav {
                position: fixed;
                width: 50%;
                height: calc(100% - 44px);
                display: flex;
                background-color:  var(--background-color);
                
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 20px;
                box-sizing: border-box;
                right: 0;
            }
        }
    }
}
</style>