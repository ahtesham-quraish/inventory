import React from 'react';

function Header() {
  return (
    <nav className="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-semi-dark navbar-shadow">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li className="nav-item mobile-menu hidden-md-up float-xs-left">
              <a className="nav-link nav-menu-main menu-toggle hidden-xs">
                <i className="icon-menu5 font-large-1" />
              </a>
            </li>
            <li className="nav-item">
              <a href="index.html" className="navbar-brand nav-link">
                <img
                  alt="branding logo"
                  src="../../app-assets/images/logo/robust-logo-light.png"
                  data-expand="../../app-assets/images/logo/robust-logo-light.png"
                  data-collapse="../../app-assets/images/logo/robust-logo-small.png"
                  className="brand-logo"
                />
              </a>
            </li>
            <li className="nav-item hidden-md-up float-xs-right">
              <a
                data-toggle="collapse"
                data-target="#navbar-mobile"
                className="nav-link open-navbar-container"
              >
                <i className="icon-ellipsis pe-2x icon-icon-rotate-right-right" />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-container content container-fluid">
          <div id="navbar-mobile" className="collapse navbar-toggleable-sm">
            <ul className="nav navbar-nav" />
            <ul className="nav navbar-nav float-xs-right">
              <li className="dropdown dropdown-language nav-item">
                <a
                  id="dropdown-flag"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="dropdown-toggle nav-link"
                >
                  <i className="flag-icon flag-icon-gb" />
                  <span className="selected-language">English</span>
                </a>
                <div aria-labelledby="dropdown-flag" className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <i className="flag-icon flag-icon-gb" /> English
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="flag-icon flag-icon-fr" /> French
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="flag-icon flag-icon-cn" /> Chinese
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="flag-icon flag-icon-de" /> German
                  </a>
                </div>
              </li>
              <li className="dropdown dropdown-notification nav-item">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link nav-link-label"
                >
                  <i className="ficon icon-bell4" />
                  <span className="tag tag-pill tag-default tag-danger tag-default tag-up">
                    5
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                      <span className="grey darken-2">Notifications</span>
                      <span className="notification-tag tag tag-default tag-danger float-xs-right m-0">
                        5 New
                      </span>
                    </h6>
                  </li>
                  <li className="list-group scrollable-container">
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle">
                          <i className="icon-cart3 icon-bg-circle bg-cyan" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">You have new order!</h6>
                          <p className="notification-text font-small-3 text-muted">
                            Lorem ipsum dolor sit amet, consectetuer elit.
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              30 minutes ago
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle">
                          <i className="icon-monitor3 icon-bg-circle bg-red bg-darken-1" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading red darken-1">
                            99% Server load
                          </h6>
                          <p className="notification-text font-small-3 text-muted">
                            Aliquam tincidunt mauris eu risus.
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Five hour ago
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle">
                          <i className="icon-server2 icon-bg-circle bg-yellow bg-darken-3" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading yellow darken-3">
                            Warning notifixation
                          </h6>
                          <p className="notification-text font-small-3 text-muted">
                            Vestibulum auctor dapibus neque.
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Today
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle">
                          <i className="icon-check2 icon-bg-circle bg-green bg-accent-3" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Complete the task</h6>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Last week
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle">
                          <i className="icon-bar-graph-2 icon-bg-circle bg-teal" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">
                            Generate monthly report
                          </h6>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Last month
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-menu-footer">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-muted text-xs-center"
                    >
                      Read all notifications
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-notification nav-item">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link nav-link-label"
                >
                  <i className="ficon icon-mail6" />
                  <span className="tag tag-pill tag-default tag-info tag-default tag-up">
                    8
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                      <span className="grey darken-2">Messages</span>
                      <span className="notification-tag tag tag-default tag-info float-xs-right m-0">
                        4 New
                      </span>
                    </h6>
                  </li>
                  <li className="list-group scrollable-container">
                    <a
                      href
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="list-group-item"
                    >
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-online rounded-circle">
                            <img
                              src="../../app-assets/images/portrait/small/avatar-s-1.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Margaret Govan</h6>
                          <p className="notification-text font-small-3 text-muted">
                            I like your portfolio, let's start the project.
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Today
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-busy rounded-circle">
                            <img
                              src="../../app-assets/images/portrait/small/avatar-s-2.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Bret Lezama</h6>
                          <p className="notification-text font-small-3 text-muted">
                            I have seen your work, there is
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Tuesday
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-online rounded-circle">
                            <img
                              src="../../app-assets/images/portrait/small/avatar-s-3.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Carie Berra</h6>
                          <p className="notification-text font-small-3 text-muted">
                            Can we have call in this week ?
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              Friday
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-away rounded-circle">
                            <img
                              src="../../app-assets/images/portrait/small/avatar-s-6.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Eric Alsobrook</h6>
                          <p className="notification-text font-small-3 text-muted">
                            We have project party this saturday night.
                          </p>
                          <small>
                            <time
                              datetime="2015-06-11T18:29:20+08:00"
                              className="media-meta text-muted"
                            >
                              last month
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-menu-footer">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-muted text-xs-center"
                    >
                      Read all messages
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-user nav-item">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav-link dropdown-user-link"
                >
                  <span className="avatar avatar-online">
                    <img
                      src="../../app-assets/images/portrait/small/avatar-s-1.png"
                      alt="avatar"
                    />
                    <i />
                  </span>
                  <span className="user-name">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item">
                    <i className="icon-head" /> Edit Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="icon-mail6" /> My Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="icon-clipboard2" /> Task
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="icon-calendar5" /> Calender
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="icon-power3" /> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
