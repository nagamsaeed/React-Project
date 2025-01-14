import React, { memo } from "react";
import { node, func, string, number, object } from "prop-types";
import { Grid2, Box, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import FormButton from "../components/FormButton";
import { useNavigate } from "react-router-dom";

function Form({
    title = "",
    onSubmit,
    onReset,
    disabled = () => false, // ברירת מחדל לפונקציה שמחזירה false
    to = "/",
    color = "inherit",
    spacing = 1,
    styles = {},
    children,
}) {
    const navigate = useNavigate();

    // אם לא הוגדר disabled, השתמש בפונקציה שתחזיר false כברירת מחדל
    const isDisabled = disabled();

    return (
        <Box
            component="form"
            color={color}
            sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
            onSubmit={onSubmit}
            autoComplete="off"
            noValidate
        >
            <Typography align="center" variant="h5" component="h1" mb={2}>
                {title.toUpperCase()}
            </Typography>

            <Grid2 container spacing={spacing}>
                {children}
            </Grid2>
            <Grid2 container spacing={1} my={2} direction="row" width="100%">
                <Grid2 xs={12} sm={6}>
                    <FormButton
                        node="cancel"
                        color="error"
                        component="div"
                        variant="outlined"
                        onClick={() => navigate(to)}
                    />
                </Grid2>
                <Grid2 xs={12} sm={6}>
                    <FormButton
                        node={<LoopIcon />}
                        component="div"
                        variant="outlined"
                        onClick={onReset}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <FormButton
                        node="Submit"
                        variant="outlined"
                        onClick={onSubmit}
                        disabled={isDisabled} // השתמשו כאן במשתנה שנקבע לעיל
                        size="large"
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
}

Form.propTypes = {
    children: node.isRequired,
    onSubmit: func.isRequired,
    color: string,
    to: string,
    spacing: number,
    onReset: func.isRequired,
    disabled: func, // אינה חובה עכשיו
    title: string.isRequired,
    styles: object,
};

export default memo(Form);
