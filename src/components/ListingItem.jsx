import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing}) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] object-cover hover:scale-105 transition-scale duration-300 w-full"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2 w-full">
        <p className="truncate text-xl font-semibold text-slate-700">
          {listing.name}
        </p>
        <div className="flex truncate gap-2 items-center">
          <MdLocationOn className="text-green-700 h-4 w-4" />
          <p className="text-sm text-gray-600 truncate w-full">
            {listing.address}
          </p>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {listing.description}
        </p>

        <p className="text-green-700 mt-2 font-semibold flex items-center">
          Rs{" "}
          {listing.offer
            ? listing.discountedPrice.toLocaleString("en-US")
            : listing.regularPrice.toLocaleString("en-US")}
          {listing.type === "rent" && "/month"}
        </p>
        <div className="font-bold text-xsm text-slate-700 flex flex-wrap gap-4  ">
          <div className="">
            {listing.bedrooms > 1
              ? `${listing.bedrooms} beds`
              : `${listing.bedrooms} bed`}
          </div>
          <div className="">
            {listing.bathrooms > 1
              ? `${listing.bathrooms} baths`
              : `${listing.bathrooms} bath`}
          </div>
        </div>
      </div>
    </div>
  );
}
