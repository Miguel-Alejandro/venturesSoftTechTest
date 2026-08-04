export class ApiResponse<T> {
    error: boolean;
    codigo: string;
    message: string;
    menuItems: Array<T>;
}
