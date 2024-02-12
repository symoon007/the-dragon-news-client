
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Our Policy</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab nam
        magni, molestias sed, maxime blanditiis rerum fugiat ratione, iusto
        facere! Vero labore asperiores a quaerat quod assumenda laudantium
        voluptatum rerum amet aut beatae numquam, corporis nobis explicabo
        quidem omnis fugiat. Labore rem obcaecati autem incidunt illum unde,
        eaque qui praesentium cumque optio quidem minima veniam vitae at ad
        quasi, consequuntur a atque. Voluptatibus, non obcaecati nam quod iste
        consequatur dolore recusandae animi aliquid. Dolorem ut temporibus
        deserunt totam sit odit placeat, recusandae dignissimos facere
        voluptate. Magnam laborum ex excepturi, dolor quis harum quibusdam
        quisquam nulla, incidunt quia inventore debitis!
      </p>
      <h2>User Conditions</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dicta
        natus nesciunt eveniet iure quos libero mollitia et tenetur. Quidem
        necessitatibus aperiam iure itaque repellat corrupti quam, assumenda
        maxime facere dicta in odit recusandae. Itaque fugit nisi quae sit
        distinctio, repellendus architecto officia. Vel nemo suscipit fuga
        rerum, eligendi labore veritatis iusto voluptas quos culpa dolores!
      </p>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
