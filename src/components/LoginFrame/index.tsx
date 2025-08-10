import './styles.css';
import { FloatLabel } from "primereact/floatlabel";
import useAuth from "../../hooks/useAuth"
import { Password } from 'primereact/password';
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useEffect } from 'react';
import { handleValidStyle } from '../../utils/helpers';

interface UserAuthForm {
  email: string,
  password: string
}

export default function LoginFrame() {
  const { isAuthorized, email, token, id } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<UserAuthForm>({
    mode: "onTouched",
  })

  const onSubmit: SubmitHandler<UserAuthForm> = async (data: UserAuthForm) => {
    console.log(data)
  };

  useEffect(() => {
    reset();
  }, [])

  if (!isAuthorized)
    return (<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <span className='login-form__title'>Введите данные пользователя</span>
        <FloatLabel>
          <InputText
            id="email"
            tooltip={errors.email?.message}
            tooltipOptions={{ event: "focus", position: "bottom" }}
            className={handleValidStyle(errors.email)}
            {...register("email", {
              required: {
                value: true,
                message: "Обязательно к заполнению"
              }
            })}
          />
          <label htmlFor="email">Электронная почта</label>
        </FloatLabel>
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Обязательно к заполнению',
            minLength: {
              value: 8,
              message: "Минимум 8 символов"
            }
          }}
          render={({ field, fieldState }) => (
            <FloatLabel>
              <Password
                id={field.name}
                {...field}
                tooltip={errors.password?.message}
                tooltipOptions={{ event: "focus", position: "bottom" }}
                className={handleValidStyle(errors.password)}
                feedback={false}
              />
              <label htmlFor="password">Пароль</label>
            </FloatLabel>
          )}
        />
        <Button
          disabled={!isValid}
          label='Войти'
          type='submit' />
      </form>)

  return (<>
  </>)
}