<script setup>
const getImg = (url) => {
    return new URL(url, import.meta.url).href
}
</script>
<template>
    <div class="AWS-container">
        <div class="layer01">
            <div class="container">
                <el-row :gutter="57">
                    <el-col :xs="24" :sm="12">
                        <h1>AWS销售平台</h1>
                        <p>
                            这套CRM系统是专为云产品，特别是AWS所设计的综合解决方案。融合了渠道管理、客户管理、线索商机管理以及订单账单管理等多个功能模块，以确保各个业务环节的流畅连接。通过与AWS的CRM、账单系统和云监控内容的紧密对接，我们的系统不仅能为客户提供准确的账务处理，还能实时监控云服务的状态，使企业能够快速响应市场变化，更精准地满足客户需求。这套CRM系统的特色在于它的灵活性和针对性，为云服务供应商提供了一套全面、一体化的客户关系管理工具，有助于优化资源配置，提高运营效率，增强客户满意度。
                        </p>
                        <el-row tag="ul" :gutter="20">
                            <el-col tag="li" :span="7" :xs="24" :sm="8">
                                <div class="content">
                                    <div class="info">400+</div>
                                    <div class="sub-title">AWS国内用户</div>
                                </div>
                            </el-col>
                            <el-col tag="li" :span="8" :xs="24" :sm="8">
                                <div class="content">
                                    <div class="info">￥47,000,000+</div>
                                    <div class="sub-title">管理用户费用</div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :xs="24" :sm="12" class="hidden-xs-only">
                        <img src="@/assets/aws-banner.png" alt="" class="img" />
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="layer02">
            <div class="container">
                <h1>AWS 销售平台的平台架构</h1>
                <div>
                    <img src="@/assets/aws-framework.png" alt="">
                </div>
            </div>
        </div>
        <div class="layer03">
            <div class="container">
                <h1>业务模块</h1>
                <el-row :gutter="32" tag="ul">
                    <el-col :xs="24" :sm="12" tag="li">
                        <div class="content">
                            <div class="title">
                                <img src="@/assets/aws-nav-01.png" alt="">
                                <span>营 销</span>
                            </div>
                            <p>营销板块涵盖了客户数据管理、客户运营、客户标签和群组、精准营销和数据报表分析等功能，致力于全生命周期的客户价值挖掘。通过对客户偏好及行为的洞察，配合多样化的营销场景，帮助企业实现精准获客，提升营销的针对性及客户的品牌体验。
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" tag="li">
                        <div class="content">
                            <div class="title">
                                <img src="@/assets/aws-nav-02.png" alt="">
                                <span>销 售</span>
                            </div>
                            <p>销售板块提供从潜客到客户、线索到商机、商机到订单，订单到付款到全流程的自动化、精细化管理能力，提高企业销售人员的工作效率。帮助企业有效的规范、管理销售活动，及时的识别潜在商机并促进转化，形成对市场及销售目标的数据洞察。
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" tag="li">
                        <div class="content">
                            <div class="title">
                                <img src="@/assets/aws-nav-03.png" alt="">
                                <span>结 算</span>
                            </div>
                            <p>
                                结算板块功能覆盖支付、计费、应收、结算、开票、账户、对账、记账等模块，提供了采购、交易的结算管理能力，助力企业各业务线的交叉协同、自动清分及业务扩展。保障业务经营及财务数据据准确性、及时性及可追溯性，通过多维度的分析报表支撑企业的经营分析。
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" tag="li">
                        <div class="content">
                            <div class="title">
                                <img src="@/assets/aws-nav-04.png" alt="">
                                <span>交 易</span>
                            </div>
                            <p>
                                交易板块提供包括类目与属性、品牌与商品、价格与库存等功能，以及支持正逆向交易所涉及的合同、订单履约、售后处理、客户评价等功能。致力于满足交易全生命周期管理的需求，通过构建统一标准的产品资料库、灵活多维的定价、多业务场景的交易模式，帮助企业在供给侧提升合作效率，在消费侧的提升转化。
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="layer layer04">
            <div class="container">
                <h1>平台亮点</h1>
                <el-row :gutter="24">

                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div class="sub-title">商机随时提，提成轻松得</div>
                            <p>个人销售员可以随时随地使用微信小程序提交新的商机，实现信息的实时同步和管理，使得销售流程更加流畅和高效。通过这一全方位的解决方案，企业能够快速响应市场变化，更精准地满足客户需求。我们的CRM系统不仅具备灵活性和针对性，还以一体化的客户关系管理工具为云服务供应商优化资源配置，提高运营效率，增强客户满意度，进一步促进销售团队与客户之间的互动和合作。
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div>
                            <img src="@/assets/5408376.png" alt="">
                        </div>
                    </el-col>
                </el-row>

            </div>
        </div>
        <div class="layer layer05 ">
            <div class="container">
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12">
                        <div>
                            <img src="@/assets/114.png" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div class="sub-title">第一个真正意义上的云销售平台</div>
                            <p>专为AWS设计。它整合了渠道管理、客户管理等多方面功能，并支持个人销售员通过专属APP提交商机。紧密对接云服务，如AWS的CRM和监控内容，确保实时、准确的信息流通。此平台以灵活性和一体化为特点，不仅优化了资源配置、提高了运营效率，还促进了销售团队与客户之间的合作，是一套适应现代商业环境的先进销售解决方案。
                            </p>

                        </div>
                    </el-col>

                </el-row>
            </div>
        </div>
        <div class="carousel-layer layer06">
            <div class="container">
                <h1>个人工作展示</h1>
                <el-carousel indicator-position="outside" :interval="5000" height="auto" arrow="always">
                    <el-carousel-item v-for="item in 8" :key="item" style="height: auto;">
                        <div class="carousel-content">
                            <div class="carousel">
                                <img :src="getImg(`images/aws-${item}.png`)" alt="" srcset="">
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.AWS-container {
    .img {
        display: block;
        width: 100%;
    }

    .layer01 {
        padding-top: 40px;
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
        margin-top: 180px;

        img {
            display: block;
            margin: auto;
        }

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
            margin-bottom: 50px;
        }
    }

    .layer03 {
        padding-top: 50px;
        padding-bottom: 50px;
        box-sizing: border-box;
        background-color: var(--black-opacity);

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
            margin-bottom: 42px;
        }

        ul {
            list-style: none;

            li {
                list-style: none;
                margin-bottom: 32px;

                .content {
                    height: 240px;
                    background: fade-out(#83AEE8, .8);
                    border-radius: 8px;
                    padding: 40px;
                    box-sizing: border-box;

                    .title {
                        display: flex;
                        align-items: center;

                        img {
                            display: block;
                            width: 40px;
                        }

                        span {
                            margin-left: 22px;
                            font-size: 18px;
                            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
                            font-weight: bold;
                            color: var(--font-color);
                        }
                    }

                    p {
                        margin-top: 15px;
                        font-size: 14px;
                        font-family: MicrosoftYaHei;
                        color: var(--font-color);
                    }
                }
            }
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

    .layer06 {
        margin-top: 50px;

        .carousel-content {
            .carousel {
                height: 568px;
                border-radius: 18px;
                overflow: hidden;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .AWS-container {
        overflow-x: hidden;
        .layer01 {
            margin-top: 10px;
            h1 {
                margin-top: 0;
            }
        }

        .layer02 {
            img {
                width: 100%;
            }
        }

        .layer03 {
            ul {
                li {
                    .content {
                        height: auto;
                    }
                }
            }
        }
        .layer {
            img{
                width: 100%;
            }
        }
        .layer06 {
            .carousel-content {
                .carousel{
                    height: 300px;
                }
            }
        }
    }
}
</style>