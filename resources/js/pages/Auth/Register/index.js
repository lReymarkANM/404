import useRegister from './hook';
import Button from '@common/Button';
import Input from '@common/Input';

const Register = () => {
  const { buttonText, input, setInput, formErrors, register } = useRegister();

  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Firstname"
          value={input.firstname}
          onChange={e => setInput(input => ({ ...input, firstname: e.target.value }))}
        />
        {formErrors.firstname && (
          <span className="text-red text-[15px] ml-1">{formErrors.firstname}</span>
        )}
      </div>
      <div className="mb-4">
        <Input
          placeholder="Lastname"
          value={input.lastname}
          onChange={e => setInput(input => ({ ...input, lastname: e.target.value }))}
        />
        {formErrors.lastname && (
          <span className="text-red text-[15px] ml-1">{formErrors.lastname}</span>
        )}
      </div>
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
      <div className="mb-4">
        <Input
          type="password"
          placeholder="Confirm Password"
          value={input.confirmPassword}
          onChange={e => setInput(input => ({ ...input, confirmPassword: e.target.value }))}
        />
        {formErrors.confirmPassword && (
          <span className="text-red text-[15px] ml-1">{formErrors.confirmPassword}</span>
        )}
      </div>
      <Button
        label={buttonText}
        onClick={() => register()}
      />
    </div>
  );
}

export default Register;