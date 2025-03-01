import { Link } from "react-router-dom";

const LI = () => <Link to="https://www.linkedin.com/in/jmroy/">LinkedIn</Link>

const Medium = () => <Link to="https://bouncingleaf.medium.com/">Medium</Link>

const Insta = () => <Link to="https://www.instagram.com/leafjessicaroy/">Instagram</Link>

const Footer = () => (
    <div>
        <hr />
        Other places to find me: <LI /> - <Medium /> - <Insta />
    </div>
);

export default Footer
