export interface IWhere {
    operator:
        | 'is'
        | 'is_not'
        | 'eq'
        | 'not'
        | 'in'
        | 'not_in'
        | 'gt'
        | 'gte'
        | 'lt'
        | 'lte'
        | 'contains'
        | 'not_contains'
        | 'starts_with'
        | 'ends_with'
        | 'not_starts_with'
        | 'not_ends_with';
    andOr?: 'andWhere' | 'orWhere';
    parentAndOr?: 'andWhere' | 'orWhere';
    parentNot?: boolean;

    operands: [string, string | null | boolean];
}


export enum httpMethods {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    HEAD = 'head',
}


export interface ListResponseType<T> {
    success: boolean;
    data?: T[];
    message?: string;
}


