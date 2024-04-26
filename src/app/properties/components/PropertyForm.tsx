"use client";

import { useState, Suspense } from "react";
import { create } from "./action";

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

const PropertyForm = () => {

    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

  const _renderModal = () => {

    if(!modal) return null
  
    return (
      <div>
          <Link href={pathname}>
                <button>close</button>
        </Link>
   
        <form>
        <button
          type="button"
          onClick={() => {
            create();
          }}
        >
          Create ss
        </button>
        <label htmlFor="property_name">Property Name</label>

        <input
          id="property_name"
            name="property_name"
        />
        <label htmlFor="description">City</label>
        <textarea
          id="description"
          name="description"
       
        />
        <button type="submit">Save</button>
      </form>
      </div>
    );
  };

  return <Suspense fallback={<div>Loading...</div>}>{_renderModal()}</Suspense>;
};

export default PropertyForm;
