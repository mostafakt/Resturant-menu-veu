/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DashboardAuthService {
  /**
   * login
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthLogin(requestBody?: {
    email: string;
    password: string;
  }): CancelablePromise<{
    token: string;
    user: any;
  }> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/login",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * change password
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthChangePassword(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/change-password",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * forget password
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthForgetPassword(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/forget-password",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * reset password
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthResetPassword(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/reset-password",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * get me
   * @returns any Successful response
   * @throws ApiError
   */
  public static getAuthMe(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/me",
    });
  }

  /**
   * update me
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static putAuthMe(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/auth/me",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * change language
   * @param requestBody
   * @returns any Successful response
   * @throws ApiError
   */
  public static postAuthMeChangeLanguage(
    requestBody?: Record<string, any>
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/me/change-language",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
