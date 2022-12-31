import React, { useState, useMemo } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import countryList from "react-select-country-list";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";
import AdminLayout from "../layouts/AdminLayout";
import Button from "../shared/Button";
import Toast from "../utils/Toast";
import { genders, sectors } from "../constants/selectors";
import { getYears } from "../utils/helpers";

const AdminAwardees = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    country: "",
    gender: "",
    sector: "",
    year: "",
    image: "",
    imageRef: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [loading, setLoading] = useState(false);
  const countries = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.businessName ||
      !formData.email ||
      !formData.country ||
      !formData.gender ||
      !formData.sector ||
      !formData.year ||
      !formData.image
    ) {
      Toast("Please fill all the fields", "info");
      return;
    }

    setLoading(true);
    const imageRef = `/${formData.category}/${Date.now()}${
      formData.image.name
    }`;
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
          const membersRef = collection(db, "members");
          addDoc(membersRef, {
            category: formData.category,
            name: formData.name,
            position: formData.position,
            about: formData.about,
            imageUrl: url,
            imageRef,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              Toast("Member added successfully", "success");
              setLoading(false);
              setFormData({
                ...formData,
                category: "",
                name: "",
                position: "",
                about: "",
              });
            })
            .catch((err) => {
              Toast("Error adding grant", "error");
            });
        });
      }
    );
  };

  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='name' className='form-label'>
            Name of Awardee
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-control'
            placeholder='Name'
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='position' className='form-label'>
            Business name
          </label>
          <input
            type='text'
            name='businessName'
            id='businessName'
            className='form-control'
            placeholder='Business name'
            value={formData.businessName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='position' className='form-label'>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='form-control'
            placeholder='email'
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group'>
          <label htmlFor='category' className='form-label'>
            Country
          </label>
          <select
            name='country'
            className='form-control w-50'
            onChange={(e) => handleChange(e)}
            value={formData.country}
          >
            <option value='Nigeria'>Nigeria</option>
            {countries.map((country) => (
              <option key={country.value} value={country.label}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3 form-group'>
          <label htmlFor='category' className='form-label'>
            Gender
          </label>
          <select
            name='gender'
            className='form-control w-50'
            onChange={(e) => handleChange(e)}
            value={formData.gender}
          >
            <option value=''>Select gender</option>
            {genders.map((gender) => (
              <option
                className='text-capitalize'
                key={gender.value}
                value={gender.name}
              >
                {gender.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3 form-group'>
          <label htmlFor='category' className='form-label'>
            Sector
          </label>
          <select
            name='sector'
            className='form-control w-50'
            onChange={(e) => handleChange(e)}
            value={formData.sector}
          >
            <option value=''>Select sector</option>
            {sectors.map((sector, i) => (
              <option className='text-capitalize' key={i} value={sector.name}>
                {sector.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3 form-group'>
          <label htmlFor='category' className='form-label'>
            Year
          </label>
          <select
            name='year'
            className='form-control w-50'
            onChange={(e) => handleChange(e)}
            value={formData.year}
          >
            <option value=''>Select year</option>
            {getYears(2022).map((year, i) => (
              <option className='text-capitalize' key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select Awardee image
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
        <div className='mt-3'>
          <Button title='submit' primary disabled={loading} loading={loading} />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminAwardees;
