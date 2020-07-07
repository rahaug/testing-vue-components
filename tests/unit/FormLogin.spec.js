import FormLogin from '../../src/components/FormLogin';
import {mount} from '@vue/test-utils';
import {auth} from '../../src/api'

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


// Second round of exercises

it('shows api errors', async () => {
  auth.login = jest.fn(() => Promise.reject())

  const wrapper = mount(FormLogin)
  wrapper.setData({
    form: {
      email: 'john@rambo.com',
      password: 'first_blood'
    }
  })

  await wrapper.vm.login()

  expect(wrapper.vm.hasError).toBe(true)
  expect(wrapper.html()).toContain('Something went wrong. Please try again.')

  auth.login.mockRestore()
})

it('shows validation error if missing inputs and submitting', async () => {
  const wrapper = mount(FormLogin)

  await wrapper.vm.login().catch(()=>{})

  expect(wrapper.html()).toContain('Please fill in both fields.')
})

it('do not hit API endpoint when form data are invalid', () => {
  auth.login = jest.fn()

  const wrapper = mount(FormLogin)
   wrapper.vm.login().catch(()=>{})

  expect(auth.login).not.toHaveBeenCalled()

  auth.login.mockRestore()
})


// Third round of exercises

it('compressed - redirects on sucessful login', async () => {

  auth.login = jest.fn(() => Promise.resolve())

  const $router = {
    push: () => {}
  }

  const spy = jest.spyOn($router, 'push')

  const wrapper = mount(FormLogin, {
    mocks: {
      $router
    }
  })

  wrapper.setData({
    form: {
      email: 'robin@batman.com',
      password: 'secret'
    }
  })

  await wrapper.vm.login()

  expect(spy).toHaveBeenCalledWith({name: 'protected'})

})

it('compressed - redirects on sucessful login', async () => {

  auth.login = jest.fn(() => Promise.resolve())

  const $router = {
    push: jest.fn()
  }

  const wrapper = mount(FormLogin, {
    mocks: {
      $router
    }
  })

  wrapper.setData({
    form: {
      email: 'robin@batman.com',
      password: 'secret'
    }
  })

  await wrapper.vm.login()

  expect($router.push).toHaveBeenCalledWith({name: 'protected'})

})

