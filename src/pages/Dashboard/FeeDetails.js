import React from "react";
import AppLayout from "./AppLayout";

export default function FeeDetails() {
  return (
    <div>
      <AppLayout>
        <form id="lockform">
          <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">Fee Details</h1>
          </div>
        </form>
      </AppLayout>
    </div>
  );
}
