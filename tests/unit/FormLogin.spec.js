import FormLogin from '../../src/components/FormLogin';
import {mount} from '@vue/test-utils';

it('sets email from prop', () => {
  const wrapper = mount(FormLogin, {
    propsData: {
      email: 'bruce@wayne.com'
    }
  })

  expect(wrapper.vm.form.email).toBe('bruce@wayne.com')
})

it('is not valid with empty email and password', () => {
  const wrapper = mount(FormLogin)

  expect(wrapper.vm.isValid).toBeFalsy()
})

it('is valid with email and password', () => {
  const wrapper = mount(FormLogin)
  wrapper.setData({
    form: {
      email: 'bruce@wayne.com',
      password: 'darkknight'
    }
  })

  expect(wrapper.vm.isValid).toBeTruthy()
})

it('input fields are bound to form data', () => {
  const wrapper = mount(FormLogin)

  const email = wrapper.find('input[type=email]')
  email.setValue('bruce@wayne.com')

  const password = wrapper.find('input[type=password]')
  password.setValue('secret')

  // Option 1
  expect(wrapper.vm.form.email).toBe('bruce@wayne.com')
  expect(wrapper.vm.form.password).toBe('secret')

  // Option 2
  expect(wrapper.vm.form).toEqual(
    expect.objectContaining({
      email: 'bruce@wayne.com',
      password: 'secret'
    })
  )
})

it('should render validation when dirty and invalid', async () => {

  const wrapper = mount(FormLogin)

   await wrapper.setData({
    isDirty: true,
    form: {
      email: null,
      password: null,
    }
  })

  expect(wrapper.html()).toContain('Please fill in both fields.')
})

it('has a submit button', () => {
  const wrapper = mount(FormLogin)

  const button = wrapper.find('button[type=submit]')
  expect(button.element).toBeDefined()
})
