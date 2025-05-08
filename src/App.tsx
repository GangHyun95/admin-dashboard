import { Route, Routes } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import Layout from './layout/Layout';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<OverviewPage />} />
                <Route path='products' element={<ProductsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
