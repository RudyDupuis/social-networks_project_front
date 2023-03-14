export interface accountProfile {
    id: number;
    username: string;
    email: string;
    avatar_url: string;
    role: string;
    created_at: string;
    updated_at: string | null;
    posts: Post[];
    posts_count: string;
    subscriptions: UserProfile[];
  }

export interface UserProfile {
    id: number;
    username: string;
    email: string;
    avatar_url: string;
    role: string;
    created_at: string;
    updated_at: string | null;
    posts: Post[];
    posts_count: string;
  }
  
  export interface Post {
    id: number;
    message: string;
    author: number;
    created_at: string;
    updated_at: string | null;
    user: UserProfile;
    comments: Comment[];
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
  