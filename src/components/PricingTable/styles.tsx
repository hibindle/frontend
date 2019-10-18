import styled from 'styled-components'

const SCPricing = styled('div')(({}) => ({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`
}))

const SCPriceList = styled('ul')(() => ({
	display: `block`,
	padding: 0
}))

const SCPriceItem = styled('li')(() => ({
	display: `block`
}))

export { SCPricing, SCPriceList, SCPriceItem }
