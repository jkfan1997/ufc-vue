<template>
  <div class="athletes">
    <PageHeader currentMenu="ATHLETES" />
    <div class="main">
      <div class="part" v-for="(p, i) in team" :key="i">
        <div class="position">{{ p.label }}</div>
        <div class="p-content">
          <div class="item" v-for="player in p.players" :key="player.number">
            <div class="item-l">
              <img
                class="img"
                :src="`/imgs/playersImg/liverpool/${player.number}.jpg`"
                alt=""
              />
            </div>
            <div class="item-r">
              <div class="item-r-name">
                <span>{{ player.cname }}</span>
              </div>
              <div class="item-r-info">
                <span
                  v-if="player.country"
                  :class="['flag-icon', `flag-icon-${player.country.code}`]"
                ></span>
                <span class="number">{{ player.number }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import { TEAM_DATA } from "./config/team.config";
export default {
  name: "Athletes",
  components: { PageHeader },
  data() {
    return {
      team: TEAM_DATA,
    };
  },
};
</script>
<style lang="less" scoped>
.athletes {
  .main {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding-top: 130px;
    @media only screen and (max-width: 768px) {
      padding-top: 70px;
    }
    .part {
      // background-color: #ccc;
      margin-bottom: 30px;
      .position {
        font-size: 26px;
        font-weight: 900;
        padding: 5px 20px;
        background-color: #f6f6f6;
        color: #d20a0a;
        margin: 10px;
        // color: #fff;
        // background-color: #d20a0a;
      }
      .p-content {
        display: grid;
        @media only screen and (min-width: 1200px) {
          grid-template-columns: repeat(4, calc(25%));
        }
        @media only screen and (min-width: 992px) and (max-width: 1200px) {
          grid-template-columns: repeat(3, calc(100% / 3));
        }
        @media only screen and (min-width: 768px) and (max-width: 992px) {
          grid-template-columns: repeat(2, calc(100% / 2));
        }
        @media only screen and (max-width: 768px) {
          grid-template-columns: repeat(1);
        }
        .item {
          // padding: 30px;
          margin: 10px;
          position: relative;
          height: 180px;
          border-bottom: 1x solid #f6f6f6;
          .item-l {
            position: absolute;
            bottom: 0;
            right: 0;
            // width: 50%;
            height: calc(100% - 35px);
            overflow: hidden;
            .img {
              height: 100%;
              object-fit: cover;
            }
          }
          &:hover {
            cursor: pointer;
            background-color: #f6f6f6;
            .item-l {
              .img {
                transform: scale(1.1); /* 鼠标悬停时将图片放大1.1倍 */
                transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
              }
            }
          }
          .item-r {
            position: absolute;
            top: 5px;
            left: 10px;
            .item-r-name {
              font-size: 20px;
              font-weight: 900;
            }
            .item-r-info {
              display: flex;
              align-items: center;
              .flag-icon {
                margin-right: 10px;
              }
              .number {
                font-size: 20px;
                font-weight: 900;
                color: #d20a0a;
              }
            }
          }
        }
      }
    }
  }
}
</style>
