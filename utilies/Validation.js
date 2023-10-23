export const isValidEmail = (StringEmail) => {
    return(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(StringEmail))
}
export const isValidPassword = (StringPassword) => StringPassword.length >= 3
