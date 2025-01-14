import React, { memo } from "react";
import { string, bool, object, func } from "prop-types";
import { TextField, Grid2 } from "@mui/material";
import { makeFirstLetterCapital } from "../utils/algoMethods.js";

function Input({
    variant = "outlined",
    type = "text",
    name,
    data,
    label,
    required = true,
    error,
    handleChange,
    ...rest
}) {
    return (
        <>
            <Grid2 size={{ xs: 12, ...rest }}>
                <TextField
                    variant={variant}
                    label={makeFirstLetterCapital(label)}
                    type={type}
                    id={name}
                    name={name}
                    value={data[name] ? data[name] : ""}
                    required={required}
                    helperText={error}
                    error={Boolean(error)}
                    onChange={handleChange}
                    fullWidth
                    autoComplete="off"
                />
            </Grid2>
        </>
    );
}

Input.propTypes = {
    name: string.isRequired,
    required: bool,
    type: string,
    error: string,
    handleChange: func.isRequired,
    variant: string,
    data: object,
};

export default memo(Input);
