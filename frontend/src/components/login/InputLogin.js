import { ErrorMessage } from "@hookform/error-message";

const InputLogin = (props) => {
  const {
    label,
    type,
    placeholder,
    register,
    required,
    name,
    errors,
    maxLength,
    regex,
    textLength,
    textRegex,
  } = props;

  return (
    <div className="">
      <label className="text-[#777777] text-[12px]">{label}</label>
      <input
        type={type}
        className="w-full border-[2px] placeholder:text-[16px] focus:border-blue-400 placeholder:font-semibold p-2 rounded-md outline-none"
        placeholder={placeholder}
        {...register(name, {
          required: {
            value: required,
            message: "Vui lòng điền thông tin",
          },
          maxLength: {
            value: maxLength,
            message: `${textLength}`,
          },
          pattern: {
            value: regex,
            message: `${textRegex}`,
          },
        })}
      ></input>

      <ErrorMessage errors={errors} name={name} />
    </div>
  );
};

export default InputLogin;