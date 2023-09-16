import { ButtonContainer } from './styles'

type Props = {
  title: string

  children: string
}

const Button = ({ title, children }: Props) => (
  <ButtonContainer title={title}>{children}</ButtonContainer>
)

export default Button
