import ShoppingList from '../../src/components/ShoppingList'
import { mount } from '@vue/test-utils'

it('renders name in template', () => {
  const wrapper = mount(ShoppingList, {
    propsData: {
      name: 'Burger Party'
    }
  })

  expect(wrapper.html()).toContain('Burger Party')
})

it('is empty by default', () => {
  const wrapper = mount(ShoppingList)

  expect(wrapper.vm.items).toEqual([])
})

it('can add item', () => {
  const wrapper = mount(ShoppingList)

  wrapper.setData({ newItem: 'Mona Lisa' })
  wrapper.vm.add()

  // Option 1
  expect(wrapper.vm.items).toContainEqual(
    expect.objectContaining({name: 'Mona Lisa'})
  )

  // Option 2
  expect(wrapper.vm.items).toContainEqual({
    name: 'Mona Lisa',
    bought: false
  })

  expect(wrapper.vm.newItem).toBeNull()
})

it('counts remaining items that are not bought', () => {
  const wrapper = mount(ShoppingList)

  const items = [
    {name: 'Ham', bought: false},
    {name: 'Cheese', bought: true}
  ]

  wrapper.setData({
    items
  })

  expect(wrapper.vm.remainingItems).toBe(1)

  wrapper.vm.items[0].bought = true
  expect(wrapper.vm.remainingItems).toBe(0)
})


it('can toggle item', () => {
  const wrapper = mount(ShoppingList)

  const popcorn = { name: 'Popcorn', bought: false}
  wrapper.setData({
    items: [popcorn]
  })

  wrapper.vm.toggle(popcorn)

  expect(popcorn.bought).toBe(true)
})

it('can remove item', () => {
  const wrapper = mount(ShoppingList)

  const popcorn = { name: 'Popcorn', bought: false}
  wrapper.setData({
    items: [popcorn]
  })

  wrapper.vm.remove(popcorn)
  expect(wrapper.vm.items).not.toContain(popcorn)
})
