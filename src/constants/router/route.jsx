import { Route } from 'react-router-dom';
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Social from "../../components/Social/Social";
import NoMatch from "../../components/NoMatch/NoMatch";
import Layout from "../../components/Layout";

export const ROUTES = [
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="social" element={<Social/>}/>

        <Route path="*" element={<NoMatch/>}/>
    </Route>
];
