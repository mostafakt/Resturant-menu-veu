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
    requestBody?: { name: string; mainCategoryId: any; discountValue: number },
    contentType?: string
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
  ): CancelablePromise<{
    id: number;
    name: string;
    mainCategory: {
      id: number;
      name: string;
      image: {
        id: number;
        url: string;
        extension: string;
      };
      mainImage: {
        id: number;
        url: string;
        extension: string;
      };
      childes: any[];
    };
    discountValue: string;
    createdAt: string;
    createdBy: {
      id: number;
      firstName: string;
      lastName: string;
    };
    updatedAt: string;
    updatedBy: {
      id: number;
      firstName: string;
      lastName: string;
    };
    deletedAt: null;
    deletedBy: null;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: `/menus/${id}`,
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
