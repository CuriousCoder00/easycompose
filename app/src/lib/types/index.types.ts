// Type definitions for the application

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface Session {
    user: {
        id: string;
        email: string;
        name: string;
    } | null;
    token: string | null;
}

export interface AuthResponse {
    user: User;
    token: string;
}