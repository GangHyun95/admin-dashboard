import { Route, Routes } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import Layout from './layout/Layout';
import UsersPage from './pages/UsersPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<OverviewPage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='users' element={<UsersPage />} />
            </Route>
        </Routes>
    );
}

export default App;
