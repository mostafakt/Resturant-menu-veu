/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ClientAuthService {
  /**
   * logout
   * @param accept
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthLogout(
    accept?: string,
    requestBody?: any
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/logout",
      headers: {
        Accept: accept,
      },
      body: requestBody,
    });
  }

  /**
   * change fcm token
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthMeChangeFcmToken(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/me/change-fcm-token",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * send Otp
   * @param accept
   * @param acceptLanguage
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthSendOtp(
    accept?: string,
    acceptLanguage?: string,
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/send-otp",
      headers: {
        Accept: accept,
        "Accept-Language": acceptLanguage,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * login
   * @param accept
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthClientLogin(
    accept?: string,
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/client-login",
      headers: {
        Accept: accept,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * delete
   * @param accept
   * @returns any Successful response
   * @throws ApiError
   */
  public static deleteAuthMeDelete(accept?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/auth/me/delete",
      headers: {
        Accept: accept,
      },
    });
  }

  /**
   * get me
   * @param accept
   * @returns any Successful response
   * @throws ApiError
   */
  public static getAuthClientMe(accept?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/client/me",
      headers: {
        Accept: accept,
      },
    });
  }

  /**
   * update me
   * @param accept
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static putAuthClientMe(
    accept?: string,
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/auth/client/me",
      headers: {
        Accept: accept,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Verify Mobile
   * @param accept
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static putAuthClientVerifyMobile(
    accept?: string,
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/auth/client/verify-mobile",
      headers: {
        Accept: accept,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
