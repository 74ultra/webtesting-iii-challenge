import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display.js';

afterEach(rtl.cleanup);

describe('<Display />', () => {
    it('Displays Open if closed prop is false', () => {
        const wrapper = rtl.render(<Display closed={false} />);
        expect(wrapper.getByText(/open/i))
    })

    it('Displays Closed if closed prop is true', () => {
        const wrapper = rtl.render(<Display closed={true} />);
        expect(wrapper.getByText(/closed/i))
    })

    it('Displays Unlocked if the the locked prop is false', () => {
        const wrapper = rtl.render(<Display locked={false} />);
        expect(wrapper.getByText(/unlocked/i))
    })

    it('Displays Locked if the the locked prop is true', () => {
        const wrapper = rtl.render(<Display locked={true} />);
        expect(wrapper.getByText(/locked/i))
    })

    it('The red-led class is used when locked', () => {
        const wrapper = rtl.render(<Display locked={true} closed={false} />);
        expect(wrapper.getByTestId("led red-led"))
    })

    it('The red-led class is used when closed', () => {
        const wrapper = rtl.render(<Display locked={false} closed={true} />);
        expect(wrapper.getByTestId("led red-led"))
    })

    it('The green-led class is used when unlocked', () => {
        const wrapper = rtl.render(<Display locked={false} closed={true} />);
        expect(wrapper.getByTestId("led green-led"))
    })

    it('The green-led class is used when open', () => {
        const wrapper = rtl.render(<Display locked={true} closed={false} />);
        expect(wrapper.getByTestId("led green-led"))
    })



    

    
})