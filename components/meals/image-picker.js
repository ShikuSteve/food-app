"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const image = useRef();

  function handlePickClick() {
    return image.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
    console.log(pickedImage);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <input
          ref={image}
          className={classes.input}
          type="file"
          id={name}
          required
          name={name}
          accept="image/png,image/jpeg"
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

// "use client";

// import { useRef, useState } from "react";
// import classes from "./image-picker.module.css";
// import Image from "next/image";

// export default function ImagePicker({ label, name, onImagePick }) {
//   const [pickedImage, setPickedImage] = useState();
//   const imageInputRef = useRef();

//   function handlePickClick() {
//     imageInputRef.current.click();
//   }

//   function handleImageChange(event) {
//     const file = event.target.files[0];

//     if (!file) {
//       setPickedImage(null);
//       onImagePick(null); // Notify parent about no file picked
//       return;
//     }

//     const fileReader = new FileReader();

//     fileReader.onload = () => {
//       setPickedImage(fileReader.result);
//       onImagePick(file); // Pass the file to the parent
//     };

//     fileReader.readAsDataURL(file);
//   }

//   return (
//     <div className={classes.picker}>
//       <label htmlFor={name}>{label}</label>
//       <div className={classes.controls}>
//         <div className={classes.preview}>
//           {!pickedImage && <p>No image picked yet</p>}
//           {pickedImage && (
//             <Image
//               src={pickedImage}
//               alt="The image selected by the user"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           )}
//         </div>
//         <input
//           ref={imageInputRef} // Use the ref to get the input
//           className={classes.input}
//           type="file"
//           id={name}
//           name={name}
//           accept="image/png,image/jpeg"
//           onChange={handleImageChange}
//         />
//         <button
//           className={classes.button}
//           type="button"
//           onClick={handlePickClick}
//         >
//           Pick an Image
//         </button>
//       </div>
//     </div>
//   );
// }
