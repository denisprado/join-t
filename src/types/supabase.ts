import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "./generated.supabase";
export type { Json } from "./generated.supabase";

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        terms_groups: {
          Row: {
            // id is a primary key in public.movies, so it must be `not null`
            id: string;
            terms: { title: string; value: string }[] | null;
          };
        };
      };
    };
  }
>;
