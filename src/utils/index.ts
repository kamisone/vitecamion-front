import { httpMethods } from "@/types/http";

export function getDay(date: Date) {
  if (date.getDay() === 0) return 7;
  return date.getDay();
}

export function filterInvalidValues<T>(
  data: FormData | Record<string, unknown>
) {
  let temp: [string, unknown][] = [];
  let body: FormData | Record<string, unknown>;
  if (Object.prototype.toString.call(data) === "[object FormData]") {
    temp = Array.from(data as FormData).filter(([_, value]) => value);
    body = new FormData();
    temp.forEach(([key, value]) => (body as FormData).set(key, String(value)));
  } else {
    temp = Array.from(Object.entries(data)).filter(
      ([_, value]) =>
        !["", null, undefined, "null", "undefined"].includes(
          typeof value === "string" ? value.trim() : value
        )
    );
    body = {};
    temp.forEach(
      ([key, value]) => ((body as Record<string, unknown>)[key] = value)
    );
  }

  return body as T;
}

export function customFetch<T>(
  path: string,
  method: httpMethods = httpMethods.GET,
  headers = {},
  body: Record<string, unknown> | FormData | null = null
) {
  let options: Record<string, unknown> = {
    method,
    headers: { ...headers },
  };
  if (body) {
    options = {
      ...options,
      body: (Object.prototype.toString.call(body) === "[object FormData]"
        ? body
        : JSON.stringify(body)) as BodyInit,
    };
  }
  return fetch(path, options)
    .then(
      (
        heads: Response
      ): Promise<{ success: boolean; data?: T; message?: string }> => {
        if (heads.status < 300 && heads.status > 199) {
          return heads.json().then((data: T) => {
            return {
              success: true,
              data,
            };
          });
        }
        return heads.json().then((data: Error) => {
          return {
            success: false,
            message: data.message,
          };
        });
      }
    )
    .catch((fetchExecutorError: Error) => {
      console.log("error: ", fetchExecutorError.message);
      return {
        success: false,
        message: fetchExecutorError.message,
      };
    });
}
