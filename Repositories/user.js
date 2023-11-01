import axios from 'axios'

// const SERVER_NAME = 'randomuser.me'
// const urlGetUserDetail = `https://${SERVER_NAME}/api/`
const getUserDetail = async () => {
    try {
        let response = await axios.get(`http://localhost:5091/swagger/index.html`)
        if(response.status != 200){
            throw 'Failed request'
        }
        if(response.data.results.length > 0){
            let reponseUser = response.data.results[0]
            let user = {}
            user.dateOfBirth = new Date(reponseUser.dob.date)
            user.email = reponseUser.email ?? ''
            user.userId = `${reponseUser.id.name},${reponseUser.id.value}`
            user.address = `${reponseUser.location.state},${reponseUser.location.street.name}`
            user.url = reponseUser.picture.large ?? ''
            user.phone = reponseUser.phone ?? ''
            user.username = reponseUser.login.username ?? ''
            return user
        }
        throw 'User not found'
    }catch(error){
        throw error
    }
}
const login = ({ email, password }) => {

}

export default {
    getUserDetail,
    login
}