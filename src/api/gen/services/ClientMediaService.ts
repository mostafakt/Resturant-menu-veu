/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ClientMediaService {
  /**
   * upload medium
   * @param formData
   * @returns any Successful response
   * @throws ApiError
   */
  public static postMedia(formData?: {
    medium?: Blob;
    type?: number;
    for?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/media",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * View
   * @param id
   * @returns any Successful response
   * @throws ApiError
   */
  public static getMedia(id: number): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/media/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * upload media
   * @param formData
   * @returns any Successful response
   * @throws ApiError
   */
  public static postMediaMultiple(formData?: {
    "media[0][medium]"?: Blob;
    "media[0][type]"?: number;
    "media[0][for]"?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/media/multiple",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
