import { FaMeh, FaThumbsUp } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

interface Props {
  rating: number;
}
const RatingEmoji = ({ rating }: Props) => {
  const emoji = () => {
    if (rating < 3) return null;
    else if (rating === 3) return <FaMeh size={25} color="yellow" />;
    else if (rating === 4) return <FaThumbsUp size={25} color="yellow" />;
    else if (rating === 5) return <GiBullseye size={35} color="red" />;
  };

  return <div style={{ marginTop: "8px" }}>{emoji()}</div>;
};

export default RatingEmoji;
