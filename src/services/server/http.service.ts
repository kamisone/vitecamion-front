import { httpMethods, IWhere } from "@/types/http";
import { customFetch, filterInvalidValues } from "@/utils";

export class HttpService {
  private static _instance: HttpService;

  static get instance() {
    if (!this._instance) {
      this._instance = new HttpService();
    }

    return this._instance;
  }

  async get<T>({
    path,
    queryParams,
  }: {
    path: string;
    queryParams?: Record<string, unknown> & {
      where?: IWhere[] | IWhere[][];
    };
  }) {
    if (queryParams) {
      queryParams = filterInvalidValues<Record<string, unknown>>(queryParams);
    }

    if (queryParams) {
      path = this._addQueryParams(path, queryParams);
    }
    return customFetch<T>(
      `${process.env.API_BASE_URL_SERVER}/${path}`,
      httpMethods.GET
    );
  }

  _addQueryParams(path: string, queryParamsObj: Record<string, unknown>) {
    // remove trailing/leading slashes

    path = path.replace(/(^\/|\/$)/g, "");

    const keys = Object.keys(queryParamsObj);
    const queryParams = new URLSearchParams();

    for (const key of keys) {
      if (Array.isArray(queryParamsObj[key])) {
        for (const value of queryParamsObj[key]) {
          queryParams.append(
            `${key}[]`,
            Object.prototype.toString.call(value) === "[object Object]"
              ? JSON.stringify(value)
              : value
          );
        }
      } else {
        queryParams.append(
          key,
          Object.prototype.toString.call(queryParamsObj[key]) ===
            "[object Object]"
            ? JSON.stringify(queryParamsObj[key])
            : String(queryParamsObj[key])
        );
      }
    }
    return `${path}?${queryParams.toString()}`;
  }
}
