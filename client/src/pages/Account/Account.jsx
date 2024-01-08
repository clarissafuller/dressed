import { Link } from "react-router-dom";

import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";

const Account = () => {
  return (
    <div>
      <Header />
      <div className="account-text-box">My Account</div>
      <Footer />
    </div>
  );
};

export default Account;
