import { Diff } from "./components/core/Diff";
import { Layout } from "./components/layout/Layout";
import { nextString, prevString } from "./helpers/strings";

function App() {
    return (
        <Layout>
            <Diff prevString={prevString} nextString={nextString} />
        </Layout>
    );
}

export default App;
