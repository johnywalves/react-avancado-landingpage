import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionAboutProjectProps } from 'types/api'

import * as S from './styles'
import { getImageUrl } from 'utils/getImagemUrl'

const SectionAboutProject = ({
  title,
  description,
  image
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
