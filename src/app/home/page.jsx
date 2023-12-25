import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";

export default function page() {
    return (
        <div>
            {/* ---------------------navbar */}
            <nav class="navbar navbar-expand-lg bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="btn navbar-toggler bg-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <MdMenuOpen />

                    </a>
                    <a class="navbar-brand me-auto px-2 text-white" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Notifications</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    user
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            {/* -------------------------------- */}
            {/* ------------------------offcanvas */}



            <div class="offcanvas offcanvas-start sidebar-navbar bg-dark " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
                    <button type="button" class="btn-close d-md-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-white p-0">
                    <nav className="">
                        <ul className="navbar-nav">
                            <li>
                                <div className='text-muted text-white core px-2'><span className='text-white'>Core</span></div>
                            </li>
                            <hr />
                            <li>
                                <a href="" className="nav-link px-4"><MdDashboardCustomize />

                                    <span className='px-2'>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="nav-link px-4"><MdDashboardCustomize />

                                    <span className='px-2'>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="nav-link px-4"><MdDashboardCustomize />

                                    <span className='px-2'>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="nav-link px-4"><MdDashboardCustomize />

                                    <span className='px-2'>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="nav-link px-4"><MdDashboardCustomize />

                                    <span className='px-2'>Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* -------------------------------------- */}
            <main className='inner mt-5 pt-4'>
                <div className="container-fluid">
                    <div className="row g-4 ">
                        <div className="col-lg-4  ">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  ">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  ">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <table class="table shadow-lg">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-12 py-2">
                            <table class="table shadow-lg">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
