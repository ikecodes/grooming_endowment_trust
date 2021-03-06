import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";
import Toast from "../utils/Toast";
import AdminLayout from "../layouts/AdminLayout";
import Button from "../shared/Button";

const AdminPortfolio = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    link: "",
    imageRef: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.image ||
      !formData.description ||
      !formData.link
    ) {
      Toast("Please fill all the fields", "info");
      return;
    }
    setLoading(true);
    const imageRef = `/portfolio/${Date.now()}${formData.image.name}`;
    const storageRef = ref(storage, imageRef);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const portfolioRef = collection(db, "portfolio");
          addDoc(portfolioRef, {
            title: formData.title,
            imageUrl: url,
            description: formData.description,
            link: formData.link,
            imageRef,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast("Portfolio added successfully", "success");
              setLoading(false);
              setFormData({
                ...formData,
                title: "",
                description: "",
                link: "",
              });
            })
            .catch((err) => {
              Toast("Error adding portfolio", "error");
            });
        });
      }
    );
  };
  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter portfolio title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-control'
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select portfolio image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            className='form-control'
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <textarea
            name='description'
            id='text'
            cols='60'
            rows='5'
            placeholder='Portfolio text'
            className='bg-light form-control'
            value={formData.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='link' className='form-label'>
            Enter portfolio link
          </label>
          <input
            type='text'
            name='link'
            id='link'
            placeholder='link'
            className='form-control'
            value={formData.link}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mt-3'>
          <Button title='submit' primary disabled={loading} loading={loading} />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminPortfolio;
