import "./Links.css";

export const Links = () => {
  const links = ["Services", "Projects", "About"];

  return (
    <>
      {links.map((link) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="link-a" href="">
          {link}
        </a>
      ))}
    </>
  );
};
