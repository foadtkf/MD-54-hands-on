import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
      {match && ">>"}
        <Link
          style={{ textDecoration: match ? "underline" : "none" ,
          color: match ? "orange":"blue"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && "<<"}
      </div>
    );
  }
  export default CustomLink;