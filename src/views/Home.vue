<template>
  <div class="home">
    <PageHeader />
    <div class="banner">
      <img
        class="banner-img"
        src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl_2x/s3/image/2023-04/042023-london-skyline.jpg?h=d1cb525d&itok=lNjh4Tezhttps://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl_2x/s3/image/2023-04/042023-london-skyline.jpg?h=d1cb525d&itok=lNjh4Tez"
        alt=""
      />
    </div>
    <div class="event"></div>
    <div class="content">
      <div class="view-row">
        <div class="trending-grid">
          <div
            class="grid-item"
            v-for="(card, index) in cardDatas"
            :key="index"
          >
            <div class="card">
              <div class="card-l">
                <img
                  class="img"
                  src="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/acquiadam/2023-05/alisson-090523.webp?itok=IWSCdtib&width=1680"
                  alt=""
                />
              </div>
              <div class="card-r">
                <div class="card-r-label">
                  {{ card.label }}
                </div>
                <div class="card-r-headline">
                  {{ card.headline }}
                </div>
                <div class="card-r-desc">
                  {{ card.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="load-more">Load More</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
export default {
  name: "Home",
  components: { PageHeader },
  data() {
    return {
      cardDatas: [
        {
          label: "Announcements",
          headline: "POWER SLAP 2 SCHEDULED FOR WEDNESDAY MAY 24 AT UFC…",
          desc: "EVENT STREAMS LIVE ACROSS THE GLOBE EXCLUSIVELY ON RUMBLE.  FEATURED HEAVYWEIGHT TITLE MATCH: WOLVERINE (C) vs.",
        },
        {
          label: "Announcements",
          headline: "POWER SLAP 2 SCHEDULED FOR WEDNESDAY MAY 24 AT UFC…",
          desc: "EVENT STREAMS LIVE ACROSS THE GLOBE EXCLUSIVELY ON RUMBLE.  FEATURED HEAVYWEIGHT TITLE MATCH: WOLVERINE (C) vs.",
        },
        {
          label: "Announcements",
          headline: "POWER SLAP 2 SCHEDULED FOR WEDNESDAY MAY 24 AT UFC…",
          desc: "EVENT STREAMS LIVE ACROSS THE GLOBE EXCLUSIVELY ON RUMBLE.  FEATURED HEAVYWEIGHT TITLE MATCH: WOLVERINE (C) vs.",
        },
        {
          label: "Announcements",
          headline: "POWER SLAP 2 SCHEDULED FOR WEDNESDAY MAY 24 AT UFC…",
          desc: "EVENT STREAMS LIVE ACROSS THE GLOBE EXCLUSIVELY ON RUMBLE.  FEATURED HEAVYWEIGHT TITLE MATCH: WOLVERINE (C) vs.",
        },
        {
          label: "Announcements",
          headline: "POWER SLAP 2 SCHEDULED FOR WEDNESDAY MAY 24 AT UFC…",
          desc: "EVENT STREAMS LIVE ACROSS THE GLOBE EXCLUSIVELY ON RUMBLE.  FEATURED HEAVYWEIGHT TITLE MATCH: WOLVERINE (C) vs.",
        },
        {
          label: "Announcements",
          headline: "POWER SLAP 2 SCHEDULED FOR WEDNESDAY MAY 24 AT UFC…",
          desc: "EVENT STREAMS.",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  .banner {
    width: 100%;
    height: 960px;
    background-color: rgba(0, 0, 0, 0.2);
    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .event {
    height: 150px;
    box-shadow: 0 4px 20px #ddd;
  }
  .content {
    padding-bottom: 100px;
    .view-row {
      // @media only screen and (min-width: 1200px) {
      //   width: 1200px;
      // }
      width: 100%;
      max-width: 1200px;

      margin: 24px auto;
      .trending-grid {
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
        // grid-gap: 24px;
        .grid-item {
          padding: 12px;
          .card {
            .card-l {
              width: 100%;
              height: 200px;
              background-color: rgba(0, 0, 0, 0.5);
              overflow: hidden;
              .img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &:hover {
              cursor: pointer;
              .card-l {
                .img {
                  transform: scale(1.1); /* 鼠标悬停时将图片放大1.1倍 */
                  transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
                }
              }
            }

            .card-r {
              padding: 8%;
              .card-r-label {
                margin-bottom: 5%;
                color: #d20a0a;
                font-size: 18px;
                font-weight: 600;
              }
              .card-r-headline {
                margin-bottom: 5%;
                color: #191919;
                font-size: 25px;
                line-height: 1.1;
                font-weight: 900;
              }
              .card-r-desc {
                font-size: 12px;
                line-height: 1.2;
              }
            }
          }
        }
      }
      .load-more {
        margin: 20px auto;
        width: 192px;
        border: 1px solid #d5d6d8;
        text-align: center;
        background-color: #fff;
        color: #191919;
        padding: 13px 25px;
        font-weight: 600;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0px;
          height: 3px;
          background-color: #d20a0a;
          opacity: 1;
          transition: width 0.2s ease-in-out;
        }
        &:hover {
          cursor: pointer;
          background-color: #f9f9f9;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}
.content {
  // height: 20000px;
}
</style>
