import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function ReactBootstrap({ pelicula }) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{pelicula.title}</Card.Title>
                <Card.Text>
                    {pelicula.vote_average}
                </Card.Text>
                <Button variant="danger">View</Button>
            </Card.Body>
        </Card>
    );
}

export default ReactBootstrap;