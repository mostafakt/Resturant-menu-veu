/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardClientService {
  /**
   * index
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getClients(contentType?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/clients",
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  /**
   * Client Discount Codes
   * @param clientId
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getClientDiscountCodes(
    clientId: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/client-discount-codes/{clientId}",
      path: {
        clientId: clientId,
      },
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  /**
   * show
   * @param id
   * @param contentType
   * @returns any Successful response
   * @throws ApiError
   */
  public static getClients1(
    id: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/clients/{id}",
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
  public static putClients(
    id: number,
    contentType?: string,
    requestBody?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/clients/{id}",
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
  public static deleteClients(
    id: number,
    contentType?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/clients/{id}",
      path: {
        id: id,
      },
      headers: {
        "Content-Type": contentType,
      },
    });
  }
}
