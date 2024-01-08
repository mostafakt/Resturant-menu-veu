/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardItemsService {
  /**
   * index
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getItems(contentType?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/items",
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
  public static postItems(
    requestBody?: { name: string; categoryId: number; discountValue: string },
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/items",
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
  public static getItems1(
    id: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/items/{id}",
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
  public static putItems(
    id: number,
    contentType?: string,
    requestBody?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/items/{id}",
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

  /**
   * delete
   * @param id
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static deleteItems(
    id: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/items/{id}",
      path: {
        id: id,
      },
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  /**
   * export
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postCategoryExport(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/category/export",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
