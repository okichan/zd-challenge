import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TicketDetails from '../components/TicketDetails';
Enzyme.configure({ adapter: new Adapter() })

describe('<TicketDetails />', () => {
   it('renders ticket details', () => {
      const wrapper = shallow(<TicketDetails ticket={{requester_id: 123, description: 'test description'}} />)
      expect(wrapper.find('div')).toBeDefined()
   })
})
