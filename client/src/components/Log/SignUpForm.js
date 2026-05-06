import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [errors, setErrors] = useState({
    pseudo: "", email: "", password: "", passwordConfirm: "", terms: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const newErrors = { pseudo: "", email: "", password: "", passwordConfirm: "", terms: "" };

    if (password !== controlPassword)
      newErrors.passwordConfirm = "Les mots de passe ne correspondent pas";
    if (!terms.checked)
      newErrors.terms = "Veuillez valider les conditions générales";

    if (newErrors.passwordConfirm || newErrors.terms) {
      setErrors(newErrors);
      return;
    }

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/register`,
      data: { pseudo, email, password },
    })
      .then(() => setFormSubmit(true))
      .catch((err) => {
        if (err.response && err.response.data.errors) {
          setErrors({ ...newErrors, ...err.response.data.errors });
        }
      });
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error">{errors.pseudo}</div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error">{errors.email}</div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error">{errors.password}</div>
          <br />
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error">{errors.passwordConfirm}</div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
          </label>
          <div className="terms error">{errors.terms}</div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
