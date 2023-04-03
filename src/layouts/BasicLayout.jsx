import NavBar from "./NavBar";

export function BasicLayout(props) {
  const { children } = props;

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
