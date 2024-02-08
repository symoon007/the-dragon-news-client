import moment from "moment";
import { Button, Card, Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import EditorsInsights from "./EditorsInsights";

const News = () => {
  const { name } = useParams();

  const news = useLoaderData();
  const { image_url, details, title, category_id, author } = news;
  return (
    <div>
      <Card>
      <Card.Header className="d-flex gap-1 align-items-center ">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1">
          <p className="mb-0 fw-bold">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>
      </Card.Header>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/categories/${category_id}`}>
          <Button variant="danger">
            <FaArrowLeft /> All News in this category
          </Button>
        </Link>
      </Card.Body>
    </Card>  
    <EditorsInsights/>
    </div>
    
  );
};

export default News;
