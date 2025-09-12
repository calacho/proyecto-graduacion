// src/frontend/src/pages/public/DashboardPage.jsx

import React from "react";
import Sidebar from "../../components/private/Sidebar";
import AnalysisStatus from "../../components/private/AnalysisStatus";
import RecentResultsTable from "../../components/private/RecentResultsTable";
import StatsSummary from "../../components/private/StatsSummary";

const DashboardPage = () => {
  return (
    <div>
      <Sidebar />

      <main className="main-content p-4 p-md-5">
        <header className="mb-5">
          <h1 className="h2">Panel de Control</h1>
          <p className="text-muted">Bienvenido de nuevo, Doctor.</p>
        </header>

        <section className="mb-5">
          <AnalysisStatus />
        </section>

        <section className="mb-5">
          <RecentResultsTable />
        </section>

        <section>
          <StatsSummary />
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
