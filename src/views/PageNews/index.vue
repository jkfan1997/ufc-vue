<template>
  <div class="news">
    <PageHeader currentMenu="NEWS" />
    <div class="main">NEWS</div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
export default {
  name: "News",
  components: { PageHeader },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.news {
}
</style>
