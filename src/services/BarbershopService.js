import api from '@/services/Api'

export default {
  fetchBarbershops () {
    return api().get('barbershops')
  },
  addBarbershop (barbershop) {
    return api().post('barbershops/new', barbershop)
  }
}
