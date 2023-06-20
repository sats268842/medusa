import React from "react"
import { IconProps } from ".."

const IconSparklesSolid: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50004 3.75C7.63584 3.75003 7.76794 3.79429 7.87635 3.87608C7.98475 3.95788 8.06357 4.07275 8.10087 4.20333L8.77837 6.575C8.92425 7.08577 9.19791 7.55092 9.57352 7.92652C9.94912 8.30213 10.4143 8.57579 10.925 8.72167L13.2967 9.39917C13.4272 9.43655 13.542 9.5154 13.6237 9.6238C13.7054 9.7322 13.7496 9.86426 13.7496 10C13.7496 10.1357 13.7054 10.2678 13.6237 10.3762C13.542 10.4846 13.4272 10.5635 13.2967 10.6008L10.925 11.2783C10.4143 11.4242 9.94912 11.6979 9.57352 12.0735C9.19791 12.4491 8.92425 12.9142 8.77837 13.425L8.10087 15.7967C8.06349 15.9272 7.98464 16.0419 7.87624 16.1236C7.76784 16.2054 7.63578 16.2496 7.50004 16.2496C7.36429 16.2496 7.23224 16.2054 7.12384 16.1236C7.01544 16.0419 6.93659 15.9272 6.8992 15.7967L6.2217 13.425C6.07583 12.9142 5.80217 12.4491 5.42656 12.0735C5.05095 11.6979 4.5858 11.4242 4.07504 11.2783L1.70337 10.6008C1.57288 10.5635 1.4581 10.4846 1.37639 10.3762C1.29468 10.2678 1.25049 10.1357 1.25049 10C1.25049 9.86426 1.29468 9.7322 1.37639 9.6238C1.4581 9.5154 1.57288 9.43655 1.70337 9.39917L4.07504 8.72167C4.5858 8.57579 5.05095 8.30213 5.42656 7.92652C5.80217 7.55092 6.07583 7.08577 6.2217 6.575L6.8992 4.20333C6.93651 4.07275 7.01532 3.95788 7.12373 3.87608C7.23214 3.79429 7.36423 3.75003 7.50004 3.75ZM15 1.25C15.1395 1.24992 15.2749 1.29647 15.3848 1.38224C15.4948 1.46801 15.5729 1.58807 15.6067 1.72333L15.8217 2.58667C16.0184 3.37 16.63 3.98167 17.4134 4.17833L18.2767 4.39333C18.4122 4.4269 18.5326 4.50488 18.6186 4.61483C18.7047 4.72479 18.7514 4.86038 18.7514 5C18.7514 5.13962 18.7047 5.27521 18.6186 5.38517C18.5326 5.49512 18.4122 5.5731 18.2767 5.60667L17.4134 5.82167C16.63 6.01833 16.0184 6.63 15.8217 7.41333L15.6067 8.27667C15.5731 8.41219 15.4952 8.53257 15.3852 8.61861C15.2753 8.70465 15.1397 8.7514 15 8.7514C14.8604 8.7514 14.7248 8.70465 14.6149 8.61861C14.5049 8.53257 14.4269 8.41219 14.3934 8.27667L14.1784 7.41333C14.0822 7.02869 13.8833 6.67742 13.603 6.39706C13.3226 6.11671 12.9713 5.91782 12.5867 5.82167L11.7234 5.60667C11.5878 5.5731 11.4675 5.49512 11.3814 5.38517C11.2954 5.27521 11.2486 5.13962 11.2486 5C11.2486 4.86038 11.2954 4.72479 11.3814 4.61483C11.4675 4.50488 11.5878 4.4269 11.7234 4.39333L12.5867 4.17833C12.9713 4.08218 13.3226 3.88329 13.603 3.60294C13.8833 3.32258 14.0822 2.97131 14.1784 2.58667L14.3934 1.72333C14.4272 1.58807 14.5053 1.46801 14.6152 1.38224C14.7252 1.29647 14.8606 1.24992 15 1.25ZM13.75 12.5C13.8813 12.4999 14.0093 12.5412 14.1158 12.6179C14.2223 12.6946 14.3019 12.803 14.3434 12.9275L14.6717 13.9133C14.7967 14.2858 15.0884 14.5792 15.4617 14.7033L16.4475 15.0325C16.5717 15.0742 16.6796 15.1538 16.756 15.2601C16.8325 15.3664 16.8736 15.4941 16.8736 15.625C16.8736 15.7559 16.8325 15.8836 16.756 15.9899C16.6796 16.0962 16.5717 16.1758 16.4475 16.2175L15.4617 16.5467C15.0892 16.6717 14.7959 16.9633 14.6717 17.3367L14.3425 18.3225C14.3009 18.4466 14.2212 18.5546 14.1149 18.631C14.0086 18.7075 13.881 18.7486 13.75 18.7486C13.6191 18.7486 13.4915 18.7075 13.3851 18.631C13.2788 18.5546 13.1992 18.4466 13.1575 18.3225L12.8284 17.3367C12.767 17.1527 12.6637 16.9856 12.5265 16.8485C12.3894 16.7114 12.2223 16.6081 12.0384 16.5467L11.0525 16.2175C10.9284 16.1758 10.8205 16.0962 10.744 15.9899C10.6676 15.8836 10.6265 15.7559 10.6265 15.625C10.6265 15.4941 10.6676 15.3664 10.744 15.2601C10.8205 15.1538 10.9284 15.0742 11.0525 15.0325L12.0384 14.7033C12.4109 14.5783 12.7042 14.2867 12.8284 13.9133L13.1575 12.9275C13.199 12.8031 13.2785 12.6949 13.3848 12.6182C13.4911 12.5414 13.6189 12.5001 13.75 12.5Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-subtle dark:tw-fill-medusa-icon-subtle-dark"
        }
      />
    </svg>
  )
}

export default IconSparklesSolid
