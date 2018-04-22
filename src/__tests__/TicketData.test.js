import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TicketsData from '../components/TicketsData';
Enzyme.configure({ adapter: new Adapter() })

describe('<TicketsData />', () => {
   it('renders ticket list', () => {
      const wrapper = shallow(<TicketsData ticket={[{id: 123, subject: 'test subject'}]} />)
      expect(wrapper.find('li').length).toBeGreaterThanOrEqual(1) 
   })

   it('renders ticket list with link', () => {
      const wrapper = shallow(<TicketsData ticket={{id: 123}} />)
      expect(wrapper.find('a').length).toBeDefined()
   })
})
