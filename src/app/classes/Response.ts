export class ResponseObject<T>{
    error: boolean;
    codigo: string;
    message: string;
    menuItems: Array<T>;
}