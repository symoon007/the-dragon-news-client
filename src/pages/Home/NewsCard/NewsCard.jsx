/* eslint-disable react/prop-types */
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-5 ">
      <Card.Header className="d-flex gap-1 align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1">
          <p className="mb-0 fw-bold">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}.......
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating style={{ maxWidth: 150 }} value={rating.number} readOnly />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
