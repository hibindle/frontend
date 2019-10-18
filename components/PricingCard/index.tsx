import React from 'react'
import Card from '@components/Card'
import PricingTable, { PTProps } from '@components/PricingTable'

export interface PCProps {
	illustration?: React.ReactNode
	button?: React.ReactNode
	data: PTProps
	maxWidth?: number
}

const PricingCard: React.FunctionComponent<PCProps> = ({
	illustration,
	maxWidth,
	data,
	button
}) => {
	return (
		<Card maxWidth={maxWidth}>
			{illustration}
			<PricingTable
				features={data.features}
				price={data.price}
				title={data.title}
			/>
			{button}
		</Card>
	)
}

export default PricingCard
