import PostDetail from "../pages/PostDetail";
import Posts from "../pages/Posts";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./NavBar";

const Layout: React.FC = () => {
    return (<>
        <NavBar />
        <div className="mt-10 container">
            <Routes>
                <Route path="/" element={<Navigate to="/posts" />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </div>
    </>
    );
};

export default Layout;
