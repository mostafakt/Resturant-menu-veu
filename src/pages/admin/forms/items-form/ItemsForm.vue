<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <va-card class="col-span-12">
      <va-card-title>{{ "Items details" }}</va-card-title>
      <va-card-content>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="name" placeholder="item name" />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <va-select
                v-model="parentCategory"
                label="item category"
                text-by="description"
                track-by="id"
                :options="categoriesData"
              />
            </div>

            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-button style="margin-right: 0" small @click="onclick">
                submit
              </va-button>
            </div>
          </div>
        </form>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  DashboardCategoryService,
  DashboardItemsService,
} from "../../../../api/gen";
import { useRouter } from "vue-router";
const categoriesData = ref([]);

DashboardCategoryService.getCategory().then((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  categoriesData.value = res.data.map((t) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    id: t.id,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    description: t?.name,
  }));
});
const router = useRouter();

function onclick() {
  DashboardItemsService.postItems({
    name: name.value,
    categoryId: parentCategory.value.id,
  }).then(() => {
    router.push({ name: "items-show" });
  });
}
const parentCategory = ref();
const name = ref("");

const datePlusDay = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};
</script>

<style lang="scss" scoped>
fieldset {
  margin-bottom: 0.5rem;
}
</style>
