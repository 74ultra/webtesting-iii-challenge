import React from 'react';
import * as rtl from 'react-testing-library';
import Controls from './Controls.js';
import Dashboard from '../dashboard/Dashboard.js';
import 'jest-dom/extend-expect';

afterEach(rtl.cleanup);

describe('<Controls />', () => {
    test('Provides buttons to toggle closed/locked', () => {
        const wrapper = rtl.render(<Controls />);
        expect(wrapper.getByTestId('lockButton'))
        expect(wrapper.getByTestId('closeButton'))
    })

    test('Clicking the Close Gate button will change Open to Closed', () => {
        const wrapper = rtl.render(<Dashboard />)
        // const wrapper2 = rtl.render(<Controls />)
        
        const closeGate = wrapper.getByText('Close Gate')

        rtl.act(() => {
            rtl.fireEvent.click(closeGate)
        })
        expect(wrapper.getByText('Closed'))
        expect(wrapper.getByText('Unlocked'))
    })

    test('Clicking Close Gate then Lock Gate will change Unlocked to Locked and prevent gate from being opened', () => {
        const wrapper = rtl.render(<Dashboard />)
        const closeGate = wrapper.getByText('Close Gate')

        rtl.act(() => {
            rtl.fireEvent.click(closeGate)
        })

        const lockGate = wrapper.getByText('Lock Gate')

        rtl.act(() => {
            rtl.fireEvent.click(lockGate)
        })

        rtl.act(() => {
            rtl.fireEvent.click(closeGate)
        })

        expect(wrapper.getByText('Locked'))
        expect(wrapper.getByText('Closed'))


    })

    test('Close toggle button is disabled if gate is locked', () => {
        const wrapper = rtl.render(<Controls locked={true} />);
        expect(wrapper.getByTestId('closeButton')).toBeDisabled();
    })

    test('Locked toggle button is disabled if gate is open', () => {
        const wrapper = rtl.render(<Controls closed={false} />)
        expect(wrapper.getByTestId('lockButton')).toBeDisabled();
    })

})

