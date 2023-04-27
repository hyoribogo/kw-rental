import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../layouts/MainWrapper';
import AddEquipment from '../pages/AddEquipment';
import EquipmentBox from '../pages/EquipmentCart/EquipmentBox';
import EquipmentDetail from '../pages/EquipmentDetail';
import EquipmentItemDetail from '../pages/EquipmentItemDetail';
import EquipmentList from '../pages/EquipmentList';
import EquipmentRental from '../pages/EquipmentRental';
import RentalSuccess from "../pages/EquipmentCart/RentalSuccess";
import RentalApplication from '../pages/EquipmentCart/RentalApplication';
import EquipmentCart from '../pages/EquipmentCart';
import RentalStatus from "../pages/RentalStatus";
import History from '../pages/History';
import EquipmentRentalHistory from "../pages/EquipRentalHistory";
import LabRentalHistory from "../pages/LabRentalHistory";
import PenaltyHistory from "../pages/PenaltyHistory";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/*" element={<EquipmentRental />} >
            <Route path="" element={<EquipmentList />} />
            <Route path=":id" element={<EquipmentDetail />} />
            <Route path=":id/edit" element={<AddEquipment />} />
            <Route path="add" element={<AddEquipment />} />
            <Route path="item" element={<EquipmentItemDetail />} />
            <Route path="status" element={<RentalStatus />} />
            <Route path="inventory/*" element={<EquipmentCart />}>
              <Route path="" element={<EquipmentBox />} />
              <Route path="application" element={<RentalApplication />} />
              <Route path="success" element={<RentalSuccess />} />
            </Route>
          </Route>
          <Route path="/history/*" element={<History />} >
            <Route path="equipment" element={<EquipmentRentalHistory />} />
            <Route path="lab" element={<LabRentalHistory />} />
            <Route path="penalty" element={<PenaltyHistory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
