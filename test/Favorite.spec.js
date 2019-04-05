import { mount } from '@vue/test-utils'
import Favorite from '@/components/Favorite.vue'

describe('Favorite', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Favorite, {
      propsData: {
        status: true
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('追加済みステータスが反映されること', () => {
    const wrapper = mount(Favorite, {
      propsData: {
        status: true
      }
    })
    expect(wrapper.text()).toBe('追加済み')
  })

  test('追加前ステータスが反映されること', () => {
    const wrapper = mount(Favorite, {
      propsData: {
        status: false
      }
    })
    expect(wrapper.text()).toBe('お気に入りに追加')
  })

  test('ステータスが切り替えられること', () => {
    const wrapper = mount(Favorite, {
      propsData: {
        status: false
      }
    })
    expect(wrapper.vm.isFavorite).toBeFalsy()
    wrapper.trigger('click')
    expect(wrapper.vm.isFavorite).toBeTruthy()
  })
})
