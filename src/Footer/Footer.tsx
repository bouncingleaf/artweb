import { Link } from "react-router-dom";

const LI = () => <Link to="https://www.linkedin.com/in/jmroy/">LinkedIn</Link>

const Medium = () => <Link to="https://bouncingleaf.medium.com/">Medium</Link>

const DevLeaf = () => <Link to="https://www.developerleaf.com">My developer site</Link>

const Insta = () => <Link to="https://www.instagram.com/bouncingleaf/">Instagram</Link>

const Footer = () => (
    <div>
        <hr />
        Other places to find me: <LI /> - <Medium /> - <DevLeaf /> - <Insta />
    </div>
);

export default Footer
