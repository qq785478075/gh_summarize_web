<script setup>
const getImg = (url) => {
    return new URL(url, import.meta.url).href
}
</script>
<template>
    <div class="TextWiz-container">
        <div class="layer01">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12">
                        <h1>TextWiz AIGC创作平台</h1>
                        <p>
                            TextWiz
                            是一款为企业量身打造的强大内容生成工具。通过先进的人工智能技术，我们为企业提供了一站式的内容解决方案，无论是新闻发布、社交媒体推广还是创意灵感寻找，平台都能满足您的需求。TextWiz是您企业的得力助手，让内容创作变得前所未有的简单和高效。
                        </p>
                        <el-row tag="ul" :gutter="20">
                            <el-col tag="li" :span="5">
                                <div class="content">
                                    <div class="info">3</div>
                                    <div class="sub-title">客户</div>
                                </div>
                            </el-col>
                            <el-col tag="li" :span="13">
                                <div class="content">
                                    <div class="info">1300+</div>
                                    <div class="sub-title">生产内容 </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :xs="24" :sm="12" class="hidden-xs-only">
                        <img src="@/assets/20230816163224.png" alt="" class="img" />
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="layer02">
            <div class="container">
                <h1>产品特点</h1>
                <el-row :gutter="34">
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div>
                                <img src="@/assets/TextWiz-nav-01.png" alt="">
                            </div>
                            <div class="info-contetn">
                                <div class="title">行业内容生成</div>
                                <p>每天为您提供数十条与您行业相关的最新新闻，让您随时掌握行业动态。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div>
                                <img src="@/assets/TextWiz-nav-02.png" alt="">
                            </div>
                            <div class="info-contetn">
                                <div class="title">内容转化工具</div>
                                <p>将生成的新闻内容轻松转化为抖音、小红书等社交媒体平台的文案，助力您的品牌推广。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div>
                                <img src="@/assets/TextWiz-nav-03.png" alt="">
                            </div>
                            <div class="info-contetn">
                                <div class="title">灵感聊天机器人</div>
                                <p>在创意枯竭时，与我们的聊天机器人对话，寻找灵感，甚至获取专业建议。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div>
                                <img src="@/assets/TextWiz-nav-04.png" alt="">
                            </div>
                            <div class="info-contetn">
                                <div class="title">文生图工具</div>
                                <p>提供一键生成与内容匹配的高质量图片，可直接用于新闻编辑和发布。</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="layer03">
            <div class="container">
                <h1>平台架构</h1>
                <div>
                    <img src="@/assets/TextWiz-framework.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="layer layer04">
            <div class="container">
                <h1>平台亮点</h1>
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12">
                        <div>
                            <img src="@/assets/1877.png" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div class="sub-title">自动生产行业内容</div>
                            <p>在快节奏的商业环境中，时刻掌握行业动态并快速产生相关内容是企业竞争力的关键。</p>
                            <p>TextWiz 的自动生产行业内容功能正是为此而生。</p>
                            <p><span>实时监测：</span>我们的系统会实时监测全球范围内与您行业相关的新闻和动态，确保您不错过任何重要信息。</p>
                            <p><span>智能分析：</span>通过先进的人工智能算法，分析行业趋势和热点，为您提供最具价值的内容。</p>
                            <p><span>个性化定制：</span>您可以根据自身需求设置关键词和主题，确保生成的内容完全符合您的品牌和市场定位。</p>
                            <p><span>一键发布：</span>生成的内容可直接发布到公司网站或社交媒体平台，无需额外操作，真正实现“无人值守”的内容运营。</p>

                        </div>
                    </el-col>
                </el-row>

            </div>
        </div>
        <div class="layer layer05 ">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div class="sub-title">可以寻找灵感的编辑器</div>
                            <p>智能内容创造器的编辑器不仅功能强大，更融入了人工智能的聊天和图像生成技术，让内容编辑变得前所未有的轻松和有趣。</p>
                            <p><span>聊天寻找灵感：</span>在编辑过程中遇到困境？与我们的聊天机器人对话，它会根据您的需求提供专业建议和灵感火花。</p>
                            <p><span>一键添加图片：</span>无需浏览网页寻找合适的图片，我们的文生图工具可以为您的文章自动生成与内容主题匹配的精美图片。</p>
                            <p><span>实时预览：</span>编辑过程中可实时预览效果，确保每一个细节都符合您的期望。</p>
                            <p><span>多平台支持：</span>无论是长篇新闻还是短篇社交媒体文案，我们的编辑器都能完美支持，让您的内容在任何平台都能脱颖而出。</p>

                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div>
                            <img src="@/assets/TextWiz-202151.png" alt="">
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="carousel-layer layer06">
            <div class="container">
                <h1>个人工作展示</h1>
                <el-carousel indicator-position="outside" :interval="5000" height="auto" arrow="always">
                    <el-carousel-item v-for="item in 7" :key="item" style="height: auto;">
                        <div class="carousel-content">
                            <div class="carousel">
                                <img :src="getImg(`images/t-${item}.png`)" alt="" srcset="">
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.TextWiz-container {
    .img {
        display: block;
        width: 100%;
    }

    .layer01 {
        padding-top: 90px;
        align-items: center;

        h1 {
            font-size: 50px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            margin-top: 100px;
        }

        p {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: var(--font-color);
            line-height: 32px;
            margin-top: 33px;
            margin-bottom: 30px;
        }

        ul {
            list-style: none;
            display: flex;

            li {

                .info {
                    font-size: 48px;
                    font-family: DINAlternate-Bold, DINAlternate;
                    font-weight: bold;
                    color: #135DF3;
                }

                .sub-title {
                    font-size: 16px;
                    font-family: MicrosoftYaHei;
                    color: var(--font-color);
                    position: relative;
                    top: -10px;
                }
            }
        }
    }

    .layer02 {
        margin-top: 240px;
        margin-bottom: 50px;

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
            margin-bottom: 70px;
        }

        .content {
            height: 140px;
            background: #FFFFFF;
            border-radius: 4px;
            display: flex;
            padding: 26px 36px;
            box-sizing: border-box;
            margin-bottom: 34px;

            .info-contetn {
                color: #000000;
                margin-left: 24px;

                .title {
                    font-size: 24px;
                    font-family: MicrosoftYaHei;
                    color: rgba(0, 0, 0, 0.85);
                }

                p {
                    font-size: 14px;
                    font-family: MicrosoftYaHei;
                    color: rgba(0, 0, 0, 0.45);
                }
            }
        }
    }

    .layer03 {
        padding-top: 50px;
        box-sizing: border-box;
        background-color: var(--black-opacity);

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
            margin-bottom: 50px;
        }

        img {
            display: block;
            margin: auto;
        }
    }

    .layer {
        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
        }

        img {
            display: block;
            width: 100%;
        }

        .sub-title {
            font-size: 20px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #1459F2;
            margin-top: 98px;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: var(--font-color);
            margin-bottom: 10px;

            span {
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
            }
        }
    }

    .layer04 {
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .layer05 {
        background: var(--black-opacity);
        padding-top: 20px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .layer06{
        margin-top: 50px;
    }

}
@media screen and (max-width: 768px) {
    .TextWiz-container {
        overflow-x: hidden;
        .layer01{
            padding-top: 50px;
            h1{
                margin-top: 0;
            }
        }
        .layer02{
            margin-top: 50px;
        }
        .layer03 {
            img{
                width: 100%;
            }
        }
    }
}
</style>