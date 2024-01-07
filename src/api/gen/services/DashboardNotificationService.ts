/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardNotificationService {
  /**
   * index
   * @returns any Successful response
   * @throws ApiError
   */
  public static getNotificationsMyNotifications(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notifications/my-notifications",
    });
  }

  /**
   * Unread Notifications
   * @returns any Successful response
   * @throws ApiError
   */
  public static getStoreActive(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/store/active",
    });
  }

  /**
   * read
   * @param id
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static putNotificationsRead(
    id: string,
    requestBody?: any
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/notifications/{id}/read",
      path: {
        id: id,
      },
      body: requestBody,
    });
  }
}
