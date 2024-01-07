/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardPermissionsService {
  /**
   * index
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getPermissions(contentType?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/permissions",
      headers: {
        "Content-Type": contentType,
      },
    });
  }
}
