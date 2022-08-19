import React, { useState } from "react";
import AdminWrapper from "../../../components/admin/AdminWrapper";
import Footer from "../../../components/admin/Footer";
import { prisma } from "../../../database/prisma";

import { f2 as ff } from "../../../styles/variables.module.scss";
export default function index({ inquiries }) {
  const [filter, setFilter] = useState({
    name: "",
    type: "",
  });
  const { name, type } = filter;

  const applyFilter = () => {
    if (name != "") {
      return inquiries.filter((inq) =>
        inq.name.toLowerCase().startsWith(name.toLowerCase())
      );
    } else if (type != "") {
      return inquiries.filter((inq) =>
        inq.type?.toLowerCase().startsWith(type?.toLowerCase())
      );
    }

    return inquiries;
  };

  const onChangeFilter = ({ target: { name, value } }) => {
    // if (name == "type") setFilter({ ...filter, name: "" });
    // else if (name == "name") setFilter({ ...filter, type: "" });

    setFilter({ ...filter, [name]: value });
  };

  return (
    <AdminWrapper>
      <div className="body px-4">
        <header>
          <h4>Customer Inquiries</h4>
        </header>
        <div className="filters row">
          <div className="col-6 col-lg-3 mb-2">
            <input
              name="name"
              onChange={onChangeFilter}
              className="form-control"
              placeholder="Filter Name"
              value={filter.name}
            />
          </div>
          <div className="col-6 col-lg-3 mb-2">
            <input
              name="type"
              onChange={onChangeFilter}
              className="form-control "
              placeholder="Filter Type"
              value={filter.type}
            />
          </div>
        </div>
        <div className="inquiry-container">
          <table className="table table-hover position-relative">
            <thead className="table-header">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Phone</th>
                <th>DateTime</th>
                <th colSpan={6} className="msg">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {applyFilter().map((inq, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{inq?.name}</td>
                  <td>{inq?.email}</td>
                  <td>{inq?.type}</td>
                  <td>{inq?.phone}</td>
                  <td>{new Date(inq.created_at).toLocaleString()}</td>
                  <td colSpan={6}>{inq?.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .body {
            padding-top: 30px;
            min-height: 650px;
          }
          header {
            margin-bottom: 20px;
            text-align: center;
          }
          .inquiry-container {
            box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            overflow: auto;
            height: 500px !important;
            font-family: ${ff} !important;
          }
          .table {
            min-width: 1000px;
          }
          h4 {
            font-family: ${ff};
            font-size: 1.6rem;
            font-weight: 600;
          }
          .table-header {
            position: static !important;
          }

          .inquiry-container thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            color: white;
            font-family: ${ff};
            font-size: 1.2rem;
            background-color: #444;
          }
          .inquiry-container tbody {
            font-weight: 500;
          }
          .msg {
            width: 250px;
          }

          .filters input {
            font-family: ${ff};
            outline: none !important;
            border-radius: 5px !important;
          }
        `}
      </style>
    </AdminWrapper>
  );
}

export const getServerSideProps = async (content) => {
  const inquiries = await prisma.CustomerQuery.findMany();
  //sort by datetime
  const sortedInquiries = inquiries.sort((a, b) => b.created_at - a.created_at);

  // console.log(new Date(sortedInquiries[0].created_at).toLocaleString());
  return {
    //datetime JSON error
    props: { inquiries: JSON.parse(JSON.stringify(sortedInquiries)) },
  };
};
