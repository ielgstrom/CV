import Estudios from "./Apartados/Estudios.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carreralaboral from "./Apartados/Carreralaboral.js";
import Presentacion from "./Apartados/Presentación.js";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";

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
                                <FiMail className="iconopie" />
                            </a>
                            <small className="desaparecer">
                                i.elgstrom@gmail.com
                            </small>
                        </div>
                        <div className="col-3 telefono">
                            <a href="tel:671408611">
                                <BsPhone className="iconopie" />
                            </a>
                            <small className="desaparecer">+34 671408611</small>
                        </div>
                        <div className="col-3 linkedin">
                            <FaLinkedinIn className="iconopie" />
                        </div>
                        <div className="col-3 twitter">
                            <FaTwitter className="iconopie" />
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default App;
