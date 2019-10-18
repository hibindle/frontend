import styled from 'styled-components'
import { H4, P } from 'Typography'

const SCFAQWrapper = styled('div')(({ theme }) => ({
	display: `flex`,
	flexDirection: `column`,
	borderTop: `1px solid ${theme.palette.brandBlackLight}`
}))

const SCFAQ = styled('button')(({ theme }) => ({
	appearance: `none`,
	background: `none`,
	border: `none`,
	borderBottom: `1px solid ${theme.palette.brandBlackLight}`
}))

const FAQTitle = styled(H4)(({ theme }) => ({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `space-between`,
	color: theme.palette.brandBlackLight
}))

const FAQContent = styled(P)(() => ({}))

export { SCFAQWrapper, SCFAQ, FAQContent, FAQTitle }
