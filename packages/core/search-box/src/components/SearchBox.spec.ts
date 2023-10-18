// Vitest unit test spec file

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBox from './SearchBox.vue'

describe('<SearchBox />', () => {
  it('renders', () => {
    const wrapper = mount(SearchBox)

    expect(wrapper.isVisible()).toBe(true)
  })
})
