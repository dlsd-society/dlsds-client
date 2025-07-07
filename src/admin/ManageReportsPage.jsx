// /admin/ManageReportsPage.jsx
import { useNavigate } from "react-router-dom";

export default function ManageReportsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Manage Reports</h2>
      <button onClick={() => navigate("/admin-dashboard/manage-reports/activity")}>
        Upload Activity
      </button>
      <button onClick={() => navigate("/admin-dashboard/manage-reports/audit")}>
        Upload Audit Report
      </button>
      <button onClick={() => navigate("/admin-dashboard/manage-reports/annual")}>
        Upload Annual Report
      </button>
    </div>
  );
}
