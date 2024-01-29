import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { slugField } from "../../fields/slug";
import { revalidateActivities } from "./hooks/revalidateActivities";

export const ActivityGroups: CollectionConfig = {
  slug: "activityGroups",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["slug", "title", "images"],
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
      name: "title",
      type: "text",
      required: true,
    },

    {
      name: "images",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    slugField(),
  ],
};
