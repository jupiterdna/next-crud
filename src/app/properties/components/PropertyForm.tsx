"use client";

import { useState, Suspense } from "react";
import { submitForm } from "./action";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Modal from "@/components/Modal";

const PropertyForm = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  const _renderModal = () => {
    if (!modal) return null;

    return (
      <Modal isOpen={!!modal} title="Create Property">
        <div>
          <form>
            <div className="flex flex-col gap-y-2 mb-6"> 
              <label htmlFor="property_name">Property Name</label>
              <input
                className="p-2 rounded-md text-gray-600"
                id="property_name"
                name="property_name"
              />
            </div>
            <div className="flex flex-col gap-y-4 mb-5"> 
              <label htmlFor="description">Description</label>
              <textarea className="p-2 rounded-md text-gray-600 h-[170px]" id="description" name="description" />
            </div>
            <div>
                <button type="submit" formAction={submitForm}>Save</button>
            </div>
          </form>
        </div>
      </Modal>
    );
  };

  return <Suspense fallback={<div>Loading...</div>}>{_renderModal()}</Suspense>;
};

export default PropertyForm;
