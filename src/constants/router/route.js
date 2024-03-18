import { Route } from 'react-router-dom';
import Home from "../../components/Home";
import About from "../../components/About";
import Social from "../../components/Social";
import NoMatch from "../../components/NoMatch";
import Layout from "../../components/Layout";

export const ROUTES = [
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="social" element={<Social/>}/>

        <Route path="*" element={<NoMatch/>}/>
    </Route>
];
