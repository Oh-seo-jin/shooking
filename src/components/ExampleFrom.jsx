import { Component } from "react";
import { useForm } from "react-hook-form";

export default function NameForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "onBlur"
  });

  /* 함수 정의 */
  const onSubmit = (data) => {
    console.log("입력 정보", data);
    alert("제출완료");
  }
  console.log(errors)
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          이름:
          <input type="text" {...register("name", {required: "필수 입력 사항입니다", pattern: {value: /^[0-9]+$/, message:"숫자만!"}})}/>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
};