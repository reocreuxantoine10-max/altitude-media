import React from 'react';
import { CGVModal, MentionsLegalesModal, PrivacyModal } from './LegalModals';

const MODALS = {
  cgv: CGVModal,
  legal: MentionsLegalesModal,
  privacy: PrivacyModal,
};

const LegalModalHost = ({ type, onClose }) => {
  const Modal = MODALS[type];
  return Modal ? <Modal open onOpenChange={(open) => !open && onClose()} /> : null;
};

export default LegalModalHost;
