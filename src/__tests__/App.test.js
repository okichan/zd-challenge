import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import tickets from '../__mocks__/mockData'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
   it('renders header', () => {
      const index = shallow(<App />)
      expect(index.find('h1').length).toEqual(1)
   })

   it(`shows loading spinner while loading`, () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('.loader').length).toEqual(1)
   })

   it(`doesn't show loading spinner once loaded`, async () => {
      const wrapper = shallow(<App />)
      await wrapper.instance().componentDidMount()
      wrapper.setState({ tickets })
      expect(wrapper.find('.loader').length).toEqual(0)
   })
})
