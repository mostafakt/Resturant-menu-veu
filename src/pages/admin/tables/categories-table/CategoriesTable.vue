<!-- eslint-disable prettier/prettier -->
<template>
  <va-card class="markup-tables mb-8">
    <va-card-title>{{ t("tables.basic") }}</va-card-title>
    <va-card-content class="overflow-auto">
      <table class="va-table w-full">
        <thead>
          <tr>
            <th>{{ t("tables.headings.name") }}</th>
            <th>{{ t("parent category") }}</th>
            <th>{{ t("order in the list") }}</th>
            <th>{{ t("discount value") }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="categoryData in categoriesData" :key="categoryData?.id">
            <td>{{ categoryData?.name }}</td>
            <td>{{ categoryData?.parent?.name }}</td>
            <td>{{ categoryData?.order }}</td>
            <td>{{ categoryData?.discountValue }}%</td>
          </tr>
        </tbody>
      </table>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import data from "../../../../data/tables/markup-table/data.json";
import { DashboardCategoryService } from "../../../../api/gen";

const { t } = useI18n();

let categoriesData = ref();

DashboardCategoryService.getCategory().then((res) => {
  categoriesData.value = res.data;
});

watch(categoriesData, () => {
  console.log("ok...");
});
</script>
