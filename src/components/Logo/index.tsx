import React from 'react'
import * as S from './styles'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImagemUrl'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
