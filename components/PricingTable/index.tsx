import React from 'react'
import { SCPricing, SCPriceList, SCPriceItem } from './styles'
import { H3, H4 } from 'Typography'

export interface PTProps {
	features: Array<string>
	price: string
	title: string
}

const PricingTable: React.FunctionComponent<PTProps> = ({
	price,
	title,
	features
}) => {
	return (
		<SCPricing>
			<H3>{title}</H3>
			<SCPriceList>
				{features.map(feature => (
					<SCPriceItem>{feature}</SCPriceItem>
				))}
			</SCPriceList>
			<H4>{price}</H4>
		</SCPricing>
	)
}

export default PricingTable
