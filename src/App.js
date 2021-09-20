import Estudios from "./Apartados/Estudios.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carreralaboral from "./Apartados/Carreralaboral.js";
import Presentacion from "./Apartados/Presentación.js";
import { FaTwitter, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdMail } from "react-icons/md";

function App() {
    return (
        <>
            <div className="contenedorGeneral">
                <h1 className="App">Ignasi Elgström Puyuelo</h1>
                <div className="container-fluid estructuraContenido">
                    <div className="row justify-content-between cont_central">
                        <Router>
                            <div className="col-md-3 col-12 p-4 menu_botones">
                                <Link
                                    className="btn_menu"
                                    to="/presentacion"
                                    type="button"
                                >
                                    Presentación
                                </Link>

                                <Link
                                    type="button"
                                    to="/estudios"
                                    className="btn_menu"
                                >
                                    Estudios
                                </Link>

                                <Link
                                    type="button"
                                    to="/carreralaboral"
                                    className="btn_menu"
                                >
                                    Carrera Laboral
                                </Link>

                                <li className="btn_menu">
                                    Información complementaria
                                </li>
                            </div>
                            <div className="col-md-8 col-12 contenido">
                                <Route path="/estudios">
                                    <Estudios />
                                </Route>
                                <Route path="/carreralaboral">
                                    <Carreralaboral />
                                </Route>
                                <Route path="/presentacion">
                                    <Presentacion />
                                </Route>
                            </div>
                        </Router>
                    </div>
                    <footer className="row pieweb">
                        <div className="col-3  mail">
                            <a href="mailto: i.elgstrom@gmail.com">
                                <MdMail className="iconopie" />
                            </a>
                            <small className="desaparecer">
                                i.elgstrom@gmail.com
                            </small>
                        </div>
                        <div className="col-3 telefono">
                            <a href="tel:671408611">
                                <FaPhoneAlt className="iconopie" />
                            </a>
                            <small className="desaparecer">+34 671408611</small>
                        </div>
                        <div className="col-3 linkedin">
                            <a href="https://linkedin.com/in/ignasi-elgström">
                                {" "}
                                <FaLinkedinIn className="iconopie" />
                            </a>
                        </div>
                        <div className="col-3 twitter">
                            <a href="https://twitter.com/IgnasiElgstrom?s=09">
                                <FaTwitter className="iconopie" />
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default App;
