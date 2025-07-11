type ProfileTypes = {
  id: string;
  username: string;
  email: string;
  phone: string;
  gender: "male" | "female";
  about: string;
  avatar: string;
  chat_theme: string;
  tour_status: "completed" | "undefined";
};

export type { ProfileTypes };

