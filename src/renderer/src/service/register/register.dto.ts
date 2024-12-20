export interface IRegisterDto {
    provider: "simple" // it can be simple or google
    user: {
        email: string
        password: string
        fullName: string
        timeZone: string
        fcmToken: string | null // for web optional (string, undefined)
    }
}
