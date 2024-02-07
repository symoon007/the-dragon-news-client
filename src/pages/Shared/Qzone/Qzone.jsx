import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="text-center my-4 py-4">
      <h4>Q-Zone</h4>
      <div>
        <img src={qzone1} alt="QuestionsZone" />
        <img src={qzone2} alt="QuestionsZone" />
        <img src={qzone3} alt="QuestionsZone" />
      </div>
    </div>
  );
};

export default Qzone;
