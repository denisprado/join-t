import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { slugField } from "../../fields/slug";
import { revalidateActivities } from "./hooks/revalidateActivities";

export const Activities: CollectionConfig = {
  slug: "activities",
  admin: {
    useAsTitle: "name",
    defaultColumns: [
      "name",
      "description",
      "images",
      "videos",
      "schedules",
      "teatcher",
      "activityGroups",
    ],
    preview: (doc) => {
      return `${
        process.env.PAYLOAD_PUBLIC_SERVER_URL
      }/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${
          doc.slug !== "home" ? doc.slug : ""
        }`
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
  },
  hooks: {
    afterChange: [revalidateActivities],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "schedules",
      type: "textarea",
      required: true,
    },
    {
      name: "teacher",
      type: "textarea",
      required: true,
    },
    {
      name: "images",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "videos",
      type: "upload",
      required: false,
      relationTo: "media",
    },
    {
      name: "activityGroups",
      type: "relationship",
      relationTo: "activityGroups",
    },

    slugField(),
  ],
};
