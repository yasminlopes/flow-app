export interface ResponseApi {
    message: string,
    status: number,
    data?: any,
    error?: any,
    res: Response
}