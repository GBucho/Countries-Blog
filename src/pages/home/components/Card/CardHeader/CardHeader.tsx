import "./Cardheader.mosule.css";

const CardHeader: React.FC<
  React.PropsWithChildren<{
    name: string;
    voteCount: number;
    onUpVote: () => void;
  }>
> = ({ voteCount, name, onUpVote }) => {
  return (
    <h2>
      {name} - {voteCount}{" "}
      <span style={{ color: "green", cursor: "pointer" }} onClick={onUpVote}>
        UP
      </span>
    </h2>
  );
};

export default CardHeader;
