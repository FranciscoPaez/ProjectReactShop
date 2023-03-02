import Nav from 'react-bootstrap/Nav';
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='Footer'>
      <Nav.Item>
            <p className='TitleFooter'>ACERCA DE NIKE</p>
      </Nav.Item>
      <Nav className="justify-content-center" activeKey="">
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='OneLink'>Noticias</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='OneLink'>Empleo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='OneLink'>Sustentabilidad</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="CopyFooter">© 2023 Nike, Inc. Todos los derechos reservados</p>
      <Nav className="justify-content-end" activeKey="">
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='TwoLink'>Términos de uso</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='TwoLink'>Política de privacidad</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    </>
  );
}

export default Footer;