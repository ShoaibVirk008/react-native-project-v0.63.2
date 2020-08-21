export const stagingServer = "https://api.laclasse.ma/v1/"
export const ngrokServer = "http://0733cadf.ngrok.io/api/v1/users/"
const devTesting = false;
export const baseURL = devTesting === false ? ngrokServer : stagingServer
export const endPoints = {
    login: 'login',
    courses:'rooms',
    classes:'classes',
    resetPassword: '',
    UserProfile: 'user/me',
    updateProfile:'user/me',
    createSignUp: 'register',
    startCourse: 'rooms/start',
    notifications:'notifications',
    forgotPassword: 'user/forgot_password',
    deleteUserAccount:'user/delete-account',
    participantslist:'classes/invited/',
    deleteUserAccount:'user/delete-account'
}
