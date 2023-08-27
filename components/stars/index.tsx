import React from "react";

const Stars = ({ rating,fill  }: { rating: number,fill:string}) => {
  const ratingStar = Array.from({ length: 5 }, (v, index) => {
    return (
      <span key={index}>
        {rating >= index + 0.8 ? (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={16}
            height={16}
            viewBox="0 0 512 512"
            fill={fill ? fill : "#FF8682"}
          >
            <polygon
              id="XMLID_3_"
              points="256,403.9 414.6,499.6 372,319.8 512,198.4 327.8,182.5 256,12.4 184.2,182.5 0,198.4 140,319.8 
          97.4,499.6"
            />
          </svg>
        ) : rating >= index + 0.3 && rating < index + 0.8 ? (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width={16}
            height={16}
          >
            <path
              id="XMLID_6_"
              d="M365,296.1l79.2-77.4l-110-15.8l-20.5-2.8l-9.3-18.6l-48.5-98.8V379l18.6,9.3l97.9,52.2l-18.6-109l-3.7-20.5
		L365,296.1z M503.9,215.9L392,325l26.1,153.8c0.9,6.5,0,12.1-1.9,15.8c-1.9,3.7-5.6,5.6-10.3,5.6c-3.7,0-7.5-0.9-12.1-3.7
		l-137.9-72.7L118,496.5c-4.7,2.8-8.4,3.7-12.1,3.7c-4.7,0-8.4-1.9-10.3-5.6c-1.9-3.7-2.8-9.3-1.9-15.8L119.9,325L8,215.9
		c-6.5-6.5-9.3-13-7.5-18.6S8,188,17.3,187l154.7-22.4l69-139.8c3.7-8.4,9.3-13,14.9-13c5.6,0,11.2,4.7,14.9,13l69,139.8L494.6,187
		c9.3,1.9,14.9,4.7,16.8,10.3C513.2,202.9,511.3,209.4,503.9,215.9z"
              fill={fill ? fill : "#FF8682"}
            />
          </svg>
        ) : (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width={20}
            height={19}
          >
            <path
              id="XMLID_5_"
              d="M512,198.4l-177.2-25.7L256,12.4l-78.8,160.3L0,198.4l128.4,124.9L98.3,499.6L256,416.3l158.6,83.3
		l-30.1-176.3L512,198.4z M256,376.5l-111.6,58.5L165.6,310l-90.4-88.6l124.9-17.7L256,91.2l55.8,113.4l124.9,17.7l-90.4,88.6
		l21.3,124.9L256,376.5z"
              fill={fill ? fill : "#FF8682"}
            />
          </svg>
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1">
      {ratingStar}
    </div>
  );
};
export default Stars;


