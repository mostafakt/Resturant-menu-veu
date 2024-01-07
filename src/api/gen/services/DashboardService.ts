/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardService {
  /**
   * general_statistic
   * @returns any Successful response
   * @throws ApiError
   */
  public static getGeneralStatistic(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/general-statistic",
    });
  }
}
