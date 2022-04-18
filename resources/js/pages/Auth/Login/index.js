import Input from '@common/Input';
import Button from '@common/Button';
import useLogin from './hook';

const Login = () => {
  const { buttonText, input, setInput, formErrors, login } = useLogin();

  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Username"
          value={input.username}
          onChange={e => setInput(input => ({ ...input, username: e.target.value }))}
        />
        {formErrors.username && (
          <span className="text-red text-[15px] ml-1">{formErrors.username}</span>
        )}
      </div>
      <div className="mb-4">
        <Input
          type="password"
          placeholder="Password"
          value={input.password}
          onChange={e => setInput(input => ({ ...input, password: e.target.value }))}
        />
        {formErrors.password && (
          <span className="text-red text-[15px] ml-1">{formErrors.password}</span>
        )}
      </div>
      <Button
        label={buttonText}
        onClick={() => login()}
      />
    </div>
  );
}

export default Login;