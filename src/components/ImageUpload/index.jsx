import PropTypes from 'prop-types';
import { useState } from 'react';
import Portal from '../Portal/index';
import EditAvatarConfirmationPopup from '../EditAvatarConfirmationPopup';
import EditAvatarPopup from '../EditAvatarPopup';

const ImageUpload = ({ getImage, isOpen, onClose, round }) => {
  const [fileInput, setFileInput] = useState('');

  const getBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFileInput(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };

    return reader.result;
  };

  const handleFile = async (e) => {
    const file = e.currentTarget.files[0];
    // if(sizeLimit && file.size > props.sizeLimit)
    // {
    //     setStatusMessage("File is too large.");
    // }
    // else
    // {
    getBase64(file);
    // }
  };

  const handleChangeAvatar = (avatar) => {
    getImage((data) => ({ ...data, src: avatar }));
    setFileInput('');
  };

  const handleClickBack = () => {
    setFileInput('');
  };

  return (
    <Portal isOpened={isOpen}>
      {!fileInput ? (
        <EditAvatarPopup
          isOpen={isOpen}
          onClose={onClose}
          handleFile={handleFile}
        />
      ) : (
        <EditAvatarConfirmationPopup
          isOpen={isOpen}
          onBack={handleClickBack}
          imgSrc={fileInput}
          onClose={onClose}
          onSave={handleChangeAvatar}
          round={round}
        />
      )}
    </Portal>
  );
};

ImageUpload.propTypes = {
  getImage: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  round: PropTypes.bool,
};

ImageUpload.defaultProps = {
  getImage: () => {},
  isOpen: false,
  onClose: () => {},
  round: false,
};

export default ImageUpload;
