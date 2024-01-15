import { Suspense } from "react";
import Loading from "../loading";

const About = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div>
                Enter
            </div>
        </Suspense>
    );
}

export default About;