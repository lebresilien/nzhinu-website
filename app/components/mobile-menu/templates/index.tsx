import Container from "../components/container"
import MainMenu from "../components/main-menu"

const MobileMenu = () => {

  return (
    <Container>
      <div className="flex flex-col flex-1">
        <MainMenu />
      </div>
    </Container>
  )
}

export default MobileMenu
