export type User = { 
    id: number,
    email: string,
    username: string,
    name: string
}

export type AuthContextType = {
    user: User | undefined
    isAuthenticated: boolean;
}