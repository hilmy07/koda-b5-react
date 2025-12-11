import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addSurvey } from "../redux/reducers/surveyResult";
import Swal from "sweetalert2";

export default function FormSurvei() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data dikirim:", data);

    const rokokDicoba = Array.from(
      document.querySelectorAll('input[name="merkRokok"]:checked')
    ).map((cb) => cb.value);

    const surveiData = {
      id: crypto.randomUUID(),
      nama: data.nama,
      umur: data.umur,
      jenisKelamin: data.jenisKelamin,
      perokok: data.perokok,
      rokokDicoba,
    };

    dispatch(addSurvey(surveiData));

    Swal.fire({
      title: "Data berhasil di simpan!",
      icon: "success",
      draggable: true,
    });
  };

  const merkRokok = [
    { label: "Gudang Garam", value: "gudang_garam" },
    { label: "Lucky Strike", value: "lucky_stryke" },
    { label: "Marlboro", value: "marlboro" },
    { label: "Esse", value: "esse" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl mx-auto mt-10 px-4"
    >
      {/* Top Bar */}
      <div className="bg-purple-700 h-2.5 w-full rounded-t-lg"></div>

      {/* Heading */}
      <div className="relative w-full bg-white p-5 shadow-md rounded-b-lg h-20 flex items-center justify-center">
        <h1 className="text-center text-[#2c3e50] text-lg sm:text-2xl font-semibold">
          Form Survei Perokok
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto mt-5 bg-white p-5 shadow-md rounded-lg flex justify-between items-center">
        <label htmlFor="showData">
          <p>Lihat data survei perokok!</p>
        </label>
        <button className="h-[30px]" id="showData">
          <Link to="/submission" className="hover:text-blue-600 transition">
            Show Data
          </Link>
        </button>
      </div>

      {/* Input Nama */}
      <div className="w-full mt-3 bg-white p-5 shadow-md rounded-lg">
        <Input
          label="Siapa nama anda?"
          id="nama"
          type="text"
          name="nama"
          placeholder="Masukkan nama lengkap"
          required
          {...register("nama", { required: "Nama wajib diisi" })}
          error={errors.nama?.message}
        />
      </div>

      {/* Input Umur */}
      <div className="w-full mt-3 bg-white p-5 shadow-md rounded-lg">
        <Input
          label="Berapa umur anda?"
          id="umur"
          type="text"
          name="umur"
          placeholder="Masukkan umur"
          required
          {...register("umur", { required: "Umur wajib diisi" })}
          error={errors.umur?.message}
        />
      </div>

      {/* Jenis Kelamin */}
      <div className="w-full mt-3 bg-white p-5 shadow-md rounded-lg">
        <p className="mb-1 font-medium text-gray-700">
          Apa jenis kelamin anda?
        </p>
        <Input
          label="Laki-laki"
          type="radio"
          name="jenisKelamin"
          value="Laki-laki"
          {...register("jenisKelamin", { required: "Pilih salah satu" })}
          error={errors.jenisKelamin?.message}
        />
        <Input
          label="Perempuan"
          type="radio"
          name="jenisKelamin"
          value="Perempuan"
          {...register("jenisKelamin")}
        />
      </div>

      {/* Perokok atau Tidak */}
      <div className="w-full mt-3 bg-white p-5 shadow-md rounded-lg">
        <p className="mb-1 font-medium text-gray-700">Apakah anda perokok?</p>
        <Input
          label="Ya"
          type="radio"
          name="perokok"
          value="ya"
          {...register("perokok", { required: "Pilih salah satu" })}
          error={errors.perokok?.message}
        />
        <Input
          label="Tidak"
          type="radio"
          name="perokok"
          value="tidak"
          {...register("perokok")}
        />
      </div>

      {/* Checklist Merk Rokok */}
      <div className="w-full mt-3 bg-white p-5 shadow-md rounded-lg">
        <p className="mb-1 font-medium text-gray-700">
          Jika anda perokok, rokok apa yang pernah anda coba?
        </p>
        <div className="mb-4 space-y-2 flex flex-col">
          {merkRokok.map(({ label, value }) => (
            <label key={value} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                value={value}
                name="merkRokok"
                {...register("merkRokok")}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">{label}</span>
            </label>
          ))}
          {errors.merkRokok && (
            <p className="text-red-500 text-sm mt-1">
              {errors.merkRokok.message}
            </p>
          )}
        </div>
      </div>

      {/* Tombol Submit dan Reset */}
      <Button />
    </form>
  );
}
