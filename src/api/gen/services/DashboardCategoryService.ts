/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export type categoryDetailsResponse = {
  id: number;
  name: string;
  childes: any[];
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
  parentCategory: {
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
};
export class DashboardCategoryService {
  /**
   * index
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getCategory(contentType?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/category?page=1&perPage=999",
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
  public static postCategory(
    requestBody?: { name: string; parentId: any; discountValue: number },
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/category",
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
  public static getCategory1(
    id: number,
    contentType?: string
  ): CancelablePromise<categoryDetailsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: `/category/${id}`,
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
  public static putCategory(
    id: number,
    contentType?: string,
    requestBody?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/category/{id}",
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
  public static deleteCategory(
    id: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/category/{id}",
      path: {
        id: id,
      },
      headers: {
        "Content-Type": contentType,
      },
    });
  }
}
