import { mount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'

describe('Dialog', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('closeクリックした後閉じる', () => {
    const wrapper = mount(Dialog)
    wrapper.find('.modal__close').trigger('click')
    setTimeout(() => {
      expect(wrapper.find('.modal-mask')).toBeFalsy()
      expect(wrapper.find('.modal-wrapper')).toBeFalsy()
    }, 500)
  })

  test('モーダルの外をクリックした後閉じる', () => {
    const wrapper = mount(Dialog)
    wrapper.find('.modal-mask').trigger('click')
    setTimeout(() => {
      expect(wrapper.find('.modal-mask')).toBeFalsy()
      expect(wrapper.find('.modal-wrapper')).toBeFalsy()
    }, 500)
  })

  test('content slotの内容が反映される', () => {
    const wrapper = mount(Dialog, {
      slots: {
        content: 'コンテント'
      }
    })
    expect(wrapper.find('.modal__content').text()).toBe('コンテント')
  })

  test('close slotの内容が反映される', () => {
    const wrapper = mount(Dialog, {
      slots: {
        close: '閉じる'
      }
    })
    expect(wrapper.find('.modal__close').text()).toBe('閉じる')
  })
})
