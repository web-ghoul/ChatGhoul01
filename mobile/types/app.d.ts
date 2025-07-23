interface UserTypes {
  _id: string;
  username: string;
  email: string;
  phone: string;
  gender: "male" | "female";
  about: string;
  avatar: string;
  chat_theme: string;
  last_seen: date
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

interface MessageTypes {
  _id: string;
  msg: string;
  sender: UserTypes;
  chatRoom: ChatRoomTypes
  is_read: boolean;
  is_send: boolean;
  is_save: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

interface ChatRoomTypes {
  _id: string;
  participants: UserTypes[];
  lastMessage: MessageTypes;
  createdAt: Date;
  updatedAt: Date;
}

export type { AvatarTypes, ChatRoomTypes, ChatThemeTypes, MessageTypes, UserTypes };

