import Button from "../../components/Button";

export default function Test() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button flat>
        <span>Button</span>
      </Button>

      {/* <Button color="primary" size="sm">
        <span>Primary</span>
      </Button>

      <Button flat color="danger" size="lg">
        <span>Flat</span>
      </Button> */}

      {/* <Button color="secondary" size="lg" rounded>
        <span>Secondary</span>
      </Button>

      <Button color="success">
        <span>Success</span>
      </Button>

      <Button color="danger">
        <span> Danger </span>
      </Button>

      <Button color="warning">
        <span> Warning </span>
      </Button>

      <Button color="info">
        <span> info </span>
      </Button>

      <Button color="light">
        <span> light </span>
      </Button>

      <Button color="dark">
        <span> dark </span>
      </Button>

      <Button color="link">
        <span> link </span>
      </Button>

      <Button color="primary" size="sm">
        <span> flat </span>
      </Button> */}
    </div>
  );
}
