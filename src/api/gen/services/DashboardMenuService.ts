/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardMenuService {
  /**
   * index
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getMenus(contentType?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/menus",
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  /**
   * store
   * @param contentType
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postMenus(
    contentType?: string,
    requestBody?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/menus",
      headers: {
        "Content-Type": contentType,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * show
   * @param id
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getMenus1(
    id: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/menus/{id}",
      path: {
        id: id,
      },
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  /**
   * update
   * @param id
   * @param contentType
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static putMenus(
    id: number,
    contentType?: string,
    requestBody?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/menus/{id}",
      path: {
        id: id,
      },
      headers: {
        "Content-Type": contentType,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
