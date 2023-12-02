import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  icon?: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const specialClass = icon && "storybook-button--special";
  return (
    <button
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        specialClass,
      ].join(" ")}
      {...props}
    >
      {label}
      {icon && (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 -0.000244141C6.71573 -0.000244141 0 6.71548 0 14.9998C0 23.284 6.71573 29.9998 15 29.9998C23.2843 29.9998 30 23.284 30 14.9998C30 6.71548 23.2843 -0.000244141 15 -0.000244141ZM11.702 7.04809C12.5554 7.00926 12.8281 6.99976 15.0007 6.99976H14.9983C17.1716 6.99976 17.4433 7.00926 18.2966 7.04809C19.1483 7.08709 19.73 7.22192 20.24 7.41976C20.7666 7.62393 21.2116 7.89727 21.6567 8.34227C22.1017 8.78694 22.375 9.23328 22.58 9.75945C22.7767 10.2681 22.9117 10.8495 22.9517 11.7011C22.99 12.5545 23 12.8271 23 14.9998C23 17.1725 22.99 17.4445 22.9517 18.2979C22.9117 19.1492 22.7767 19.7307 22.58 20.2396C22.375 20.7656 22.1017 21.2119 21.6567 21.6566C21.2121 22.1016 20.7665 22.3756 20.2405 22.5799C19.7315 22.7778 19.1495 22.9126 18.2978 22.9516C17.4444 22.9904 17.1726 22.9999 14.9998 22.9999C12.8272 22.9999 12.5547 22.9904 11.7014 22.9516C10.8499 22.9126 10.2684 22.7778 9.75936 22.5799C9.23352 22.3756 8.78719 22.1016 8.34268 21.6566C7.89784 21.2119 7.62451 20.7656 7.42 20.2394C7.22234 19.7307 7.0875 19.1494 7.04833 18.2977C7.00967 17.4444 7 17.1725 7 14.9998C7 12.8271 7.01 12.5543 7.04817 11.701C7.0865 10.8496 7.2215 10.2681 7.41984 9.75928C7.62484 9.23328 7.89818 8.78694 8.34318 8.34227C8.78785 7.89743 9.23419 7.6241 9.76036 7.41976C10.269 7.22192 10.8504 7.08709 11.702 7.04809Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7341 8.44137H14.7341L15.0008 8.44145C17.1368 8.44145 17.39 8.44912 18.2335 8.48745C19.0135 8.52312 19.4368 8.65346 19.7188 8.76296C20.0922 8.90796 20.3583 9.08129 20.6382 9.3613C20.9182 9.6413 21.0915 9.90797 21.2368 10.2813C21.3464 10.563 21.4769 10.9863 21.5124 11.7663C21.5507 12.6097 21.559 12.863 21.559 14.998C21.559 17.133 21.5507 17.3864 21.5124 18.2297C21.4767 19.0097 21.3464 19.4331 21.2368 19.7147C21.0918 20.0881 20.9182 20.3539 20.6382 20.6337C20.3582 20.9137 20.0923 21.0871 19.7188 21.2321C19.4372 21.3421 19.0135 21.4721 18.2335 21.5078C17.3901 21.5461 17.1368 21.5544 15.0008 21.5544C12.8646 21.5544 12.6114 21.5461 11.7681 21.5078C10.9881 21.4718 10.5647 21.3414 10.2826 21.2319C9.90923 21.0869 9.64256 20.9136 9.36256 20.6336C9.08256 20.3536 8.90922 20.0876 8.76389 19.7141C8.65439 19.4324 8.52388 19.0091 8.48838 18.2291C8.45005 17.3857 8.44238 17.1324 8.44238 14.996C8.44238 12.8597 8.45005 12.6077 8.48838 11.7643C8.52405 10.9843 8.65439 10.561 8.76389 10.279C8.90889 9.90564 9.08256 9.63897 9.36256 9.35896C9.64256 9.07896 9.90923 8.90562 10.2826 8.76029C10.5646 8.65029 10.9881 8.52029 11.7681 8.48445C12.5061 8.45112 12.7921 8.44112 14.2831 8.43945V8.44145C14.4225 8.44124 14.5724 8.4413 14.7341 8.44137ZM19.2711 9.77011C18.7411 9.77011 18.3111 10.1996 18.3111 10.7298C18.3111 11.2598 18.7411 11.6898 19.2711 11.6898C19.8011 11.6898 20.2311 11.2598 20.2311 10.7298C20.2311 10.1998 19.8011 9.76978 19.2711 9.76978V9.77011ZM10.8924 15C10.8924 12.7312 12.7318 10.8917 15.0006 10.8916C17.2694 10.8916 19.1084 12.7311 19.1084 15C19.1084 17.2688 17.2696 19.1075 15.0007 19.1075C12.7319 19.1075 10.8924 17.2688 10.8924 15Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0007 12.3333C16.4734 12.3333 17.6674 13.5271 17.6674 14.9999C17.6674 16.4726 16.4734 17.6666 15.0007 17.6666C13.5278 17.6666 12.334 16.4726 12.334 14.9999C12.334 13.5271 13.5278 12.3333 15.0007 12.3333V12.3333Z"
            fill="black"
          />
        </svg>
      )}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
