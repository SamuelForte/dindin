import Button from "../../components/Button";
import User4 from "../../assets/images/user4.png";

export default function Test() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button>
        <span>Yes</span>
      </Button>
    </div>
  );
}
