import { render, fireEvent, cleanup } from '@testing-library/vue'
import PrimaryButton from '../../src/components/buttons/PrimaryButton'


afterEach(cleanup)

describe('<PrimaryButton/>', () => {
    test('It accepts button text prop', () => {

        const text = 'Take ya head off'
        const { getByText } = render(PrimaryButton)

        expect(getByText(text))
    })

    test.skip('It forwards the supplied url', () => {

    })
})