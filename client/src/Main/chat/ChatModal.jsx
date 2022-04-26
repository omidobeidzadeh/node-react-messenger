import React, { Component } from "react";

export default class ChatModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="compose"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="compose"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Compose</h5>
              <button
                type="button"
                className="btn round"
                data-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="eva eva-close"
                >
                  <g data-name="Layer 2">
                    <g data-name="close">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav" role="tablist">
                <li>
                  <a
                    href="#details"
                    className="active"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="details"
                    aria-selected="true"
                  >
                    Details
                  </a>
                </li>
                <li>
                  <a
                    href="#participants"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="participants"
                    aria-selected="false"
                  >
                    Participants
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="details tab-pane fade show active"
                  id="details"
                  role="tabpanel"
                >
                  <form>
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What's the topic?"
                      />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        placeholder="Hmm, are you friendly?"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div
                  className="participants tab-pane fade"
                  id="participants"
                  role="tabpanel"
                >
                  <div className="search">
                    <form>
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="btn prepend">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-search"
                        >
                          <g data-name="Layer 2">
                            <g data-name="search">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </form>
                  </div>
                  <h4>Users</h4>
                  <hr />
                  <ul className="users">
                    <li>
                      <div className="status online">
                        <img
                          src="dist/img/avatars/avatar-male-1.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Ham Chuwon</h5>
                        <span>Florida, US</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user1"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="dist/img/avatars/avatar-male-2.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Quincy Hensen</h5>
                        <span>Shanghai, China</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user2"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status online">
                        <img
                          src="dist/img/avatars/avatar-male-3.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Mark Hog</h5>
                        <span>Olso, Norway</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user3"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="dist/img/avatars/avatar-male-4.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Sanne Viscaal</h5>
                        <span>Helena, Montana</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user4"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user4"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="dist/img/avatars/avatar-male-5.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Alex Just</h5>
                        <span>London, UK</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user5"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user5"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status online">
                        <img
                          src="dist/img/avatars/avatar-male-6.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Arturo Thomas</h5>
                        <span>Vienna, Austria</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user6"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user6"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="dist/img/avatars/avatar-female-1.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Victoria Garner</h5>
                        <span>Chisinau, Moldova</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user7"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user7"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="dist/img/avatars/avatar-female-2.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Maria Baron</h5>
                        <span>Indore, India</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user8"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user8"
                        ></label>
                      </div>
                    </li>
                    <li>
                      <div className="status online">
                        <img
                          src="dist/img/avatars/avatar-female-3.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Sara Koch</h5>
                        <span>Sofia, BG</span>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="user9"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="user9"
                        ></label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn primary">
                Compose
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
