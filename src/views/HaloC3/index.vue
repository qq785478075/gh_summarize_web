<script setup>
const getImg = (name) => {
    return new URL(`./images/${name}`, import.meta.url).href
}
</script>
<template>
    <div class="halo-container">
        <div class="container">
            <el-row class="layer01" :gutter="24">
                <el-col :xs="24" :sm="12">
                    <h1>Halo C3 云管平台 </h1>
                    <p>这是一款帮助使用AWS（亚马逊云）和私有云的企业客户构建云环境，实现异构环境下的统一管理，自动化部署及运维，云资源用量监控，管理和分析用云费用，并根据用量来优化用云费用的云管理平台。作为产品负责人，参与了产品从定义到开发出第一个版本上线，再到产品运营过程中的迭代更新全过程。
                    </p>
                    <el-row tag="ul" :gutter="20">
                        <el-col tag="li" :xs="24" :sm="5">
                            <div class="content">
                                <div class="info">600+</div>
                                <div class="sub-title">AWS国内用户</div>
                            </div>
                        </el-col>
                        <el-col tag="li" :xs="24" :sm="13">
                            <div class="content">
                                <div class="info"><span>￥</span>47,000,000+</div>
                                <div class="sub-title">管理用户费用 </div>
                            </div>
                        </el-col>
                        <el-col tag="li" :xs="24" :sm="6">
                            <div class="content">
                                <div class="info">11,000+</div>
                                <div class="sub-title">管理云主机及服务</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :xs="24" :sm="12" class="hidden-xs-only">
                    <img src="@/assets/halo-01.png" alt="" class="img" />
                </el-col>
            </el-row>
            <el-row class="layer02" :gutter="24">
                <el-col :xs="24" :sm="12">
                    <img src="@/assets/rm355-pf-s73-card-laptop-01-mockup.png" alt="" class="img" />
                </el-col>
                <el-col :xs="24" :sm="12">
                    <h1>产品定义 </h1>
                    <p>AWS是全球最大的云服务提供商，在国内的发展较晚，并受到政策限制，所以远￥远落后于国内的其他云计算提供商。公司与AWS是紧密的合作伙伴关系，所以产品要围绕着AWS在国内的短板来定义。</p>

                    <p>一个月的时间，走访了 8 家AWS的用户。加上我们对AWS在中国区的状态越来越清楚和合作关系的明确。我们定义的第一期产品目标就是：为在中国区使用AWS平台的用户提供一款云管理产品。</p>

                    <p>用户付费的模式是，会员免费使用基础功能，多云管理，性能监控和账单分析的功能。系统通过AI为用户提供云服务的优化建议，这些建议是帮助用户节省云服务开销，所以需要用户购买优化建议。</p>
                    <el-row tag="ul">
                        <el-col :span="12" tag="li">
                            <div class="content">
                                <span></span>
                                <div>混合云配置管理</div>
                            </div>
                        </el-col>
                        <el-col :span="12" tag="li">
                            <div class="content">
                                <span></span>
                                <div>云账单管理及分析</div>
                            </div>
                        </el-col>
                        <el-col :span="12" tag="li">
                            <div class="content">
                                <span></span>
                                <div>云资源性能监控</div>
                            </div>
                        </el-col>
                        <el-col :span="12" tag="li">
                            <div class="content">
                                <span></span>
                                <div>AI智能优化建议</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>

            </el-row>
        </div>
        <div class="layer03">
            <div class="container">
                <h1>运营现状</h1>
                <el-row class="info_list" tag="ul">
                    <el-col tag="li" :xs="24" :sm="8">
                        <img src="@/assets/boss.png" alt="">
                        <div class="content">
                            <div class="info">600+</div>
                            <div class="sub-title">AWS国内用户</div>
                        </div>
                    </el-col>
                    <el-col tag="li" :xs="24" :sm="8">
                        <img src="@/assets/honest.png" alt="">
                        <div class="content">
                            <div class="info">47,000,000+</div>
                            <div class="sub-title">管理用户费用</div>
                        </div>
                    </el-col>
                    <el-col tag="li" :xs="24" :sm="8">
                        <img src="@/assets/medal.png" alt="">
                        <div class="content">
                            <div class="info">11,000+</div>
                            <div class="sub-title">管理云主机及服务</div>
                        </div>
                    </el-col>
                </el-row>
                <ul class="advantage_list" tag="ul">
                    <li>
                        <div class="advantage_item">AWS与私有云</div>
                    </li>
                    <li>
                        <div class="advantage_item">K8S等统一管理</div>
                    </li>
                    <li>
                        <div class="advantage_item">集中监控统一运维</div>
                    </li>
                    <li>
                        <div class="advantage_item">可视化的运营分析</div>
                    </li>
                    <li>
                        <div class="advantage_item">云费用分析及预算告警</div>
                    </li>
                    <li>
                        <div class="advantage_item">初步的AI费用优化机制</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="carousel-layer layer04">
            <div class="container">
                <h1>界面展示</h1>
                <el-carousel indicator-position="outside" :interval="5000" height="auto" arrow="always">
                    <el-carousel-item v-for="item in 6" :key="item" style="height: auto;">
                        <div class="carousel-content">
                            <div class="carousel">
                                <img :src="getImg(`haloC3-carousel-0${item}.png`)" alt="" srcset="">
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="layer05">
            <div class="container">
                <h1>产品职责和反思</h1>
                <ul>
                    <li>
                        <img src="@/assets/rectangle.png" alt="">
                        <p>负责组织产品（3人），设计（1人）和开发（14人）团队；</p>
                    </li>
                    <li>
                        <img src="@/assets/rectangle.png" alt="">
                        <p>负责产品定义，产品整体规划，带领产品经理用户调研，竞品分析，需求分析和原型设计（PC端和小程序端）；</p>
                    </li>
                    <li>
                        <img src="@/assets/rectangle.png" alt="">
                        <p>负责部门间的协调沟通，参与产品Scrum开发模式的制定，并推进产品按时交付；</p>
                    </li>
                    <li>
                        <img src="@/assets/rectangle.png" alt="">
                        <p>负责云技术社群的运营，引导用户使用云管平台，用户对云管平台的建议作为优化更新的依据；</p>
                    </li>
                    <li>
                        <img src="@/assets/rectangle.png" alt="">
                        <p>通过用户反馈和后台数据，对产品进行持续功能迭代和产品体验优化；</p>
                    </li>
                    <li>
                        <img src="@/assets/rectangle.png" alt="">
                        <p>对平台未来方向制定战略计划，研究行业动态和市场场景；</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
