import {BookingFormModalData} from './types/BookingFormModalData';

export interface BookingFormModalProps {
  name: string;
  isOpen: boolean;
  onSubmit: (data: BookingFormModalData) => void;
  onClose: () => void;
}