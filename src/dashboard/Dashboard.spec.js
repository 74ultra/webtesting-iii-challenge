import React from 'react';
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard.js';

afterEach(rtl.cleanup);

describe('<Dashboard />', () => {
    test('<Dashboard /> snapshot', () => {
        const wrapper = rtl.render(<Dashboard />)
        expect(wrapper.asFragment()).toMatchSnapshot()
    })
    
    
    test('Inital Display defaults to unlocked and open', () => {
        const wrapper = rtl.render(<Dashboard />);
        expect(wrapper.getByText(/unlocked/i))
        expect(wrapper.getByText(/open/i))
        
    })

    test('Intial Controls default to lock gate and close gate', () => {
        const wrapper = rtl.render(<Dashboard />);
        expect(wrapper.getByText(/lock gate/i))
        expect(wrapper.getByText(/close gate/i))
    })


})