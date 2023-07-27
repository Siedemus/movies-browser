import { MainTile } from "../../Common/MainTail";

const MoviesPage = () => (
  <div>
    <MainTile
      title="Mulan"
      subtitle="2020"
      tags={["Action", "Drama", "Commedy"]}
      rate={{ score: 7.6, votes: 643 }}
    />
  </div>
);

export default MoviesPage;