$round-color: #F90D5B, #7137FF, #33B5FF, #A3B71B;
$advantage-color: #F90D5B, #C347F1, #7137FF, #0091DB, #33B5FF, #A3B71B;

.halo-container {
    min-height: 100px;

    .img {
        display: block;
        width: 100%;
    }

    .layer01 {
        padding-top: 40px;
        align-items: center;

        h1 {
            font-size: 60px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
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
        margin-top: 250px;

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            margin-bottom: 30px;
        }

        p {
            margin-bottom: 20px;
        }

        ul {
            list-style: none;
            display: flex;
            margin-top: 78px;

            li {
                list-style: none;
                margin-bottom: 40px;

                .content {
                    display: flex;
                    align-items: center;

                    span {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        position: relative;
                        border: 1px solid #ccc;
                        margin-right: 6px;

                        &::after {
                            display: block;
                            content: '';
                            width: 9px;
                            height: 9px;
                            border-radius: 50%;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            box-sizing: border-box;
                        }
                    }



                }

                @for $i from 1 through 4 {
                    &:nth-of-type(#{$i}) {
                        .content {
                            span {
                                border-color: nth($round-color, $i);

                                &::after {
                                    background: nth($round-color, $i);
                                }
                            }
                        }
                    }
                }
            }

        }
    }

    .layer03 {
        margin-top: 20px;
        padding-top: 50px;
        padding-bottom: 70px;
        box-sizing: border-box;
        background-color: var(--black-opacity);

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
            margin-bottom: 46px;
        }

        ul.info_list {
            list-style: none;
            height: 230px;
            background: #0059FF;
            border-radius: 5px 5px 5px 5px;
            align-items: center;

            li {
                list-style: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                .content {
                    margin-left: 20px;

                    .info {
                        font-size: 48px;
                        font-family: DINAlternate-Bold, DINAlternate;
                        font-weight: bold;
                        color: var(--font-color);
                    }

                    .sub-title {
                        font-size: 16px;
                        font-family: MicrosoftYaHei;
                        color: var(--font-color);
                        position: relative;
                        top: -18px;
                    }
                }
            }
        }

        ul.advantage_list {
            margin-top: 20px;
            list-style: none;
            display: flex;

            li {
                list-style: none;
                margin-right: 62px;

                .advantage_item {
                    display: inline-block;
                    padding-bottom: 6px;
                    font-size: 18px;
                    font-family: MicrosoftYaHei;
                    color: var(--font-color);
                    border-bottom: 2px solid;
                }

                @for $i from 1 through 6 {
                    &:nth-of-type(#{$i}) {
                        @if($i ==6) {
                            margin-right: 0;
                        }

                        .advantage_item {
                            border-color: nth($advantage-color, $i);
                        }
                    }
                }
            }
        }
    }

    .layer04 {
        padding-top: 50px;
        padding-bottom: 50px;
        box-sizing: border-box;
    }



    .layer05 {
        padding-top: 50px;
        padding-bottom: 70px;
        box-sizing: border-box;
        background-color: var(--black-opacity);

        h1 {
            font-size: 42px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
        }

        ul {
            list-style: none;
            border-top: 1px dashed fade-out(#81ADC8, 0.5);
            margin-top: 67px;

            li {
                list-style: none;
                height: 64px;
                display: flex;
                align-items: center;
                border-bottom: 1px dashed fade-out(#81ADC8, 0.5);
                padding-left: 146px;
                box-sizing: border-box;

                img {
                    display: block;
                }

                p {
                    margin-left: 13px;
                    font-size: 18px;
                    font-family: MicrosoftYaHei;
                    color: var(--font-color);
                }
            }
        }
    }
}

@media screen and (max-width:768px) {
    .halo-container {
        .layer01 {
            margin-top: 10px;
            h1 {
                font-size: 26px;
            }
        }

        .layer03 {
            ul.info_list {
                height: auto;
                padding: 20px;
                box-sizing: border-box;

                li {
                    justify-content: start;
                }
            }

            ul.advantage_list {
                display: grid;
                grid-template-columns: 1fr 1fr;

                li {
                    .advantage_item {
                        font-size: 12px;
                    }
                }
            }
        }
        .layer05 {
            ul{
                li{
                    padding-left:10px;
                    p{
                        font-size: 12px;
                    }
                }
            }
        }
    }
}</style>