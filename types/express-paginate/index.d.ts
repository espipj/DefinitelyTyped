// Type definitions for express-paginate 1.0
// Project: https://github.com/niftylettuce/express-paginate
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from 'express';

interface PageElement {
    number: number;
    url: typeof href;
}

export interface PaginatedRequest extends express.Request {
    skip: number;
    offset: number;
}

export function middleware(limit: number, maxLimit: number): (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export function hasNextPages(req: express.Request): (pageCount: number) => boolean;
export function href(req: express.Request): (prev: object | boolean, params: object) => string;
export function getArrayPages(req: express.Request): (limit: number, pageCount: number, currentPage: number) => PageElement[];
