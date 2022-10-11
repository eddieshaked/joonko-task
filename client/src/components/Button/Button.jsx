import {Container} from "./Button.styles";

const Button = ({children, ...props}) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

export default Button