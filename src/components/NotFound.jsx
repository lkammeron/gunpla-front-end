import {Link} from "react-router";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p>Deze pagina bestaat niet.</p>
            <Link to="/" className="underline">
                Terug naar home
            </Link>
        </div>
    );
}