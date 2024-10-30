import {BookingFormModalData} from './BookingFormModalData';

export interface BookingFormModalProps {
  name: string;
  isOpen: boolean;
  onSubmit: (data: BookingFormModalData) => void;
  onClose: () => void;
}