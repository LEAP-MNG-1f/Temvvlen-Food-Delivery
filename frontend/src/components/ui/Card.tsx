type CardPropsType = {
  img: string;
  title: string;
  price: number;
  saletag?: number;
  discount?: number;
};

export const Card = (props: CardPropsType) => {
  return (
    <div className="flex flex-col gap-[14px] max-w-[282px] w-full relative">
      <img
        src={props.img}
        className="w-[282px] h-[186px] shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.10),0px_6px_10px_0px_rgba(0,0,0,0.07)] rounded-2xl object-cover object-center"
      />
      {/* <div className="absolute px-4 py-1 rounded-2xl border border-white bg-[#18BA51] backdrop-blur-[50px] top-4 right-4">
        <p className="text-white font-poppins text-lg font-semibold leading-[27px]">
          {props.saletag}%
        </p>
      </div> */}
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
          {props.title}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
            {props.price}₮
          </p>
          {/* <p className="text-[#272727] font-poppins text-lg font-normal leading-[27px] line-through">
            {props.discount}₮
          </p> */}
        </div>
      </div>
    </div>
  );
};

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// type CardPropsType = {
//   img: string;
//   title: string;
//   price: number;
//   saletag?: number;
//   discount?: number;
// };

// export default function FoodCard(props: CardPropsType) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <div
//         className="flex flex-col gap-[14px] max-w-[282px] w-full relative"
//         onClick={handleClickOpen}
//       >
//         <img
//           src={props.img}
//           className="w-[282px] h-[186px] shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.10),0px_6px_10px_0px_rgba(0,0,0,0.07)] rounded-2xl object-cover object-center"
//         />
//         {/* <div className="absolute px-4 py-1 rounded-2xl border border-white bg-[#18BA51] backdrop-blur-[50px] top-4 right-4">
//         <p className="text-white font-poppins text-lg font-semibold leading-[27px]">
//           {props.saletag}%
//         </p>
//       </div> */}
//         <div className="flex flex-col gap-[2px]">
//           <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
//             {props.title}
//           </p>
//           <div className="flex items-center gap-4">
//             <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
//               {props.price}₮
//             </p>
//             {/* <p className="text-[#272727] font-poppins text-lg font-normal leading-[27px] line-through">
//             {props.discount}₮
//           </p> */}
//           </div>
//         </div>
//       </div>
//       <Dialog open={open} onClose={handleClose}>
//         <div className="p-8 flex gap-[33px]">
//           <img
//             src={props.img}
//             className="w-[500px] h-[500px] object-cover object-center"
//           />
//           <div className="flex flex-col gap-8">
//             <div className="flex flex-col gap-[2px]">
//               <p className="text-[#000000] font-sans text-[28px] font-bold leading-[33px]">
//                 {props.title}
//               </p>
//               <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
//                 {props.price}₮
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending
//             anonymous location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions> */}
//       </Dialog>
//     </React.Fragment>
//   );
// }
