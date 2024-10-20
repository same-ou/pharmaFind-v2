export type UserProfile = {
    firstName: string,
    lastName: string,
    email: string,
    role: Role
}

export type Role = {
    name?: string
}