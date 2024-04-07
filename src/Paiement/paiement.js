import React, { useState } from "react";
import axios from "axios";
import { Header, SidebarLeft } from "../components";
import { callApi } from "../api";

const PaymentGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null);
  const [amount, setAmount] = useState("");

  const generatePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await callApi("auth/generate-payment", "POST", {
        amount: amount,
        success_url: "https://example.website.com/success",
        fail_url: "https://example.website.com/fail",
      });

      setPaymentResult(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <SidebarLeft />
          <div className="col-md-8">
            <h1 className="mt-4 mb-3">Générer un paiement via Flouci</h1>
            <form onSubmit={generatePayment}>
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Montant:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Chargement..." : "Générer un paiement"}
              </button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {paymentResult && (
              <div className="alert alert-success mt-3">
                <p>URL de paiement générée: {paymentResult.payment_url}</p>
                {/* Affichez d'autres informations de paiement si nécessaire */}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentGenerator;
