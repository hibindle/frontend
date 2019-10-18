import React from 'react'
import { SCHeroWithContent, SCImageWrap, SCContentWrap } from './styles'

export interface SCProps {
	contentPosition?: string
}

interface ConProps {
	content: React.ReactNode
	image: string
}

type Props = SCProps & ConProps

const HeroWithContent: React.SFC<Props> = ({
	image,
	content,
	contentPosition
}) => {
	return (
		<SCHeroWithContent>
			<SCContentWrap contentPosition={contentPosition}>
				{content}
			</SCContentWrap>
			<SCImageWrap contentPosition={contentPosition} src={image} />
		</SCHeroWithContent>
	)
}

export { HeroWithContent }
