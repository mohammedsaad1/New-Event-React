import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverviewWrapper, Title, Desc } from "./styles";
export const Overview = ({ icon, title, Children }) => {
  return (
    <OverviewWrapper>
      <div>
        <FontAwesomeIcon size="2x" color="#f2545f" icon={icon} />
      </div>
      <Title>{title}</Title>
      <Desc>{Children}</Desc>
    </OverviewWrapper>
  );
};
