import { shallowMount } from '@vue/test-utils'
import ModalConfirm from '@/components/modals/ModalConfirm.vue'

describe('ModalConfirm.vue', () => {
  it('renders props when passed', () => {
    const title = 'Modal Confirm'
    const name = 'test'
    const comp = 'test'
    const wrapper = shallowMount(ModalConfirm, {
      props: { title, name, comp }
    })
    expect(wrapper.vm.props).toEqual({ title: 'Modal Confirm', name: 'test', comp: 'test' })
  })
})

