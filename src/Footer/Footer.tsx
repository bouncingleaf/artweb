import { Link } from "react-router-dom";

const Footer = () => (
    <div>
        <hr />
        Other places to find me: <DeveloperLeaf /> - <Insta />
    </div>
);

const DeveloperLeaf = () => <Link to="https://www.developerleaf.com">DeveloperLeaf.com</Link>

const Insta = () => <Link to="https://www.instagram.com/bouncingleaf/">Instagram</Link>

export default Footer
