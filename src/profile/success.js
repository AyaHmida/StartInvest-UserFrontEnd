import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { callApi } from "../api";
import { Header, SidebarLeft } from "../components";

const Success = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get("payment_id");

    callApi(`auth/verify/${paymentId}`, "POST")
      .then((response) => {
        if (response.success && response.result.status === "SUCCESS") {
          setPaymentData(response.result.details);
        } else {
          console.error(
            "Erreur lors de la vérification du paiement :",
            response
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la vérification du paiement :", error);
        setLoading(false);
      });
  }, [location.search]);

  return (
    <div>
      <Header />
      <br />
      <main>
        <div className="container">
          <br />
          <br />
          <div className="row g-4">
            <SidebarLeft />
            <div className="col-md-8 col-lg-6 vstack gap-6">
              <div className="col-md-12">
                <div className="bg-gray-100">
                  <div className="bg-white p-6 md:mx-auto">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-green-600 w-16 h-16 mx-auto my-6"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                    </svg>
                    <div className="text-center">
                      <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Paiement effectué avec succès !
                      </h3>
                      <p className="text-gray-600 my-2">
                        Merci pour votre investissement,{" "}
                        {paymentData && paymentData.name}. Votre paiement
                        sécurisé en ligne est terminé avec succès.
                      </p>
                      <p>Bonne journée !</p>
                      <div>
                        {paymentData && (
                          <table className="table table-bordered mt-4">
                            <thead>
                              <tr>
                                <th>Clé</th>
                                <th>Valeur</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Numéro de commande</td>
                                <td>{paymentData.order_number}</td>
                              </tr>
                              <tr>
                                <td>Nom</td>
                                <td>{paymentData.name}</td>
                              </tr>
                              <tr>
                                <td>Numéro de téléphone</td>
                                <td>{paymentData.phone_number}</td>
                              </tr>
                              <tr>
                                <td>Email</td>
                                <td>{paymentData.email}</td>
                              </tr>
                            </tbody>
                          </table>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;
