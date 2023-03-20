export interface currentUserProfile {
    id: number;
    username: string;
    email: string;
    avatar: {
      url : string;
    };
    role: string;
    is_banned : boolean;
    created_at: string;
    updated_at: string | null;
  }

export interface UserProfile {
    id: number;
    username: string;
    email: string;
    avatar: {
      url: string;
    };
    role: string;
    is_banned : boolean,
    created_at: string;
    updated_at: string | null;
    have_subscribed: boolean
  }

  export interface Post {
    id: number;
    message: string;
    author: number;
    created_at: string;
    updated_at: string | null;
    user: UserProfile;
    comments_count: string;
    likes_count: string;
  }

  export interface Comment {
    id: number;
    message: string;
    author: number;
    post_id: number;
    created_at: string;
    updated_at: string | null;
    user: UserProfile;
    likes_count: string;
  }

  export interface Notif {
    id: number;
    message: string;
    author: number;
    created_at: string;
    user: UserProfile;
  }
  