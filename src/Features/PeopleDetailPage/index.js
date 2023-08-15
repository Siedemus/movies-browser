import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { PeopleListTile } from "../../Common/TilePeople";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPerson, selectStatus } from "./personSlice";
import { useEffect } from "react";

const PeopleDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [dispatch, id]);

  return (
    <>
      {person?.name}
      <PeopleListTile id={id}></PeopleListTile>
    </>
  );
};
export default PeopleDetailPage;
