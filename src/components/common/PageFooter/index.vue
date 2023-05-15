<template>
  <div class="page-footer">
    <div class="cont">
      <div class="cont-l">LFC</div>
      <div class="cont-r">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page-footer {
  width: 100%;
  height: 300px;
  // background-color: #d20a0a;
  background-color: #000000;
  color: #fff;
  .cont {
    max-width: 1200px;
    margin: 0 auto;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      padding: 12px 3rem;
      flex-direction: column;
      .cont-l {
        border-bottom: 1px solid #dcdcdc;
      }
    }
    .cont-l {
      text-align: center;
      font-size: 2rem;
      font-weight: 900;
      font-style: oblique;
      margin-bottom: 30px;
    }
    .cont-r {
      text-align: center;
    }
  }
}
</style>
