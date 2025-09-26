export interface Instance {
  name: string;
  id: string;
}

export interface SocialMediaModalProps {
  isOpen: boolean;
  icon: React.ReactNode;
  onClose: () => void;
  instances: Instance[];
  route: string;
}

export interface SocialMediaComponentProps {
  icon: React.ReactNode;
  type: string;
  instances: Instance[];
  route: string;
}