import { mount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'

describe('Dialog', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('closeボタンをクリックすると親コンポーネントにcloseイベントが発行される', () => {
    const wrapper = mount(Dialog)
    wrapper.find('.modal__close').trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  test('モーダルの外をクリックすると親コンポーネントにcloseイベントが発行される', () => {
    const wrapper = mount(Dialog)
    wrapper.find('.modal-mask').trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
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
