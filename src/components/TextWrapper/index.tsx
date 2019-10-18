import React from 'react'
import Layout from '@components/layout'
import TextWrap from './styles'

const TextWrapper = ({ children, title }) => (
  <Layout title={title}>
    <TextWrap>
      {children}
    </TextWrap>
  </Layout>
)
export default TextWrapper
