import { useCallback } from "react";
import { FormControlLabel, Checkbox, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
const LogIn = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <div className={styles.background} />
      <div className={styles.box}>
        <div className={styles.backdrop}>
          <div className={styles.frame}>
            <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          </div>
          <div className={styles.frame}>
            <div className={styles.invoiceManagementSystem}>
              Invoice Management System
            </div>
          </div>
        </div>
        <form className={styles.frame2}>
          <div className={styles.rememberMe}>
            <FormControlLabel
              className={styles.tickbox}
              label=""
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
            <div className={styles.rememberMe1}>Remember Me</div>
          </div>
          <div className={styles.password}>
            <div className={styles.password1}>Password</div>
            <TextField
              className={styles.input}
              color="primary"
              variant="filled"
              type="password"
              label=""
              placeholder="password here"
              size="medium"
              margin="none"
            />
          </div>
          <div className={styles.username}>
            <div className={styles.username1}>Username</div>
            <TextField
              className={styles.input}
              color="primary"
              variant="standard"
              type="text"
              label=""
              placeholder="username here"
              size="medium"
              margin="none"
            />
          </div>
          <div className={styles.login}>Login</div>
          <Button
            className={styles.login1}
            sx={{ width: 314 }}
            variant="contained"
            color="primary"
            onClick={onLoginClick}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
