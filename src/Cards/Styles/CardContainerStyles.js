import { EitherOr } from "@taystack/js-helpers";


export default (direction) => ({
  CardContainer: {
    display: "flex",
    flexDirection: EitherOr(direction, "row"),
    flexWrap: "wrap",
  },
});
