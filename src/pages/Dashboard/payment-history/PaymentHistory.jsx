import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios(
      `https://premium-dine-server.vercel.app/paymenthistory?email=${user.email}`
    ).then((res) => {
      console.log(res.data);
      const allPayments = res.data;
      setPayments(allPayments);
    });
  }, []);

  return (
    <div>
      <h3 className="text-center text-2xl text-amber-800 italic mb-4">
        Payment History
      </h3>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Bill ($)</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>${payment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
