import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Hours from "../components/Hours";
import StaticMap from "../components/locationDetails/StaticMap";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "location",

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "photoGallery",
      "c_descriptionInfo",
    ],
    filter: {
      entityTypes: ["location"],
    },

    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : `${document.slug.toString()}`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.slug.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
    const {
        name,
        address,
        openTime,
        hours,
        mainPhone,
        geocodedCoordinate,
        services,
        description,
        photoGallery,
        c_descriptionInfo,
    } = document;

  return (
    <>
          {/* <h1 className="font-bold"> {name} </h1>
            <h2 className="font-title-text-font">
                {address.line1} <p>{address?.postalCode}</p>
            </h2>
            <p> {mainPhone}</p> */}

          <div>
              {photoGallery?.map((imgs: any) => {
                  return (
                      <div
                          className="w-full bg-img"
                          style={{ backgroundImage: `url('${imgs?.image?.url}')` }}
                      >
                          {/* <img src={imgs?.image?.url} alt="Sunset in the mountains" /> */}
                      </div>
                  );
              })}
        <div className="px-6 py-4 flex gap-3 flex justify-between">
                  <div className="font-bold text-xl mb-2">
                      <h1>{name}</h1>
                      <h2 className="text-gray-700 text-base">
                          {address.line1}
                          <p>
                              {address?.postalCode} , {address?.countryCode}
                          </p>
                      </h2>
                      <p>{mainPhone}</p>
          </div>
          <div>
            <StaticMap

              latitude={geocodedCoordinate?.latitude}
              longitude={geocodedCoordinate?.longitude}
            />
          </div>

          <div>
            <h2 className="text-black">Time Zone Store</h2>
            {hours && <Hours hours={hours} />}</div>
              </div>
              <p>{c_descriptionInfo?.description}</p>
          </div>
    </>
  );
};
export default Location;
