export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      activity: {
        Row: {
          activity_group_id: string | null;
          description: string | null;
          id: string;
          images: string[] | null;
          name: string | null;
          schedules: string | null;
          teacher: string | null;
          videos: string[] | null;
        };
        Insert: {
          activity_group_id?: string | null;
          description?: string | null;
          id: string;
          images?: string[] | null;
          name?: string | null;
          schedules?: string | null;
          teacher?: string | null;
          videos?: string[] | null;
        };
        Update: {
          activity_group_id?: string | null;
          description?: string | null;
          id?: string;
          images?: string[] | null;
          name?: string | null;
          schedules?: string | null;
          teacher?: string | null;
          videos?: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "activity_activity_group_id_fkey";
            columns: ["activity_group_id"];
            isOneToOne: false;
            referencedRelation: "activity_groups";
            referencedColumns: ["id"];
          }
        ];
      };
      activity_groups: {
        Row: {
          id: string;
          image: string[] | null;
          title: string | null;
        };
        Insert: {
          id: string;
          image?: string[] | null;
          title?: string | null;
        };
        Update: {
          id?: string;
          image?: string[] | null;
          title?: string | null;
        };
        Relationships: [];
      };
      plan_types: {
        Row: {
          disclaimer: string | null;
          id: string;
          title: string | null;
        };
        Insert: {
          disclaimer?: string | null;
          id: string;
          title?: string | null;
        };
        Update: {
          disclaimer?: string | null;
          id?: string;
          title?: string | null;
        };
        Relationships: [];
      };
      plans: {
        Row: {
          activity_group_id: string | null;
          default_selected_plan: boolean | null;
          fixed: boolean | null;
          id: string;
          plan_type_id: string | null;
          prices: Json | null;
          terms_group_id: string | null;
          title: string | null;
        };
        Insert: {
          activity_group_id?: string | null;
          default_selected_plan?: boolean | null;
          fixed?: boolean | null;
          id: string;
          plan_type_id?: string | null;
          prices?: Json | null;
          terms_group_id?: string | null;
          title?: string | null;
        };
        Update: {
          activity_group_id?: string | null;
          default_selected_plan?: boolean | null;
          fixed?: boolean | null;
          id?: string;
          plan_type_id?: string | null;
          prices?: Json | null;
          terms_group_id?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "plans_activity_group_id_fkey";
            columns: ["activity_group_id"];
            isOneToOne: false;
            referencedRelation: "activity_groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "plans_plan_type_id_fkey";
            columns: ["plan_type_id"];
            isOneToOne: false;
            referencedRelation: "plan_types";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "plans_terms_group_id_fkey";
            columns: ["terms_group_id"];
            isOneToOne: false;
            referencedRelation: "terms_groups";
            referencedColumns: ["id"];
          }
        ];
      };
      profile: {
        Row: {
          address: string | null;
          coordinates: string | null;
          email: string | null;
          instagram: string | null;
          whatsapp: string | null;
        };
        Insert: {
          address?: string | null;
          coordinates?: string | null;
          email?: string | null;
          instagram?: string | null;
          whatsapp?: string | null;
        };
        Update: {
          address?: string | null;
          coordinates?: string | null;
          email?: string | null;
          instagram?: string | null;
          whatsapp?: string | null;
        };
        Relationships: [];
      };
      quote: {
        Row: {
          author: string | null;
          avatar: string | null;
          excerpt: string | null;
          id: string;
          quote: string | null;
        };
        Insert: {
          author?: string | null;
          avatar?: string | null;
          excerpt?: string | null;
          id: string;
          quote?: string | null;
        };
        Update: {
          author?: string | null;
          avatar?: string | null;
          excerpt?: string | null;
          id?: string;
          quote?: string | null;
        };
        Relationships: [];
      };
      terms_groups: {
        Row: {
          id: string;
          title: string;
          terms: { title: string; value: string }[] | null;
        };
        Insert: {
          id: string;
          title: string;
          terms?: { title: string; value: string }[] | null;
        };
        Update: {
          id?: string;
          title: string;
          terms?: { title: string; value: string }[] | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
