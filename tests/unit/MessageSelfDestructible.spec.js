import MessageSelfDestructible from '../../src/components/MessageSelfDestructible';
import {mount} from '@vue/test-utils';

jest.useFakeTimers()

it('interval is defined when mounted', () => {
  const wrapper = mount(MessageSelfDestructible, {
    propsData: {
      message: 'Be kind, rewind!'
    }
  })

  expect(wrapper.vm.interval).toBeDefined()
})

it('increases counter by one for every passed second', () => {
  const wrapper = mount(MessageSelfDestructible, {
    propsData: {
      message: 'Be kind, rewind!'
    }
  })

  expect(wrapper.vm.counter).toBe(0)
  jest.advanceTimersByTime(1000)
  expect(wrapper.vm.counter).toBe(1)
  jest.advanceTimersByTime(1000)
  expect(wrapper.vm.counter).toBe(2)
})

it('self destructs', () => {
  const spy = jest.spyOn(MessageSelfDestructible, 'beforeDestroy')

  const wrapper = mount(MessageSelfDestructible, {
    propsData: {
      message: 'Be kind, rewind!'
    }
  })

  jest.advanceTimersByTime(wrapper.vm.time)

  expect(wrapper.vm.interval).toBeUndefined()
  expect(wrapper.exists()).toBe(false)

  expect(spy).toHaveBeenCalled()
})

it('emits deleted event when destroyed', () => {
  const wrapper = mount(MessageSelfDestructible, {
    propsData: {
      message: 'Be kind, rewind!'
    }
  })

  jest.advanceTimersByTime(wrapper.vm.time)

  expect(wrapper.emitted().deleted).toBeDefined()
})
