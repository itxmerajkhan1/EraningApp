import { EarningAppHome } from "./components/EarningAppHome";
import { ProfilePage } from "./components/ProfilePage";
import { TasksPage } from "./components/TasksPage";
import { EarningsPage } from "./components/EarningsPage";
import { WalletPage } from "./components/WalletPage";
import { WithdrawPage } from "./components/WithdrawPage";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "tasks"
    | "earnings"
    | "wallet"
    | "profile"
    | "withdraw"
  >("home");

  const handleNavigation = (
    page:
      | "home"
      | "tasks"
      | "earnings"
      | "wallet"
      | "profile"
      | "withdraw",
  ) => {
    setCurrentPage(page);
  };

  if (currentPage === "profile") {
    return (
      <ProfilePage onBack={() => handleNavigation("home")} />
    );
  }

  if (currentPage === "tasks") {
    return <TasksPage onNavigate={handleNavigation} />;
  }

  if (currentPage === "earnings") {
    return <EarningsPage onNavigate={handleNavigation} />;
  }

  if (currentPage === "wallet") {
    return <WalletPage onNavigate={handleNavigation} />;
  }

  if (currentPage === "withdraw") {
    return <WithdrawPage onNavigate={handleNavigation} />;
  }

  return <EarningAppHome onNavigate={handleNavigation} />;
}