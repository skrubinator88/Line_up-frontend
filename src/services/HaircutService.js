import api from '@/services/Api'

export default {
  fetchHaircuts () {
    return api().get('haircuts')
  },
  addHaircut (haircut) {
    return api().post('haircuts/new', haircut)
  }
}
