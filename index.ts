// User-related types
export interface User {
  id: string;
  email: string;
  displayName: string;
  bio?: string;
  profileImage?: string;
  createdAt: Date;
  hasPaid: boolean;
  topics: string[];
  location?: GeoPoint;
  lastLocationUpdate?: Date;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

// Topic-related types
export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  membersCount: number;
}

export interface CustomTopic extends Topic {
  createdBy: string;
  createdAt: Date;
  members: string[];
  isPrivate: boolean;
  invitedUsers?: string[];
}

// Chat-related types
export interface Chat {
  id: string;
  participants: string[];
  createdAt: Date;
  lastMessage?: string;
  lastMessageTimestamp?: Date;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  timestamp: Date;
  read: boolean;
}

// Auth-related types
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// Location-related types
export interface LocationState {
  currentLocation: GeoPoint | null;
  isLoading: boolean;
  error: string | null;
  isPermissionGranted: boolean;
  isLocationSharingEnabled: boolean;
}

// Meetup-related types
export interface Meetup {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: Date;
  organizer: string;
  topic: string;
  attendees: string[];
}
