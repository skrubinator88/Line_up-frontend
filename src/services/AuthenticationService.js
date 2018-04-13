import api from '@/services/Api'

export default {
  register (credentials) {
    return api().post('profiles/new', credentials)
  },
  login (credentials) {
    return api().post('profiles/login', credentials)
  }
}
