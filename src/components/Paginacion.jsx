import {Button, ButtonGroup} from 'react-bootstrap';

const Paginacion = ({cambiarPagina}) => {

    return (
        <ButtonGroup className="m-2" aria-label="First group">
            <Button className="me-2" onClick={() => cambiarPagina('anterior')}>Anterior</Button>
            <Button className="me-2" onClick={() => cambiarPagina('siguiente')}>Siguiente</Button> 
        </ButtonGroup>
    )
}

export default Paginacion
