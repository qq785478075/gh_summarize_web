<script setup>
const getImg = (url) => {
    return new URL(url, import.meta.url).href
}
</script>
<template>
    <div class="DataCenter-container">
        <div class="layer01">
            <div class="container">
                <el-row :gutter="57">
                    <el-col :xs="24" :sm="12">
                        <h1>数据中心运营平台</h1>
                        <p>
                            数据机房管理系统是一套全面的解决方案，旨在实现数据中心的高效运营和管理。通过集成先进的技术和符合ITIL（信息技术基础架构库）标准的功能，实现了数据中心的智能化、自动化管理。无论是设备监控、性能分析，还是流程管理、服务改进，该系统提供了一套完整的工具，以满足现代数据中心的各种需求。
                        </p>
                        <el-row tag="ul" :gutter="20">
                            <el-col tag="li" :span="8" :xs="12">
                                <div class="content">
                                    <div class="info">9</div>
                                    <div class="sub-title">IDC正在使用</div>
                                </div>
                            </el-col>
                            <el-col tag="li" :span="8" :xs="12">
                                <div class="content">
                                    <div class="info">2300+</div>
                                    <div class="sub-title">管理机架数</div>
                                </div>
                            </el-col>
                            <el-col tag="li" :span="8" :xs="12">
                                <div class="content">
                                    <div class="info">5200+</div>
                                    <div class="sub-title">管理机架数</div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :xs="24" :sm="12" class="hidden-xs-only">
                        <img src="@/assets/DataCenter-banner.png" alt="" class="img" />
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="layer02">
            <div class="container">
                <h1>行业痛点</h1>
                <el-row :gutter="142">
                    <el-col :xs="24" :sm="8">
                        <div class="content">
                            <div>
                                <img src="@/assets/DataCenter-nav-01.png" alt="">
                            </div>
                            <div class="title">成本不可控</div>
                            <p>资产、容量管理依赖人工管理，人力物力、数据中心运维成本无法控制。传统表格方式管理资产、资源，耗时、易出错，运维成本不可控，资源数据无法追溯、合理调配、周期调整、分析优化，无法匹配大型数据中心智能化管理的需要。
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <div class="content">
                            <div>
                                <img src="@/assets/DataCenter-nav-02.png" alt="">
                            </div>
                            <div class="title">运维效率低</div>
                            <p>
                                运维效率低，专业人员技能不能满足运维要求，人力成本上升。运维手段原始，依赖人员技能，运维效率低人员离职导致运维技术资料的流失，给运维工作带来影响。基础设施故障率2-5%逐年递增。运维人力的投入相应升高。无运维知识库，没有故障处理的系统化工具。
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <div class="content">
                            <div>
                                <img src="@/assets/DataCenter-nav-03.png" alt="">
                            </div>
                            <div class="title">管理不统一</div>
                            <p>
                                没有统一管理平台，技术落后、管理隔离、数据孤岛，不能快速纳管接维。技术方面：大量的运维数据基础资源散落在各基地，不能有效利用；组织方面：运维生产还在以纸质工单、邮件等发布，无法有效形成监控闭环；数据方面：各数据中心技术壁垒导致数据孤岛。
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="layer03">
            <div class="container">
                <h1>平台架构</h1>
                <div>
                    <img src="@/assets/DataCenter-framework.png" alt="">
                </div>
            </div>
        </div>
        <div class="layer layer04">
            <div class="container">
                <h1>平台亮点</h1>
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12">
                        <div>
                            <img src="@/assets/348.png" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div class="content">
                            <div class="sub-title">智能巡检</div>
                            <p>在传统的数据中心巡检过程中，人员通常按照固定的路线进行人工巡检，并在纸上记录检查结果。这样的方式存在许多问题，如人员操作的不可靠性、设备状态评估的困难、巡检资料分析的局限性等。爱智维数据机房管理平台通过引入巡检电子化，彻底改变了这一现状：
</p>
                            <p><span>动态规划的巡检路线</span>，平台能够根据设备的重要性、位置、历史问题等因素，动态规划巡检路线。这样不仅确保了巡检的全面性，还提高了效率。
</p>
                            <p><span>手持平板的现场录入</span>，巡检人员可以手持平板，在现场直接录入设备的状态和问题。这样不仅减少了人为错误，还使得设备的实时状态能够迅速反映到系统中。
</p>
                            <p><span>后续平台分析通过电子化的数据收集</span>，平台可以对巡检资料进行深入分析，如设备的健康趋势、常见问题的统计等。这为数据中心的运维决策提供了有力支持。</p>

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
                            <div class="sub-title">设备管理及监控</div>
                            <p>爱智维致力于全面监控和管理机房内的各类设备，包括但不限于机柜、服务器、空调、蓄电池和发电机等。这款软件不仅简化了设备的日常运维工作，还能有效利用设备的历史数据。通过对员工巡检收集和设备故障维护的数据进行整合和分析，管理员可以轻松地访问和查看相关资料。这一集成解决方案旨在最大限度地减少设备故障带来的风险，确保机房的恒温稳定电力供应，从而提高整体运营效率和可靠性。</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <div>
                            <img src="@/assets/4.png" alt="">
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="carousel-layer layer06">
            <div class="container">
                <h1>个人工作展示</h1>
                <el-carousel indicator-position="outside" :interval="5000" height="auto" arrow="always">
                    <el-carousel-item v-for="item in 6" :key="item" style="height: auto;">
                        <div class="carousel-content">
                            <div class="carousel">
                                <img :src="getImg(`images/occ${item}.png`)" alt="" srcset="">
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.DataCenter-container {
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

        .title {
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: var(--font-color);
            text-align: center;
            margin: 16px 0;
        }

        p {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: var(--font-color);

        }
    }

    .layer03 {
        margin-top: 50px;
        padding-top: 50px;
        padding-bottom: 70px;
        box-sizing: border-box;
        background-color: var(--black-opacity);

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
            .carousel{
                height: 568px;
                border-radius: 18px;
                overflow: hidden;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .DataCenter-container{
        overflow-x: hidden;
        .layer01 {
            margin-top: 10px;
            h1{
                margin-top: 0;
            }
        }
        .layer03 {
            img{
                width: 100%;
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