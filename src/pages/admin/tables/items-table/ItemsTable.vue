<!-- eslint-disable prettier/prettier -->
<template>
  <va-card class="markup-tables mb-8">
    <va-card-title>{{ t("tables.basic") }}</va-card-title>
    <va-card-content class="overflow-auto">
      <table class="va-table w-full">
        <thead>
          <tr>
            <th>{{ t("tables.headings.name") }}</th>
            <th>{{ t("category name") }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="categoryData in categoriesData" :key="categoryData?.id">
            <td>{{ categoryData?.name }}</td>
            <td>{{ categoryData?.category?.name }}</td>
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
import {
  DashboardCategoryService,
  DashboardItemsService,
} from "../../../../api/gen";
import { log } from "console";

const { t } = useI18n();

let categoriesData = ref();

DashboardItemsService.getItems().then((res) => {
  categoriesData.value = res.data;
});

watch(categoriesData, () => {
  console.log("ok...");
});
</script>
