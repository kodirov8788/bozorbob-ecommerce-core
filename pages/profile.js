/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import Link from "next/link";
import axios from "axios";
import valid from "../utils/valid";
import { patchData } from "../utils/fetchData";
import ReactPlayer from "react-player";
import { ImBooks } from "react-icons/im"
import { BiLinkExternal } from "react-icons/bi"
import { MdOutlineVideoLibrary } from "react-icons/md"
import { imageUpload } from "../utils/imageUpload";
import { FiDownload } from "react-icons/fi"
import en from "../locales/en";
import uz from "../locales/uz";
import { useRouter } from "next/router";
const Profile = () => {
  const initialSate = {
    avatar: "",
    name: "",
    password: "",
    cf_password: "",
  };
  const [data, setData] = useState(initialSate);
  const { avatar, name, password, cf_password } = data;
  const { state, dispatch } = useContext(DataContext);
  const { auth, notify, orders } = state;
  const [dataBook, setDataBook] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);

  useEffect(() => {
    // console.log("orders >:", orders);

    const arr = ((orders.map(item => item.cart)).map(item => item.filter(item2 => item2.book)).map(item => item.length !== 0 ? item.map(item2 => item2) : ""))
    const arr2 = (arr.filter(item => item !== "").map(item => item[0]))
    let x = []
    setDataBook(arr2)
    const videoArr = orders.map(item => item.cart[0]).filter(ar => ar !== undefined)
    const videoArr2 = orders.map(item => item.cart[1]).filter(ar => ar !== undefined)
    const videoArr3 = orders.map(item => item.cart[2]).filter(ar => ar !== undefined)
    const videoArr4 = orders.map(item => item.cart[3]).filter(ar => ar !== undefined)
    const videoArr5 = orders.map(item => item.cart[4]).filter(ar => ar !== undefined)

    const arrr = (
      videoArr.map(item => x.push(item))) +
      (videoArr2.map(item => x.push(item))) +
      (videoArr3.map(item => x.push(item))) +
      (videoArr4.map(item => x.push(item))) +
      (videoArr5.map(item => x.push(item)))
    // console.log("videoArr2 >:", videoArr2);
    // console.log("videoArr3 >:", videoArr3);
    // console.log("videoArr4 >:", videoArr4);
    // console.log("videoArr5 >:", videoArr5);
    const array = []
    const defaultVideos = x.filter(arr => arr.video[0].video_1 !== "")
    const moduleVideos = x.filter(arr => arr.videoModule[0].videoModule_1 !== "")
    // console.log("z >>:", z);
    // console.log("xs >>:", xs);
    // array.push(z)
    moduleVideos.forEach(item => { array.push(item) })
    defaultVideos.forEach(item => { array.push(item) })
    setDataVideo(array)

  }, [orders]);

  // console.log("dataBook >>>", dataBook)
  console.log("dataVideo >>>", dataVideo)

  useEffect(() => {
    if (auth.user) setData({ ...data, name: auth.user.name });
  }, [auth.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (password) {
      const errMsg = valid(name, auth.user.email, password, cf_password);
      if (errMsg)
        return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
      updatePassword();
    }

    if (name !== auth.user.name || avatar) updateInfor();
  };

  const updatePassword = () => {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    patchData("user/resetPassword", { password }, auth.token).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });
      return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    });
  };

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    if (!file)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "File does not exist." },
      });

    if (file.size > 1024 * 1024)
      //1mb
      return dispatch({
        type: "NOTIFY",
        payload: { error: "The largest image size is 1mb." },
      });

    if (file.type !== "image/jpeg" && file.type !== "image/png")
      //1mb
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Image format is incorrect." },
      });

    setData({ ...data, avatar: file });
  };

  const updateInfor = async () => {
    let media;
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    if (avatar) media = await imageUpload([avatar]);

    patchData(
      "user",
      {
        name,
        avatar: avatar ? media[0].url : auth.user.avatar,
      },
      auth.token
    ).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });

      dispatch({
        type: "AUTH",
        payload: {
          token: auth.token,
          user: res.user,
        },
      });
      return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    });
  };
  const { locale } = useRouter();
  const t = locale === "en" ? en : uz;

  if (!auth.user) return null;
  return (
    <div className="profile__page">
      <Head>
        <title>{t.profile}</title>
      </Head>
      <section className="row text-secondary my-2 mt-2">
        <div className="col-md-4">
          <h3 className="text-center text-uppercase">
            {auth.user.role === "user" ? t.user_profile : t.admin_profile}
          </h3>

          <div className="avatar">
            <img
              src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
              alt="avatar"
            />
            <span>
              <i className="fas fa-camera"></i>
              <p>{t.edit}</p>
              <input
                type="file"
                name="file"
                id="file_up"
                accept="image/*"
                onChange={changeAvatar}
              />
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="name">{t.Name}</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              placeholder={t.Name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.Email__address}</label>
            <input
              type="text"
              name="email"
              defaultValue={auth.user.email}
              className="form-control"
              disabled={true}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t.Password}</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder={t.Password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cf_password">{t.Confirm__Password}</label>
            <input
              type="password"
              name="cf_password"
              value={cf_password}
              className="form-control"
              placeholder={t.Confirm__Password}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-info"
            disabled={notify.loading}
            onClick={handleUpdateProfile}
          >
            {t.Register}
          </button>
        </div>

        <div className="col-md-8">
          <h3 className="text-uppercase">{t.orders}</h3>

          <div className="my-3 table-responsive">
            <table
              className="table-bordered table-hover w-100 text-uppercase"
              style={{ minWidth: "600px", cursor: "pointer" }}
            >
              <thead className="bg-light font-weight-bold">
                <tr>
                  <td className="p-2">{t.id}</td>
                  <td className="p-2">{t.date}</td>
                  <td className="p-2">{t.total}</td>
                  <td className="p-2">{t.delivered}</td>
                  <td className="p-2">{t.paid}</td>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="p-2">
                      <Link
                        // href={`/order/${order._id}`}
                        href={{
                          // pathname: `/order/${order._id}`,
                          // query: { order: order },
                          pathname: `/order/${order._id}`,
                          query: {
                            id: order.id, // pass the id
                          },
                        }}
                      >
                        <a>{order._id}</a>
                      </Link>
                    </td>
                    <td className="p-2">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-2">${order.total}</td>
                    <td className="p-2">
                      {order.delivered ? (
                        <i className="fas fa-check text-success"></i>
                      ) : (
                        <i className="fas fa-times text-danger"></i>
                      )}
                    </td>
                    <td className="p-2">
                      {order.paid ? (
                        <i className="fas fa-check text-success"></i>
                      ) : (
                        <i className="fas fa-times text-danger"></i>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="profile_itemContainer">
        <div className="profile_collection_left" >
          <li className="profile__listItemHeader">
            <MdOutlineVideoLibrary />
            <b>Videos Courses</b>
          </li>
          {dataVideo.map((order, index) => (
            <li className="profile__listItem" key={index}>
              {/* <Link
                href={{
                  pathname: `/videos/${order._id}`,
                  query: {
                    id: `${order._id}`
                  },
                }}>
                <a>
                  <span>{order.title}</span>
                  <BiLinkExternal />
                </a>
              </Link> */}
            </li>
          ))}
        </div>
        <div className="profile_collection_left" >
          <li className="profile__listItemHeader">
            <ImBooks />
            <b>Books</b>
          </li>
          {dataBook.map((book, index) => (
            <>
              <li className="profile__listItem" key={index}>
                <a href={book.book} target="_link">
                  <span>{t.view_and_download}</span>
                  <FiDownload />
                </a>
              </li>
            </>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Profile;
