import EitherOr from "../../Helpers/EitherOr";


export default (direction) => ({
  CardContainer: {
    display: "flex",
    flexDirection: EitherOr(direction, "row"),
    flexWrap: "wrap",
  },
});
