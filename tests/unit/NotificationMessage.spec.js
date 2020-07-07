import NotificationMessage from '../../src/components/NotificationMessage'
import {mount} from '@vue/test-utils';

it('defines correct cssClass', () => {
  const wrapper = mount(NotificationMessage, {
    propsData: {
      message: 'I like turtles',
    }
  })

  // Default class
  expect(wrapper.vm.cssClass).toBe('message-info')

  wrapper.setProps({type: 'error'})
  expect(wrapper.vm.cssClass).toBe('message-error')

  wrapper.setProps({type: 'success'})
  expect(wrapper.vm.cssClass).toBe('message-success')

  wrapper.setProps({type: 'info'})
  expect(wrapper.vm.cssClass).toBe('message-info')
})


// Read my article before you peak at the solution:
// https://vueschool.io/articles/vuejs-tutorials/how-to-test-custom-prop-validators-in-vuejs/

it('accepts valid type props', () => {
  const validTypes = ['info', 'error', 'success']

  const wrapper = mount(NotificationMessage, {
    propsData: {
      message: 'I like turtles',
    }
  })

  const validator = wrapper.vm.$options.props.type.validator

  validTypes.forEach((valid) => {
    expect(validator(valid)).toBe(true)
  })

  expect(validator('invalid')).toBe(false)
})

// Compact version.
it('it accepts valid type props', () => {
  const validTypes = ['info', 'error', 'success']

  // Note! We don't need to mount the component to access it's properties.
  const validator = NotificationMessage.props.type.validator

  // Invoke validator on each valid type
  validTypes.forEach((valid) => expect(validator(valid)).toBe(true))

  // Expect invalid type to not pass
  expect(validator('invalid')).toBe(false)
})
