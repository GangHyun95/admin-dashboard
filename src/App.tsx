import { Route, Routes } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import MainLayout from './layout/MainLayout';
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage';
import OrdersPage from './pages/OrdersPage';
import SettingsPage from './pages/SettingsPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<OverviewPage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='users' element={<UsersPage />} />
                <Route path='sales' element={<SalesPage />} />
                <Route path='orders' element={<OrdersPage />} />
                <Route path='analytics' element={<AnalyticsPage />} />
                <Route path='settings' element={<SettingsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
