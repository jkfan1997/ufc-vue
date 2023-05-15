<template>
  <div class="clubs">
    <PageHeader currentMenu="CLUBS" />
    <div class="main">
      <div class="p-content">
        <div class="item" v-for="club in clubs" :key="club.name">
          <div class="item-t">
            <div
              class="bg"
              :style="{
                'background-image': `url('/imgs/clubs/stadium/${club.id}.jpg')`,
              }"
            ></div>
          </div>
          <div class="logo">
            <img class="img" :src="`/imgs/clubs/logos/${club.id}.png`" alt="" />
          </div>
          <!-- <div
            class="item-b"
            :style="{
              'background-color': club.color,
            }"
          > -->
          <div class="item-b">
            <div class="item-b-name">
              <span>{{ club.name }}</span>
            </div>
            <div class="item-b-info">
              <span class="number">{{ club.stadium }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";
import { CLUBS_DATA } from "./config/team.config";
export default {
  name: "Clubs",
  components: { PageHeader, PageFooter },
  data() {
    return {
      clubs: CLUBS_DATA,
    };
  },
};
</script>
<style lang="less" scoped>
.clubs {
  height: 100%;
  .main {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding-top: 130px;
    min-height: 100%;
    @media only screen and (max-width: 768px) {
      padding-top: 70px;
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
        height: 300px;
        border-bottom: 1x solid #f6f6f6;
        background-color: #eaeaea;
        overflow: hidden;
        .item-t {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 150px;
          .bg {
            width: 100%;
            height: 100%;
            background-position: 100% 100%;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        &:hover {
          cursor: pointer;
          // background-color: #f6f6f6;
          .bg {
            transform: scale(1.1); /* 鼠标悬停时将图片放大1.1倍 */
            transition: transform 0.5s ease-in-out; /* 添加过渡效果 */
          }
        }
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          background-color: #fff;
          position: absolute;
          bottom: calc(50% - 30px);
          left: calc(50% - 50px);
          .img {
            height: 70px;
            width: 70px;
            object-fit: cover;
          }
        }
        .item-b {
          height: 100px;
          background-image: url(/imgs/playersImg/liverpool/bg.png);
          background-position: 100% 0;
          background-size: 100% auto;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-top: 50px;
          .item-b-name {
            font-size: 20px;
            font-weight: 900;
          }
          .item-b-info {
            display: flex;
            align-items: center;
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
</style>
