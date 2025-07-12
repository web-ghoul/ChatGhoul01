type UserTypes = {
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

interface AvatarTypes {
  _id: string;
  url: string;
  name: string;
  gender: "male" | "female"
}

interface ChatThemeTypes {
  _id: string;
  url: string;
  name: string;
}

export type { AvatarTypes, ChatThemeTypes, UserTypes };

