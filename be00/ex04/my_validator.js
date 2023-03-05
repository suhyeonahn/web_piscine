const emailValidator = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const usernameValidator = (username) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
  };
  
  const usernameLengthValidator = (username, minLength) => {
    return username.length >= minLength;
  };
  
  const passwordValidator = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return regex.test(password);
  };
  
  const passwordLengthValidator = (password, minLength) => {
    return password.length >= minLength;
  };
  
  module.exports = {
    emailValidator,
    usernameValidator,
    usernameLengthValidator,
    passwordValidator,
    passwordLengthValidator,
  };
  