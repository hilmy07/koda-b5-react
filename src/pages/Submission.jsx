import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteSurvey } from "../redux/reducers/surveyResult";

export default function Submission() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataArray = useSelector((state) => state.surveyResult.data);
  const handleDelete = (id) => {
    dispatch(deleteSurvey(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">
          Data Survei Perokok
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-purple-100 text-gray-800">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Nama
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Umur
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Jenis Kelamin
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Perokok
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Rokok Pernah Dicoba
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dataArray.length > 0 ? (
                dataArray.map((data, i) => (
                  <tr
                    key={i}
                    className="hover:bg-purple-50 transition duration-200"
                  >
                    <td className="border border-gray-200 px-4 py-2">
                      {data.nama}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {data.umur}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {data.jenisKelamin}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {data.perokok}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {data.rokokDicoba?.length > 0
                        ? data.rokokDicoba.join(", ")
                        : "-"}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-md transition duration-200"
                        type="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Tidak ada data disimpan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition"
            onClick={() => navigate("/form-survei")}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
